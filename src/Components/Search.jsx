import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";
import { useEffect } from "react";

export function Search() {
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/?search=" + searchText);
  };

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setSearchText(search  || '');
  }, [search]);

  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          type="text"
          className={styles.searchInput}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>
          <FaSearch size={20} />
        </button>
      </div>
    </form>
  );
}
