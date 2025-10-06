import React, { useState } from "react";
import { Link } from "react-router-dom";
import movies from "../data/movies.json";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          fontSize: "16px",
        }}
      />

      {/* Movie List */}
      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: "100%", borderRadius: "10px", marginBottom: "10px" }}
              />
              <h3>{movie.title}</h3>
              <p><b>Genre:</b> {movie.genre}</p>
              <p><b>Release:</b> {movie.release_date}</p>
              {movie.director && <p><b>Director:</b> {movie.director}</p>}
              {movie.cast && <p><b>Cast:</b> {movie.cast.join(", ")}</p>}
              <Link
                to={`/movie/${movie.id}`}
                style={{ display: "inline-block", marginTop: "10px", color: "#3498db" }}
              >
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
