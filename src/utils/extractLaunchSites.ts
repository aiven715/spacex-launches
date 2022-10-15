import { Launch } from "../types/Launch";
import { LaunchSite } from "../types/LaunchSite";

export function extractLaunchSites(launches: Launch[]): LaunchSite[] {
  const launchSitesMap = launches.reduce(
    (acc, launch) => ({
      ...acc,
      [launch.launch_site.site_id]: launch.launch_site,
    }),
    {}
  );
  return Object.values(launchSitesMap);
}
