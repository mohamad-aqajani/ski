import { TrailContextStateType, TrailStateAction } from './types'

const trailStateReducer = (
  state: TrailContextStateType,
  action: TrailStateAction
) => {
  switch (action.type) {
    case 'SET_GROUP_SIZE':
      return { ...state, groupSize: action.payload }
    case 'SET_LEVEL':
      return { ...state, level: action.payload }
    case 'SET_TRAILS':
      return { ...state, trails: action.payload }
    case 'SET_IS_GROOMED':
      return { ...state, isGroomed: action.payload }
    case 'SET_ELEVATION_RANGE':
      return { ...state, elevationRange: action.payload }
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

export default trailStateReducer
