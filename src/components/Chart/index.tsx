import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Launch } from "../../types/Launch";

import styles from "./index.module.css";

const brandDark = require("highcharts/themes/brand-dark");

brandDark(Highcharts);

export type ChartProps = {
  launches: Launch[];
};

export function Chart({ launches }: ChartProps) {
  const options = {
    chart: {
      type: "area",
    },
    title: {
      text: null,
    },
    xAxis: {
      type: "datetime",
    },
    series: [
      {
        name: "Launches",
        data: launches.map((launch) => ({
          x: new Date(launch.launch_date_utc),
          y: launch.launch_success ? 1 : 0,
          custom: launch,
        })),
      },
    ],
    tooltip: {
      formatter: function () {
        const launch = (this as any).point.custom as Launch;
        return [
          `<b>Status:</b> ${launch.launch_success ? "Success" : "Failure"}`,
          `<b>Mission:</b> ${launch.mission_name}`,
          `<b>Rocket name:</b> ${launch.rocket.rocket_name}`,
          `<b>Rocket type:</b> ${launch.rocket.rocket_type}`,
          `<b>Launch date:</b> ${new Date(
            launch.launch_date_utc
          ).toLocaleDateString("en-US")}`,
        ].join("<br />");
      },
    },
  };

  return (
    <div className={styles.root}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
