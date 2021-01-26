import axios from "axios";
import { useEffect, useState } from "react";
import "./Movie.css";

const Movie = (props) => {
  const [movies, setMovies] = useState([]);
  const image_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const baseUrl = "https://api.themoviedb.org/3";
      const request = await axios.get(`${baseUrl}${props.url}`);
      setMovies(request.data.results);
    }
    fetchData();
  }, [props.url]);

  console.log(movies);

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row-poster">
        {movies.map((movie) => {
          return (
            <img
              src={`${image_url}${movie.poster_path}`}
              alt={movie.name}
              className="img-poster"
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
