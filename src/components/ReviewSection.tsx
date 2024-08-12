import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sanityClient } from "../utils/sanityClient";

interface Review {
  _id: string;
  name: string;
  review: string;
  rating: number;
  createdAt: string;
}

const ReviewSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const navigate = useNavigate(); // Hook for navigation

  // Fetch existing reviews
  useEffect(() => {
    sanityClient
      .fetch('*[_type == "review"] | order(createdAt desc)')
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  const handleReviewButtonClick = () => {
    navigate("/submit-review");
  };

  return (
    <section className="review-section py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>

        {/* Review Slideshow */}
        <div className="review-slideshow md:grid grid-cols-2 gap-4 mb-8">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review._id}
                className="mb-4 bg-white p-4 rounded-md shadow-md"
              >
                <p className="text-lg font-bold">{review.name}</p>
                <p className="text-gray-700 mt-2">{review.review}</p>
                <p className="text-yellow-500 mt-2 font-semibold">
                  Rating: {review.rating}/5
                </p>
              </div>
            ))
          ) : (
            <p>No reviews yet.</p>
          )}
        </div>

        {/* Button to Submit Review */}
        <div className="text-center">
          <button
            onClick={handleReviewButtonClick}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
