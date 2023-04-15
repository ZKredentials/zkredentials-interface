import { BACKEND_BASE_URL } from "@/utils/constants";
import {
  TwitterLoginContainer,
  TwitterLoginLogo,
  TwitterLoginText,
} from "./style";
import Image from "next/image";
import TwitterIcon from "@/assets/images/Twitter.svg";

const TwitterLogin = () => {
  const handleLogin = async () => {
    window.open(
      `${BACKEND_BASE_URL}/github/login`,
      `_blank`,
      `height=500,width=800`
    );
  };

  return (
    <TwitterLoginContainer type="button" onClick={handleLogin}>
      <TwitterLoginLogo>
        <Image src={TwitterIcon} alt="Twitter" fill />
      </TwitterLoginLogo>
      <TwitterLoginText>Login with Twitter</TwitterLoginText>
    </TwitterLoginContainer>
  );
};

export default TwitterLogin;
