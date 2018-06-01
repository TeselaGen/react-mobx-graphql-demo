import { client } from "./service";

export const query = async fragment => {
  const resp = await client.query({
    query: fragment,
    fetchPolicy: "network-only"
  });
  const key = Object.keys(resp.data);
  return resp.data[key[0]]["results"];
};
