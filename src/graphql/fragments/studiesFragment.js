import { gql } from "../service";

export const studiesFragment = gql`
  {
    studies {
      results {
        contact_id
        metabolic_map_id
        object_ref_id
        slug
        createdAt
        updatedAt
        cid
        lastFetched
      }
    }
  }
`;
