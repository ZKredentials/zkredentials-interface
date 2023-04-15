import { useEffect, useState } from "react";
import { useMetaMask } from "./useMetamask";
import { getProofByUser } from "@/subgraph/getProofByUser";
import { getCid } from "@/utils/helper";
import { UPDATE_USER_PROOF } from "@/context/actionType";
import { useUserProof } from "@/context/UserProofContext";

const useUserProofHook = () => {
  const { state } = useMetaMask();
  const { dispatch } = useUserProof();

  const [data, setData] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (state.wallet) {
        const { cid } = await getProofByUser(state.wallet);
        if (cid) {
          setData(getCid(cid));
          dispatch({ type: UPDATE_USER_PROOF, cid: getCid(cid) });
          return;
        }
      }
      setData("");
    } catch (error) {
      console.log("Error from useUserProof", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (state.wallet) {
      fetchData();
    }
  }, [state.wallet]);

  return { data, error, loading, fetchData };
};

export default useUserProofHook;
