import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data/movies.json";

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img
        src={movie.poster}
        alt={movie.title}
        style={{ width: "250px", borderRadius: "10px", margin: "10px 0" }}
      />
      <p><b>Genre:</b> {movie.genre}</p>
      <p><b>Release:</b> {movie.release_date}</p>
      <p><b>Director:</b> {movie.director}</p>
      <p><b>Cast:</b> {movie.cast.join(", ")}</p>

      <h3>Reviews:</h3>
      {movie.reviews && movie.reviews.length > 0 ? (
        movie.reviews.map((r, i) => (
          <div key={i} className="review">
            <p><b>{r.name}</b>: {r.comment} ⭐{r.rating}/5</p>
          </div>
        ))
      ) : (
        <p>No reviews yet</p>
      )}

      <Link
        to={`/add-review?movieId=${movie.id}`}
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "8px 12px",
          background: "#222",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none"
        }}
      >
        Add Review
      </Link>
    </div>
  );
}

export default MovieDetails;
