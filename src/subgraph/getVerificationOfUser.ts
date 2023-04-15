import config from "@/utils/config";
import request, { gql } from "graphql-request";

interface UserEntity {
  address: string;
  verified: string;
}

export const getVerificationOfUser = async (
  address: string
): Promise<UserEntity[]> => {
  try {
    const response: any = await request(
      config.SUBGRAPH_URL,
      gql`
        query GetUsers(
        ) {
          users(
            where: {
              address: $address
            }
          ) {
            address
            verified
          }
        }
      `,
      {
        address: address.toLowerCase(),
      }
    );
    return response.users[0] || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
