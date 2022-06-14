import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Search() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [query, setQuery] = useSearchParams();
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

            setQuery({ search: value });
          }}
        />

        <FaSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
}
