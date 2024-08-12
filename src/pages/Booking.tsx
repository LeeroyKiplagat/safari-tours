import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { sanityClient } from "../utils/sanityClient";

interface ItineraryItem {
  _key: string;
  _type: string;
  children: Array<{ text: string }>;
}

const Booking: React.FC = () => {
  const location = useLocation();
  const { pkg } = location.state || { pkg: null };

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!pkg) {
    return <p>No package selected.</p>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sanityClient.create({
        _type: "booking",
        clientName,
        email,
        phoneNumber,
        package: {
          _type: "reference",
          _ref: pkg._id,
        },
        startDate,
        endDate,
        specialRequests,
      });

      alert("Booking submitted successfully!");
      // Clear the form
      setClientName("");
      setEmail("");
      setPhoneNumber("");
      setStartDate("");
      setEndDate("");
      setSpecialRequests("");
    } catch (err) {
      console.error("Error submitting booking:", err);
      alert("There was an issue submitting your booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-page px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Booking for {pkg.title}</h1>
      <p>{pkg.description}</p>
      <p className="mt-4 font-bold text-blue-600">
        ${pkg.price} / {pkg.duration} days
      </p>

      {/* Itinerary Section */}
      <div className="itinerary mt-8">
        <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
        {pkg.itinerary && pkg.itinerary.length > 0 ? (
          pkg.itinerary.map((item: ItineraryItem, index: number) => (
            <div key={item._key} className="mb-4">
              <h3 className="font-bold">Day {index + 1}</h3>
              <p>
                {item.children.map((child, idx) => (
                  <span key={idx}>{child.text}</span>
                ))}
              </p>
            </div>
          ))
        ) : (
          <p>No itinerary available for this package.</p>
        )}
      </div>

      {/* Booking Form */}
      <div className="booking-form mt-8">
        <h2 className="text-2xl font-bold mb-4">Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
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
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-2 w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-2 w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-2 w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Special Requests</label>
            <textarea
              value={specialRequests}
              onChange={(e) => setSpecialRequests(e.target.value)}
              className="mt-2 w-full p-2 border rounded-md"
              rows={4}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
