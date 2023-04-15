import React from "react";
import { PropsWithChildren } from "react";
import { UPDATE_WORLDID_VERIFIED } from "../actionType";

type UpdateVerified = {
  type: "UPDATE_WORLDID_VERIFIED";
  isVerified: boolean;
};

type Action = UpdateVerified;

type State = {
  isVerified: boolean;
};

type Dispatch = (action: Action) => void;

const initialState: State = {
  isVerified: false,
} as const;

const WorldIDContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function worldIdReducer(state: State, action: Action): State {
  switch (action.type) {
    case UPDATE_WORLDID_VERIFIED: {
      const { isVerified } = action;
      return {
        ...state,
        isVerified,
      } as State;
    }

    default: {
      // throw new Error("Unhandled action type");
      return state;
    }
  }
}

function WorldIDProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = React.useReducer(worldIdReducer, initialState);
  const value = { state, dispatch };

  return (
    <WorldIDContext.Provider value={value}>{children}</WorldIDContext.Provider>
  );
}

function useWorldID() {
  const context = React.useContext(WorldIDContext);
  if (context === undefined) {
    throw new Error("useMetaMask must be used within a MetaMaskProvider");
  }
  return context;
}

export { WorldIDProvider, useWorldID };
