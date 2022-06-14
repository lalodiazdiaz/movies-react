import styles from "./Empty.module.css";
import { FaSadCry } from "react-icons/fa";
export function Empty() {
  return (
    <div className={styles.empty}>
      <p>No Results</p>
      <FaSadCry size={200} color="Yellow" />
    </div>
  );
}
