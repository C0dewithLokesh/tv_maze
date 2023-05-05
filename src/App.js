import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MovieCard from "./components/MovieCard";
import "./App.css";
import MovieDetails from "./components/MovieDetails";


const API_URL = "https://api.tvmaze.com/search/shows?q=all";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async (title) => {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();

      console.log(data);
      setMovies(data);
    };

    getMovies();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="app">
            <h1>Tv Maze</h1>

            {movies?.length > 0 ? (
              <div className="container">
                {movies.map((movie, idx) => (
                  <MovieCard movie={movie} key={idx} />
                ))}
              </div>
            ) : (
              <div className="empty">
                <h2>No movies found</h2>
              </div>
            )}
          </div>
        } />

        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
