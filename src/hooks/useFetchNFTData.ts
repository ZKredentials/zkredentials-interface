import { getContract } from "@/contracts";
import config from "@/utils/config";
import { useEffect, useState } from "react";
import { useMetaMask } from "./useMetamask";
import { ethers } from "ethers";
import { ERC721__factory } from "@/contracts/abi/types";

interface IData {
  maxSupply: number;
  preSalePrice: string;
  publicSalePrice: string;
}

const EmptyData: IData = {
  maxSupply: 0,
  preSalePrice: "0",
  publicSalePrice: "0",
};

const useFetchNFTData = () => {
  const { state } = useMetaMask();
  const [data, setData] = useState<IData>(EmptyData);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (!state.wallet) {
        setData(EmptyData);
        setError("User has yet to connect wallet.");
        return;
      }

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      if (!provider) {
        setData(EmptyData);
        setError("Provider does not exist.");
        return;
      }

      const contract = ERC721__factory.connect(
        config.CONTRACT_ADDRESS,
        provider
      );
      if (!contract) {
        setData(EmptyData);
        setError("Contract does not exist.");
        return;
      }

      const maxSupply = await contract.maxSupply();
      const preSalePrice = await contract._presalePrice();
      const publicSalePrice = await contract._publicSalePrice();

      setData({
        maxSupply: Number(maxSupply),
        preSalePrice: String(Number(preSalePrice)),
        publicSalePrice: String(Number(publicSalePrice)),
      });
    } catch (error) {
      console.log("Error from fetchUserNFTLimit", error);
      setData(EmptyData);
      setError(
        "Something went wrong with fetching user minting limits. Please refresh the page."
      );
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

export default useFetchNFTData;
