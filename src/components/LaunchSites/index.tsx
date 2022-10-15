import { LaunchSite } from "../../types/LaunchSite";
import styles from "./index.module.css";

export type LaunchSitesProps = {
  launchSites: LaunchSite[];
  launchSiteId: string;
  onChange: (launchSiteId: string) => void;
};

export function LaunchSites({
  launchSites,
  launchSiteId,
  onChange,
}: LaunchSitesProps) {
  return (
    <div className={styles.root}>
      <label className={styles.label}>Select launch site to show:</label>
      <select
        className={styles.select}
        value={launchSiteId}
        onChange={(e) => onChange(e.target.value)}
      >
        {launchSites.map((launchSite) => (
          <option key={launchSite.site_id} value={launchSite.site_id}>
            {launchSite.site_name}
          </option>
        ))}
      </select>
    </div>
  );
}
