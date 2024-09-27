import styles from "./page.module.css"

export default function loading() {
  return (
    <div className={styles.loadingContainer}>
      <h1 className={styles.loadingText}>loading...</h1>
    </div>
  );
}
