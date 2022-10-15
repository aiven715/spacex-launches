import { Launch } from "../types/Launch";

export function filterLaunchesBySite(launchSiteId: string, launches: Launch[]) {
  return launches
    .filter((launch) => launch.launch_site.site_id === launchSiteId)
    .sort(
      (a, b) =>
        new Date(a.launch_date_utc).getTime() -
        new Date(b.launch_date_utc).getTime()
    );
}
