import React, { useState } from "react";
import { sanityClient } from "../utils/sanityClient";

const ReviewPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sanityClient.create({
        _type: "review",
        name,
        email,
        review: reviewText,
        rating,
        createdAt: new Date().toISOString(),
      });

      alert("Review submitted successfully!");
      // Clear the form
      setName("");
      setEmail("");
      setReviewText("");
      setRating(5);
    } catch (err) {
      console.error("Error submitting review:", err);
      alert("There was an issue submitting your review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Submit Your Review</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-2 w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="mt-2 w-full p-2 border rounded-md"
            rows={4}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min={1}
            max={5}
            className="mt-2 w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewPage;
