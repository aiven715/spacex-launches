import styles from "./index.module.css";

export type ErrorMessageProps = {
  children: string;
};

export function ErrorMessage({ children }: ErrorMessageProps) {
  return <span className={styles.root}>{children}</span>;
}
