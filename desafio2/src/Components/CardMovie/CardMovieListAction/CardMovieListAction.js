import React, { useState, useEffect } from "react";
import CardMovie from "../CardMovie";
import "../CardMovieList/CardMovieList.css";

export default function CardMovieListAction() {
  const url =
    "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR&gender=action";
  const [movieInformation, setMovieInformation] = useState([]);
  const [loading, setLoading] = useState(true);

  const filtragenero = (el) => {
    if (loading === false) {
      if (el.genre_ids.indexOf(28) != -1) {
        return el.genre_ids;
      }
    }
  };

  const acao = loading ? (
    <div>Loading</div>
  ) : (
    movieInformation
      .filter(filtragenero)
      .map((movies) => <CardMovie key={movies.id} {...movies} />)
  );

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMovieInformation(data.results);
        console.log(data.results);
        setLoading(false);
      });
  }, []);

  return <div className="cardmovie-list">{acao}</div>;
}
