import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Rows.css";

function Rows({ title, fetchUrl, isLargeRow = false, isSmallRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            className={`row__poster ${
              isLargeRow || (isSmallRow && "row__posterLarge")
            }`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow || isSmallRow
                ? movie.poster_path
                : movie.brackdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Rows;
