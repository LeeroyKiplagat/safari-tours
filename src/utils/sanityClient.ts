import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImage } from "../components/PackageList";

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: true,
  apiVersion: "2024-08-12", // Use the current date as the API version
  token: import.meta.env.VITE_SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(sanityClient);

// Function to generate image URLs
export function urlFor(source: SanityImage) {
  return builder.image(source);
}
