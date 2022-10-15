import { gql } from "@apollo/client";

export const LAUNCHES = gql`
  query Launches {
    launches {
      launch_site {
        site_id
        site_name
      }
      launch_success
      launch_date_utc
      rocket {
        rocket_name
        rocket_type
      }
      mission_name
    }
  }
`;
