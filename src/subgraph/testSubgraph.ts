import config from "@/utils/config";
import request, { gql } from "graphql-request";

interface UserEntity {
  id: string;
}

export const testSubgraph = async (): Promise<UserEntity[]> => {
  try {
    const response: any = await request(
      config.SUBGRAPH_URL,
      gql`
        query getUsers {
          users {
            id
          }
        }
      `
    );
    console.log("asd", response);
    return response.data.users[0] || [];
  } catch (error) {
    console.error("Subgraph", error);
    return [];
  }
};
