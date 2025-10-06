import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ReviewForm from "../components/ReviewForm";

function AddReview() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedMovieId = searchParams.get("movieId");

  const handleAddReview = (review) => {
    console.log("New Review Added:", review);
    alert("✅ Review Added!");
    navigate(`/movie/${review.movieId}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Review</h2>
      <ReviewForm onAddReview={handleAddReview} preselectedMovieId={preselectedMovieId} />
    </div>
  );
}

export default AddReview;
