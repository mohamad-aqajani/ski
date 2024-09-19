import { Trail, TrailDifficultyLevel } from '../api/types';
import { GroupSize } from '../contexts/TrailContext/types';

/** Should match the trails that have elevation gain between the range numbers */
const filterElevationGain = (
  trail: Trail,
  elevationRange: [number, number]
) => {
  if (!elevationRange) return true;
  const mappedHeights = trail.accessedByLifts.map((lift) => lift.elevationGain);
  if (
    Math.min(...mappedHeights) >= elevationRange[0] &&
    Math.max(...mappedHeights) <= elevationRange[1]
  ) {
    return true;
  }

  return false;
};

/** Should match the trails that have lifts with capacity greater than or equal to the group size */
const filterBasedOnGroupSize = (trail: Trail, groupSize: GroupSize) => {
  if (!groupSize) return true;
  return trail.accessedByLifts.some((lift) => lift.capacity >= groupSize);
};
/** Aggrigates all the filter criterias */
const filterTrails = (
  trails: Trail[],
  level: TrailDifficultyLevel | undefined,
  elevationRange: [number, number],
  isGroomed: boolean,
  groupSize: GroupSize
) => {
  return trails
    .filter((trail) => filterBasedOnGroupSize(trail, groupSize))
    .filter((trail) => (level ? trail.difficulty === level : true))
    .filter((trail) => (isGroomed === false ? true : trail.groomed))
    .filter((trail) => filterElevationGain(trail, elevationRange));
};

export default filterTrails;
