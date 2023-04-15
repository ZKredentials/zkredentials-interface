import { BACKEND_BASE_URL } from "@/utils/constants";

const GithubLogin = () => {
  const handleLogin = async () => {
    window.open(
      `${BACKEND_BASE_URL}/github/login`,
      `_blank`,
      `height=500,width=800`
    );
  };

  return (
    <div>
      <button type="button" onClick={handleLogin}>
        Login in with Github
      </button>
    </div>
  );
};

export default GithubLogin;
