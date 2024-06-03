// components/Banner.js
import React, { useEffect, useState } from "react";
import instance from "../instance"
import "../css/Banner.css";

function Banner({ fetchUrl }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      const results = request.data.results;

      //   console.log(results);
      setMovie(results[Math.floor(Math.random() * results.length)]);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: ` url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "cover",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {movie?.overview.slice(0, 100)}...
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
