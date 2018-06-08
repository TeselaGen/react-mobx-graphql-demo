import { types } from "mobx-state-tree";

/**
 * Create MST model
 * @param {string} name
 * @param {*} model
 */
export const createModel = (name, model) => types.model(name, model);
