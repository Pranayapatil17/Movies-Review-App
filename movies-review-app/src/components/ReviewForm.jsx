import React, { useState } from "react";
import moviesData from "../data/movies.json";

function ReviewForm({ onAddReview, preselectedMovieId }) {
  const [review, setReview] = useState({
    movieId: preselectedMovieId || moviesData[0].id,
    name: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddReview(review);
    setReview({ movieId: moviesData[0].id, name: "", rating: "", comment: "" });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #c3ecf7, #f5f7fa)",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "450px",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}>
          ✍️ Add Your Review
        </h2>

        {/* Movie Dropdown */}
        <label style={{ fontWeight: "600", color: "#444" }}>🎬 Select Movie</label>
        <select
          name="movieId"
          value={review.movieId}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ddd" }}
        >
          {moviesData.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>

        {/* Name */}
        <label style={{ fontWeight: "600", color: "#444" }}>👤 Your Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={review.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ddd" }}
        />

        {/* Rating */}
        <label style={{ fontWeight: "600", color: "#444" }}>⭐ Rating (1-5)</label>
        <input
          type="number"
          name="rating"
          min="1"
          max="5"
          placeholder="Enter rating"
          value={review.rating}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "15px", borderRadius: "8px", border: "1px solid #ddd" }}
        />

        {/* Comment */}
        <label style={{ fontWeight: "600", color: "#444" }}>💬 Comment</label>
        <textarea
          name="comment"
          placeholder="Write your review..."
          value={review.comment}
          onChange={handleChange}
          required
          rows="4"
          style={{ width: "100%", padding: "12px", marginBottom: "20px", borderRadius: "8px", border: "1px solid #ddd", resize: "none" }}
        />

        <button type="submit" style={{ width: "100%", padding: "14px", background: "#3498db", color: "white", fontWeight: "bold", border: "none", borderRadius: "10px", cursor: "pointer" }}>
          🚀 Submit Review
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
