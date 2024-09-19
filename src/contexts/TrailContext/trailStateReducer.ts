import { TrailContextStateType, TrailStateAction } from './types';
export const initialState: TrailContextStateType = {
  groupSize: undefined,
  isGroomed: false,
  level: undefined,
  elevationRange: [200, 3000],
};

/**
 * I use Action-driven pattern to manage the state of the TrailContext.
 * for simple applications, this might be overkill,
 * but for larger applications, this pattern can be very useful.
 */
const trailStateReducer = (
  state: TrailContextStateType,
  action: TrailStateAction
) => {
  switch (action.type) {
    case 'SET_GROUP_SIZE':
      return { ...state, groupSize: action.payload };
    case 'SET_LEVEL':
      return { ...state, level: action.payload };
    case 'SET_IS_GROOMED':
      return { ...state, isGroomed: action.payload };
    case 'SET_ELEVATION_RANGE':
      return { ...state, elevationRange: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default trailStateReducer;
