const initState = {
  loading: false,
  error: false,
  data: []
};

interface ReduxState {
  loading: boolean;
  error: boolean;
  data: string[];
}

export enum ActionTypes {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error"
}

export type ReduxAction =
  | { type: ActionTypes.LOADING }
  | { type: ActionTypes.SUCCESS; payload: string[] }
  | { type: ActionTypes.ERROR };

export const reducer = (
  state: ReduxState = initState,
  action: ReduxAction
): ReduxState => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return { ...state, loading: true };
    case ActionTypes.SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ActionTypes.ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
};
