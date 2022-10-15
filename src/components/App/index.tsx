import { useQuery } from "@apollo/client";
import { useMemo, useState } from "react";

import { LAUNCHES } from "../../queries";
import { Launch } from "../../types/Launch";
import { extractLaunchSites } from "../../utils/extractLaunchSites";
import { filterLaunchesBySite } from "../../utils/filterLaunchesBySite";
import { Chart } from "../Chart";
import { ErrorMessage } from "../ErrorMessage";
import { LaunchSites } from "../LaunchSites";
import { Spinner } from "../Spinner";
import styles from "./index.module.css";

export function App() {
  const [launchSiteId, setLaunchSiteId] = useState<string | undefined>();
  const { loading, error, data } = useQuery<{ launches: Launch[] }>(LAUNCHES);

  const launchSites = useMemo(
    () => data && extractLaunchSites(data.launches),
    [data]
  );

  const selectedLaunchSiteId = launchSiteId || launchSites?.[0].site_id;

  const launches = useMemo(
    () => data && filterLaunchesBySite(selectedLaunchSiteId!, data.launches),
    [selectedLaunchSiteId, data]
  );

  return (
    <div className={styles.root}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage>
          Oops, can not fetch launches data, please try again
        </ErrorMessage>
      ) : (
        <>
          <LaunchSites
            launchSites={launchSites!}
            launchSiteId={selectedLaunchSiteId!}
            onChange={setLaunchSiteId}
          />
          <Chart launches={launches!} />
        </>
      )}
    </div>
  );
}
