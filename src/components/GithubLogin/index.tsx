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

const GithubLogin = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isTokenValid, setIsTokenValid] = useState<boolean>(false);

  const handleLogin = async () => {
    window.open(
      `${BACKEND_BASE_URL}/github/login`,
      `_blank`,
      `height=500,width=800`
    );
  };

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_STORAGE_GITHUB_ACCESS_TOKEN);
    if (token) {
      setLoggedIn(true);

      // TODO: Check whether is token still valid
    }
  }, []);

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
