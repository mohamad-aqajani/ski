import { useQuery } from '@apollo/client';
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { GET_TRAILS } from '../../api/graphql/trails';
import { Trail } from '../../api/types';
import filterTrails from '../../utils/filterTrails';
import trailStateReducer, { initialState } from './trailStateReducer';
import {
  TrailContextStateType,
  TrailContextType,
  TrailStateAction,
} from './types';

const TrailContext = createContext<TrailContextType>({} as TrailContextType);

export const TrailProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [{ level, elevationRange, isGroomed, groupSize }, dispatch] =
    useReducer<
      (
        state: TrailContextStateType,
        action: TrailStateAction
      ) => TrailContextStateType
    >(trailStateReducer, initialState);

  const setGroupSize = (groupSize: number) => {
    dispatch({ type: 'SET_GROUP_SIZE', payload: groupSize });
  };

  const setLevel = (level: string) => {
    dispatch({ type: 'SET_LEVEL', payload: level });
  };

  const setIsGroomed = (isGroomed: boolean) => {
    dispatch({ type: 'SET_IS_GROOMED', payload: isGroomed });
  };

  const setElevationRange = (range: [number, number]) => {
    dispatch({ type: 'SET_ELEVATION_RANGE', payload: range });
  };

  const resetFilters = () => {
    dispatch({ type: 'SET_GROUP_SIZE', payload: initialState.groupSize });
    dispatch({ type: 'SET_LEVEL', payload: initialState.level });
    dispatch({ type: 'SET_IS_GROOMED', payload: initialState.isGroomed });
    dispatch({
      type: 'SET_ELEVATION_RANGE',
      payload: initialState.elevationRange,
    });
  };

  const { loading, data } = useQuery<{ allTrails: Trail[] }>(GET_TRAILS);

  const filteredTrails = useMemo(() => {
    return filterTrails(
      data?.allTrails || [],
      level,
      elevationRange,
      isGroomed,
      groupSize
    );
  }, [data, level, elevationRange, isGroomed, groupSize]);

  const value: TrailContextType = {
    trails: filteredTrails,
    groupSize,
    isGroomed,
    level,
    loading,
    elevationRange,
    setGroupSize,
    setLevel,
    setIsGroomed,
    setElevationRange,
    resetFilters,
  };
  return (
    <TrailContext.Provider value={value}>{children}</TrailContext.Provider>
  );
};

export const useTrail = () => {
  const context = useContext(TrailContext);
  if (!context) {
    throw new Error('useTrail must be used within a TrailProvider');
  }
  return context;
};
