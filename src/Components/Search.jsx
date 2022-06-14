import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const query = useQuery();
  const search = query.get("search");

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          value={search ?? ""}
          placeholder={"Title "}
          area-label="Search movies"
          onChange={(e) => {
            const value = e.target.value;

            history.push("/?search=" + value);
          }}
        />

        <FaSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
}
