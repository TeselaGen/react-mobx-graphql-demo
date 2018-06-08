import { types } from "mobx-state-tree";

/**
 * Wrapper for readable MST types
 */

const Types = Object.freeze({
  enumeration: "enumeration",
  model: "model",
  compose: "compose",
  custom: "custom",
  reference: "reference",
  union: "union",
  optional: "optional",
  literal: "literal",
  maybe: "maybe",
  refinement: "refinement",
  string: "string",
  boolean: "boolean",
  number: "number",
  Date: "Date",
  map: "map",
  array: "array",
  frozen: "frozen",
  identifier: "identifier",
  late: "late",
  undefined: "undefined",
  null: "null"
});

const NullTypes = attr => ({
  Null: types.maybe(types[attr]),
  notNull: types[attr]
});

export const String = NullTypes(Types.string);
export const Number = NullTypes(Types.number);
export const Boolean = NullTypes(Types.boolean);
export const Date = NullTypes(Types.Date);
export const Null = types.null;
export const Undefined = types.undefined;
export const Model = model => types.model(model);
