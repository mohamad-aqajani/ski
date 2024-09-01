import { Trail, TrailDifficultyLevel } from "../api/types";

export type SelectTrailLevelProps = {
  onSelect: (value: TrailDifficultyLevel) => void;
  defaultValue?: TrailDifficultyLevel;
};

export type TrailsListProps = {
  trails: Trail[];
};
