export default function About() {
  return (
    <div>
      <div className="about-page max-w-7xl mx-auto px-4 py-16">
        {/* Introduction Section */}
        <section className="introduction mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <p className="text-xl text-gray-700 md:text-center md:mx-36">
            Welcome to Cruise Nation Safaris! We are a leading provider of
            unique and unforgettable safari experiences in Africa. Our mission
            is to connect our clients with the beauty and adventure of the wild,
            ensuring every journey is filled with awe and excitement.
          </p>
        </section>

        {/* Mission and Values Section */}
        <section className="mission-values mb-16 mt-32">
          <h2 className="text-3xl font-bold md:text-center mb-8">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  md:mx-36">
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                At Cruise Nation Safaris, our mission is to provide our clients
                with the most authentic and thrilling safari experiences while
                promoting sustainable tourism and conservation efforts. We aim
                to create life-changing memories through close encounters with
                nature and wildlife.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Commitment to excellence in service and experience</li>
                <li>Respect for nature and wildlife conservation</li>
                <li>Integrity in all our interactions</li>
                <li>Innovation in creating unique safari experiences</li>
                <li>Sustainability and community support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="our-story mb-16 mt-32">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <p className="text-xl text-gray-700 md:text-center md:mx-36">
            Cruise Nation Safaris began as a small, passionate team of wildlife
            enthusiasts with a deep love for Africa’s rich biodiversity. Over
            the years, we have grown into one of the most trusted names in the
            safari industry, known for our personalized service and commitment
            to conservation. From humble beginnings, we have expanded our
            operations across multiple countries, offering a diverse range of
            safari options that cater to all types of travelers.
          </p>
        </section>

        {/* Meet the Team Section */}
        <section className="meet-the-team mb-16 md:mt-48">
          <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="team-member text-center">
              <img
                src="/path/to/team-member1.jpg"
                alt="Team Member 1"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-700">Founder & CEO</p>
            </div>
            <div className="team-member text-center">
              <img
                src="/path/to/team-member2.jpg"
                alt="Team Member 2"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-700">Operations Manager</p>
            </div>
            <div className="team-member text-center">
              <img
                src="/path/to/team-member3.jpg"
                alt="Team Member 3"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Robert Brown</h3>
              <p className="text-gray-700">Head of Safaris</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="call-to-action text-center mb-16 md:mt-48">
          <h2 className="text-3xl font-bold text-center mb-8">
            Ready to Explore?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join us on an unforgettable journey through the wilds of Africa.
            Contact us today to start planning your adventure!
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
}
