import { String, Model } from "../utils/modelTypes";
import { eddObject } from "./eddObjectModel";

export const Study = {
  contact_id: String.Null,
  metabolic_map_id: String.Null,
  object_ref_id: String.Null,
  object_ref: Model(eddObject),
  slug: String.Null,
  createdAt: String.Null,
  updatedAt: String.Null,
  cid: String.Null,
  lastFetched: String.Null
};
