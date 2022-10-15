import { LaunchSite } from "./LaunchSite";
import { Rocket } from "./Rocket";

export type Launch = {
  mission_name: string;
  launch_date_utc: string;
  launch_success: boolean;
  launch_site: LaunchSite;
  rocket: Rocket;
};
