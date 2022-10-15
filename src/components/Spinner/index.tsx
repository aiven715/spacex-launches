import { DotWave } from "@uiball/loaders";
import styles from "./index.module.css";

export function Spinner() {
  return (
    <div className={styles.root}>
      <DotWave color="rgb(219 39 119)" speed={0.75} />
    </div>
  );
}
