/* eslint-disable no-case-declarations */
import { UPDATE_WORLDID_VERIFIED } from "../actionType";
import { IAppContextState } from "./old";

export interface IAction {
  type: typeof UPDATE_WORLDID_VERIFIED;
  value: any;
}

const WorldIDReudcer = (
  state: IAppContextState,
  action: IAction
): IAppContextState => {
  switch (action.type) {
    case UPDATE_WORLDID_VERIFIED:
      return {
        ...state,
        isVerified: action.value,
      };
    default:
      return state;
  }
};

export default WorldIDReudcer;
