import { InputNumberProps } from 'antd';
import { Trail, TrailDifficultyLevel } from '../api/types';

export type SelectTrailLevelProps = {
  onSelect: (value: TrailDifficultyLevel) => void;
  value?: TrailDifficultyLevel;
};

export type TrailsListProps = {
  trails: Trail[];
};

export type StyledInputNumberProps = InputNumberProps & {
  label: string;
};

export type TrailTagProps = {
  difficulty: TrailDifficultyLevel | string;
};
