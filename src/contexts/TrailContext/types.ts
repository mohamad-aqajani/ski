import { Dispatch, SetStateAction } from 'react';
import { Trail, TrailDifficultyLevel } from '../../api/types';

export type GroupSize = number | undefined;
export type TrailContextType = {
  trails: Trail[];
  groupSize: GroupSize;
  isGroomed: boolean;
  level: TrailDifficultyLevel | undefined;
  loading?: boolean;
  elevationRange: [number, number];
  /** Actions */
  setGroupSize: (size: number) => void;
  setLevel: (level: string) => void;
  setIsGroomed: (isGroomed: boolean) => void;
  setElevationRange: (range: [number, number]) => void;
  resetFilters: () => void;
};

export type TrailStateAction = {
  type:
    | 'SET_GROUP_SIZE'
    | 'SET_LEVEL'
    | 'SET_IS_GROOMED'
    | 'SET_ELEVATION_RANGE'
    | 'SET_LOADING';
  payload?: any;
};

export type TrailContextStateType = Pick<
  TrailContextType,
  'groupSize' | 'isGroomed' | 'level' | 'elevationRange'
>;
