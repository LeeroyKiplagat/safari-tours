import React, { useEffect, useState } from "react";
import { sanityClient } from "../utils/sanityClient";

interface Safari {
  _id: string;
  title: string;
}

const PlannerForm: React.FC = () => {
  const [safaris, setSafaris] = useState<Safari[]>([]);
  const [selectedSafari, setSelectedSafari] = useState<string>("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch available safaris from Sanity
  useEffect(() => {
    sanityClient
      .fetch('*[_type == "safari"]{_id, title}')
      .then((data) => setSafaris(data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load safaris.");
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await sanityClient.create({
        _type: "planner",
        safari: {
          _type: "reference",
          _ref: selectedSafari,
        },
        startDate,
        endDate,
        adults,
        children,
        contactDetails: {
          name,
          email,
          phone,
          specialRequests,
        },
      });

      alert("Form submitted successfully!");
      // Clear the form
      setSelectedSafari("");
      setStartDate("");
      setEndDate("");
      setAdults(1);
      setChildren(0);
      setName("");
      setEmail("");
      setPhone("");
      setSpecialRequests("");
    } catch (err) {
      console.error(err);
      setError("There was an issue submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="planner-form py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Book a Safari with Us
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700">Select Safari</label>
              <select
                value={selectedSafari}
                onChange={(e) => setSelectedSafari(e.target.value)}
                className="mt-2 w-full p-2 border rounded-md"
                required
              >
                <option value="">Select a safari</option>
                {safaris.map((safari) => (
                  <option key={safari._id} value={safari._id}>
                    {safari.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-2 w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-2 w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Number of Adults</label>
              <input
                type="number"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="mt-2 w-full p-2 border rounded-md"
                min="1"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Number of Children</label>
              <input
                type="number"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="mt-2 w-full p-2 border rounded-md"
                min="0"
              />
            </div>
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full p-2 border rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full p-2 border rounded-md"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700">Special Requests</label>
              <textarea
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                className="mt-2 w-full p-2 border rounded-md"
                rows={4}
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Booking..." : "Book"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PlannerForm;
