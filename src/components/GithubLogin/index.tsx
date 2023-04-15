import {
  BACKEND_BASE_URL,
  LOCAL_STORAGE_GITHUB_ACCESS_TOKEN,
} from "@/utils/constants";
import {
  GithubLoginContainer,
  GithubLoginLogo,
  GithubLoginText,
} from "./style";
import Image from "next/image";
import GithubIcon from "@/assets/images/Github.svg";
import { useEffect, useState } from "react";
import { useSocials } from "@/context/SocialsContext";
import { UPDATE_GITHUB_LOGGEDIN } from "@/context/actionType";

const GithubLogin = () => {
  let githubWindow;
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false);
  const { state, dispatch } = useSocials();

  const handleLogin = async () => {
    githubWindow = window.open(
      `${BACKEND_BASE_URL}/github/login`,
      `_blank`,
      `height=500,width=800`
    );
  };

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_GITHUB_ACCESS_TOKEN);
    if (token) {
      setLoggedIn(true);
      dispatch({ type: UPDATE_GITHUB_LOGGEDIN, isGithub: true });
    }
  }, [state.isGithub]);

  return (
    <GithubLoginContainer type="button" onClick={handleLogin}>
      <GithubLoginLogo>
        <Image src={GithubIcon} alt="Github" fill />
      </GithubLoginLogo>

      {loggedIn ? (
        <GithubLoginText>Connected</GithubLoginText>
      ) : (
        <GithubLoginText>Login with Github</GithubLoginText>
      )}
    </GithubLoginContainer>
  );
};

export default GithubLogin;
