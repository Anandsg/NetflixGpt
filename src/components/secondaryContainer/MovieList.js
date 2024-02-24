import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = ({ title, movies }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Medium and large screens
        setStyle({ top: "600px", position: "relative" });
      } else {
        // Small screens
        setStyle({});
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="py-2 p-4 bg-black" style={style}>
      <h1 className="text-md md:text-2xl font-semibold p-2 md:p-2 text-white">
        {title}
      </h1>
      <div className="flex p-2 flex-row overflow-x-scroll overflow-hidden scrollbar">
        <div className="flex">
          {movies && movies.length > 0 ? (
            movies.map((movie, index) => (
              <MovieCard
                id={movie?.id}
                posterPath={movie?.backdrop_path}
                key={index}
                title={movie?.original_title}
              />
            ))
          ) : (
            <p>No movies to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
