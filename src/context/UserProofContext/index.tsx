import React from "react";
import { PropsWithChildren } from "react";
import { UPDATE_USER_PROOF } from "../actionType";

type SET_USER_PROOF = {
  type: "UPDATE_USER_PROOF";
  cid: string;
};

type Action = SET_USER_PROOF;

type State = {
  cid: string;
};

type Dispatch = (action: Action) => void;

const initialState: State = {
  cid: "",
} as const;

const UserProofContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function worldIdReducer(state: State, action: Action): State {
  switch (action.type) {
    case UPDATE_USER_PROOF: {
      const { cid } = action;
      return {
        ...state,
        cid,
      } as State;
    }

    default: {
      // throw new Error("Unhandled action type");
      return state;
    }
  }
}

function UserProofProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = React.useReducer(worldIdReducer, initialState);
  const value = { state, dispatch };

  return (
    <UserProofContext.Provider value={value}>
      {children}
    </UserProofContext.Provider>
  );
}

function useUserProof() {
  const context = React.useContext(UserProofContext);
  if (context === undefined) {
    throw new Error("useMetaMask must be used within a MetaMaskProvider");
  }
  return context;
}

export { UserProofProvider, useUserProof };
