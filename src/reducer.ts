import { SET_TIME } from './actions';

interface HexTimeState {
  hours: string | null;
  minutes: string | null;
  seconds: string | null;
  textColor: string | null;
}

export type { HexTimeState };

export const reducer = (
  state: HexTimeState,
  action: { type: string; state?: Partial<HexTimeState> },
): HexTimeState => {
  switch (action.type) {
    case SET_TIME:
      return {
        ...state,
        ...action.state,
      };
    default:
      return state;
  }
};
