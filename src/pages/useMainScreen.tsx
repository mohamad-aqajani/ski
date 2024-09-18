import { useCallback, useMemo, useState } from 'react'
import { Lift, Trail, TrailDifficultyLevel } from '../api/types'
import { useLazyQuery } from '@apollo/client'
import GET_TRAILS from '../api/graphql/allTrails.graphql'
type GroupSize = number | undefined

const useMainScreen = () => {
 // const [level, setLevel] = useState<TrailDifficultyLevel | undefined>()
 // const [groupSize, setGroupSize] = useState<GroupSize>()
 // const [getTrails, { loading, data }] = useLazyQuery<{ allTrails: Trail[] }>(
 //   GET_TRAILS,
 //   {
 //     variables: { status: 'OPEN' },
 //   }
 // )
 // /**
 //  * Checks if the lift has sufficient capacity to accommodate the group size.
 //  */
 // const hasSufficientLiftCapacity = (lift: Lift, groupSize: GroupSize) => {
 //   return lift.capacity >= (groupSize ?? 0)
 // }
 // const isTrailSuitable = useCallback(
 //   (
 //     trail: Trail,
 //     groupSize: GroupSize,
 //     level: TrailDifficultyLevel | undefined
 //   ) => {
 //     /** The suitable Trail is the one that can be accessed by at least one lift that has sufficient capacity to accommodate the group size. */
 //     const liftCanAccommodateGroup = trail.accessedByLifts.some((lift) =>
 //       hasSufficientLiftCapacity(lift, groupSize)
 //     )
 //     const matchesDifficultyLevel = trail.difficulty === level || !level
 //     return liftCanAccommodateGroup && matchesDifficultyLevel
 //   },
 //   []
 // )
 // /**
 //  * Filters the trails based on the group size and difficulty level.
 //  */
 // const filteredTrails = useMemo(() => {
 //   if (!data?.allTrails) {
 //     return []
 //   }
 //   return data.allTrails.filter((trail) =>
 //     isTrailSuitable(trail, groupSize, level)
 //   )
 // }, [data?.allTrails, isTrailSuitable, groupSize, level])
 // return {
 //   trails: filteredTrails,
 //   setLevel,
 //   setGroupSize,
 //   groupSize,
 //   level,
 //   getTrails,
 //   loading,
 // }
}

export default useMainScreen
