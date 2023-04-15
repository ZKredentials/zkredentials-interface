import config from "@/utils/config";
import request, { gql } from "graphql-request";

interface UserEntity {
  id?: string;
  cid?: string;
}

export const getProofByUser = async (address: string): Promise<UserEntity> => {
  try {
    const response: any = await request(
      config.SUBGRAPH_URL,
      gql`
        query getUsers($address: String) {
          users(where: { id: $address }) {
            cid
          }
        }
      `,
      {
        address: address.toLowerCase(),
      }
    );
    console.log("response", response);
    return (
      response.users[0] || {
        cid: "",
      }
    );
  } catch (error) {
    console.error("Subgraph", error);
    return {
      cid: "",
    };
  }
};
