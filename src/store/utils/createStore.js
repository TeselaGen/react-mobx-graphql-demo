import { types, flow } from "mobx-state-tree";
import { query } from "../../graphql/query";
import { encodeModelToGQL } from "../../graphql/utils/encodeModelToGQL";
import { createModel } from "../utils/createModel";

/**
 * MST store to be created
 * @param {string} storeName name of store model and fragment
 * @param {*} model model object for mobx and graphql
 * @param {boolean} isArray
 */
const store = (storeName, model, isArray) => {
  const createdModel = createModel(storeName, model);
  const createdFragment = encodeModelToGQL(storeName, model);
  return types
    .model(`${storeName}Store`, {
      [storeName]: isArray
        ? types.optional(types.array(createdModel), [])
        : types.optional(createdModel, {}),
      fetchingData: types.optional(types.boolean, false)
    })
    .actions(self => {
      const fetchData = flow(function*() {
        self.fetchingData = true;
        self[storeName] = yield query(createdFragment);
        self.fetchingData = false;
      });
      return { fetchData };
    });
};

export default store;
