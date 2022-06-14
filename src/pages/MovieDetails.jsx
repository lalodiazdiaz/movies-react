import { useParams } from "react-router-dom";
import { get } from "../utils/httpClient";
import styles from "./MoviesDetails.module.css";
import React, { useState, useEffect } from "react";
import { Spinner } from "../Components/Spinner";
import { getMoviesImg } from "../utils/getMoviesImg";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const [movieD, setMovieD] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    get(`/movie/${movieId}`).then((data) => {
      setMovieD(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  const imgUrl = getMoviesImg(movieD.poster_path, 500);

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imgUrl}
        alt={movieD.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movieD.title}
        </p>

        <p>
          <strong>Genres: </strong>
          {movieD.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description: </strong>
          {movieD.overview}
        </p>
      </div>
    </div>
  );
}
