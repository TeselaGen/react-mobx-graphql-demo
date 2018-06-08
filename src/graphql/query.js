import { clientWithCache } from "./service";

export const query = async fragment => {
  const resp = await clientWithCache.request(fragment);
  const data = resp;
  const key = Object.keys(data);
  return data[key[0]]["results"];
};
