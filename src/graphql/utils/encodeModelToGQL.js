import { gql } from "../service";
import { isPlural } from "pluralize";

/**
 * Generates GQL fragment for the model
 * @param {string} name model name
 * @param {*} model model object
 */
export const encodeModelToGQL = (name, model) => {
  let gqlFragment = "";
  if (isPlural(name)) {
    gqlFragment = gql`
      {
        ${name} {
          results {
            ${iterationKeys(model)}
          }
        }
      }
    `;
  }
  return gqlFragment;
};

/**
 * Generates fragment from model keys
 * @param {*} model model object
 */
const iterationKeys = model => {
  let fragment = "";
  for (const k of Object.keys(model)) {
    if (model[k].name === "AnonymousModel") {
      fragment += `${k} {\n${iterationKeys(model[k].properties)}}\n`;
      continue;
    }
    fragment += `${k}\n`;
  }
  return fragment;
};
