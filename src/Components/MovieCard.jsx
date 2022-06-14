import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import placeHolder from "../placeholder.png";
import { getMoviesImg } from "../utils/getMoviesImg";

export function MovieCard({ movie }) {
  const imgUrl = getMoviesImg(movie.poster_path, 500);

  return (
    <li className={styles.movieCard}>
      {" "}
      {/*  */}
      <Link to={"/movies/" + movie.id}>
        {" "}
        {/* navegacion a MovieDetails*/}
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imgUrl}
          alt={movie.title}
        />
        <div className={styles.movieTitle}>{movie.title}</div>
      </Link>
    </li>
  );
}
