import { Trail } from "../api/types";

export type SelectTrailLevelProps = {
  onSelect: (value: string) => void;
};

export type TrailsListProps = {
  trails: Array<Trail>;
};

