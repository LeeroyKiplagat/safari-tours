import leopardImage from "../assets/images/leopard.jpg";
export default function Hero() {
  return (
    <div
      className="hero bg-cover bg-center h-96 md:h-[500px] lg:h-[600px] text-white flex items-center justify-center rounded-md"
      style={{ backgroundImage: `url(${leopardImage})` }}
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold">Discover the Wilderness</h1>
        <p className="mt-4 text-xl">
          Experience unforgettable safaris with Cruise Nation Safaris.
        </p>
        <a
          href="#packages"
          className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Explore Packages
        </a>
      </div>
    </div>
  );
}
