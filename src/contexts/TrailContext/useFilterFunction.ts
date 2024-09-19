import { useEffect } from 'react'
import { Trail, TrailDifficultyLevel } from '../../api/types'
import { GroupSize, TrailStateAction } from './types'

const useFilterFunction = (
  trails: Trail[],
  level: TrailDifficultyLevel | undefined,
  elevationRange: number[],
  isGroomed: boolean,
  groupSize: GroupSize,
  dispatch: React.Dispatch<TrailStateAction>
) => {
  useEffect(() => {
    const filterTrails = () => {
      return trails
        .filter((trail) =>
          groupSize
            ? trail.accessedByLifts.some((lift) => lift.capacity >= groupSize)
            : true
        )
        .filter((trail) => (level ? trail.difficulty === level : true))
        .filter((trail) => (isGroomed ? trail.groomed : !trail.groomed))
        .filter(
          (trail) =>
            trail.accessedByLifts[0].elevationGain >= elevationRange[0] &&
            trail.accessedByLifts[0].elevationGain <= elevationRange[1]
        )
    }

    dispatch({ type: 'SET_TRAILS', payload: filterTrails() })
  }, [level, elevationRange, isGroomed, groupSize])
}

export default useFilterFunction
