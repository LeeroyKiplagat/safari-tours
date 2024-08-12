import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sanityClient, urlFor } from "../utils/sanityClient";

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}
interface ItineraryItem {
  _key: string;
  _type: string;
  children: Array<{ text: string }>;
}

interface Package {
  _id: string;
  title: string;
  description: string;
  price: number;
  duration: number;
  image: SanityImage; // Make sure this matches the Sanity image type
  itinerary: ItineraryItem[];
}

const PackageList: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    sanityClient
      .fetch(
        '*[_type == "package"]{_id, title, description, price, duration, image, itinerary}'
      )
      .then((data) => setPackages(data))
      .catch((err) => {
        console.error(err);
        setError("Failed to load packages.");
      });
  }, []);

  const handleBookPackage = (pkg: Package) => {
    // Logic to handle booking
    // Navigate to the booking page with the selected package data
    navigate("/booking", { state: { pkg } });
  };

  return (
    <section className="package-list py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Available Packages
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {pkg.image && (
                <img
                  src={urlFor(pkg.image).url()} // Correct usage of urlFor
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold">{pkg.title}</h3>
                <p className="mt-2 text-gray-700">{pkg.description}</p>
                <p className="mt-4 font-bold text-blue-600">
                  ${pkg.price} / {pkg.duration} days
                </p>
                <button
                  onClick={() => handleBookPackage(pkg)}
                  className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageList;
