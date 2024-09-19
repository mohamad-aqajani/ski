import { Trail, TrailDifficultyLevel, TrailStatus } from '../../../api/types'
import { GroupSize } from '../../../contexts/TrailContext/types'

// Mock trail data
export const mockTrail1: Trail = {
  name: 'Trail 1',
  difficulty: TrailDifficultyLevel.INTERMEDIATE,
  groomed: true,
  status: TrailStatus.Closed,
  accessedByLifts: [
    {
      name: 'test',
      elevationGain: 500,
      capacity: 4,
      id: '1',
      night: false,
      trailAccess: [],
    },
    {
      name: 'test2',
      elevationGain: 800,
      capacity: 6,
      id: '2',
      night: false,
      trailAccess: [],
    },
  ],
  id: '',
  trees: true,
  night: false,
}

export const mockTrail2: Trail = {
  name: 'Trail 2',
  difficulty: TrailDifficultyLevel.BEGINNER,
  groomed: false,
  status: TrailStatus.Open,
  accessedByLifts: [
    {
      id: '1',
      elevationGain: 300,
      capacity: 2,
      name: 'test22',
      night: false,
      trailAccess: [],
    },
    {
      id: '2',
      elevationGain: 500,
      capacity: 8,
      name: 'test34',
      night: false,
      trailAccess: [],
    },
  ],
  id: '',
  trees: false,
  night: true,
}

export const mockTrails: Trail[] = [mockTrail1, mockTrail2]

// Mock group sizes
export const smallGroupSize: GroupSize = 2
export const largeGroupSize: GroupSize = 6

// Mock difficulty levels
export const easyDifficulty = TrailDifficultyLevel.BEGINNER
export const moderateDifficulty = TrailDifficultyLevel.INTERMEDIATE
export const hardDifficulty = TrailDifficultyLevel.EXPERT
