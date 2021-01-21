// function mit dispatch
import { ActionTypes, ReduxAction } from "../reducers/repoReducer";
import { Dispatch } from "redux";

export const getRepos: any = (text: string) => {
  return async (dispatch: Dispatch<ReduxAction>) => {
    dispatch({ type: ActionTypes.LOADING });
    try {
      const data = await (
        await fetch(`https://registry.npmjs.org/-/v1/search?text=${text}`)
      ).json();
      const packungen = data.objects.map((paket: any) => {
        return paket.package.name;
      });
      dispatch({ type: ActionTypes.SUCCESS, payload: packungen });
    } catch (error) {
      dispatch({ type: ActionTypes.ERROR });
    }
  };
};
