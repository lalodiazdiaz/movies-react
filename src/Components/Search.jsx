import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";

export function Search() {
  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input type="text" className={styles.searchInput} />
        <button type="submit" className={styles.searchButton}>
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
