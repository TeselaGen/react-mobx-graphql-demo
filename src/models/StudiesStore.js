import { types, flow } from "mobx-state-tree";
import { query } from "../graphql/query";
import { studiesFragment } from "../graphql/fragments/studiesFragment";

export const Study = types.model("Study", {
  contact_id: types.maybe(types.string),
  metabolic_map_id: types.maybe(types.string),
  object_ref_id: types.maybe(types.string),
  slug: types.maybe(types.string),
  createdAt: types.maybe(types.string),
  updatedAt: types.maybe(types.string),
  cid: types.maybe(types.string),
  lastFetched: types.maybe(types.string)
});

export const StudyStore = types
  .model("StudyStore", {
    studies: types.optional(types.array(Study), []),
    fetchingData: types.optional(types.boolean, false)
  })
  .actions(self => {
    const getStudies = flow(function*() {
      self.fetchingData = true;
      self.studies = yield query(studiesFragment);
      self.fetchingData = false;
    });
    return { getStudies };
  });
