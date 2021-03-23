import React, { useState, useEffect } from "react";
import CardMovie from "../CardMovie";
import "../CardMovieList/CardMovieList.css";
import json from "./MovieGenders.json";

// Ação || undefined
export default function CardMovieListAll(props) {
  const url =
    "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR";
  const [movieInformation, setMovieInformation] = useState([]);
  const [loading, setLoading] = useState(true);
  const genderData = json.genres.find((el) => el.name === props.gender);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieInformation(
          props.gender
            ? data.results.filter((d) => d.genre_ids.includes(genderData.id))
            : data.results
        );
        setLoading(false);
      });
  }, [props.gender]);

  return (
    <div className="cardmovie-list">
      {loading ? (
        <div>Loading</div>
      ) : (
        movieInformation.map((movies) => (
          <CardMovie key={movies.id} {...movies} />
        ))
      )}
    </div>
  );
}
