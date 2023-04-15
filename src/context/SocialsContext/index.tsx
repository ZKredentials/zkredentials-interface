import React from "react";
import { PropsWithChildren } from "react";
import { UPDATE_GITHUB_LOGGEDIN, UPDATE_TWITTER_LOGGEDIN } from "../actionType";

type SET_GITHUB_LOGGEDIN = {
  type: "UPDATE_GITHUB_LOGGEDIN";
  isGithub: boolean;
};

type SET_TWITTER_LOGGEDIN = {
  type: "UPDATE_TWITTER_LOGGEDIN";
  isTwitter: boolean;
};
type Action = SET_GITHUB_LOGGEDIN | SET_TWITTER_LOGGEDIN;

type State = {
  isGithub: boolean;
  isTwitter: boolean;
};

type Dispatch = (action: Action) => void;

const initialState: State = {
  isGithub: false,
  isTwitter: false,
} as const;

const WorldIDContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function worldIdReducer(state: State, action: Action): State {
  switch (action.type) {
    case UPDATE_GITHUB_LOGGEDIN: {
      const { isGithub } = action;
      return {
        ...state,
        isGithub,
      } as State;
    }
    case UPDATE_TWITTER_LOGGEDIN: {
      const { isTwitter } = action;
      return {
        ...state,
        isTwitter,
      } as State;
    }

    default: {
      // throw new Error("Unhandled action type");
      return state;
    }
  }
}

function SocialProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = React.useReducer(worldIdReducer, initialState);
  const value = { state, dispatch };

  return (
    <WorldIDContext.Provider value={value}>{children}</WorldIDContext.Provider>
  );
}

function useSocials() {
  const context = React.useContext(WorldIDContext);
  if (context === undefined) {
    throw new Error("useMetaMask must be used within a MetaMaskProvider");
  }
  return context;
}

export { SocialProvider, useSocials };
