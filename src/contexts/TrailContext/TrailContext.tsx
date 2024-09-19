import { useQuery } from '@apollo/client'
import { createContext, FC, ReactNode, useContext, useReducer } from 'react'
import { GET_TRAILS } from '../../api/graphql/trails'
import { Trail } from '../../api/types'
import {
  TrailContextStateType,
  TrailContextType,
  TrailStateAction,
} from './types'
import useFilterFunction from './useFilterFunction'
import trailStateReducer from './trailStateReducer'

const TrailContext = createContext<TrailContextType>({} as TrailContextType)

export const TrailProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const initialState: TrailContextStateType = {
    groupSize: undefined,
    isGroomed: false,
    level: undefined,
    elevationRange: [200, 3000],
    trails: [],
  }

  const [{ level, elevationRange, isGroomed, groupSize, trails }, dispatch] =
    useReducer<
      (
        state: TrailContextStateType,
        action: TrailStateAction
      ) => TrailContextStateType
    >(trailStateReducer, initialState)

  const setGroupSize = (groupSize: number) => {
    dispatch({ type: 'SET_GROUP_SIZE', payload: groupSize })
  }

  const setLevel = (level: string) => {
    dispatch({ type: 'SET_LEVEL', payload: level })
  }

  const setIsGroomed = (isGroomed: boolean) => {
    dispatch({ type: 'SET_IS_GROOMED', payload: isGroomed })
  }

  const setElevationRange = (range: [number, number]) => {
    dispatch({ type: 'SET_ELEVATION_RANGE', payload: range })
  }

  const { loading } = useQuery<{ allTrails: Trail[] }>(GET_TRAILS, {
    /** We save the data to a state, because we wanna apply filters on it */
    onCompleted(data) {
      dispatch({ type: 'SET_TRAILS', payload: data.allTrails })
    },
  })

  useFilterFunction(
    trails,
    level,
    elevationRange,
    isGroomed,
    groupSize,
    dispatch
  )

  const value: TrailContextType = {
    trails,
    groupSize,
    isGroomed,
    level,
    loading,
    elevationRange,
    setGroupSize,
    setLevel,
    setIsGroomed,
    setElevationRange,
  }
  return <TrailContext.Provider value={value}>{children}</TrailContext.Provider>
}

export const useTrail = () => {
  const context = useContext(TrailContext)
  if (!context) {
    throw new Error('useTrail must be used within a TrailProvider')
  }
  return context
}
