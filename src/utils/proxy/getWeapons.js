import { client } from "./graphqlClient";
import gql from "graphql-tag";

const query = gql`
  {
    getWeaponsList {
      name
    }
  }
`;

/**
 * Query for a list of all the Weapons in the game
 */
export default async function getWeapons() {
  const response = await client.query({ query });
  return response.data;
}
