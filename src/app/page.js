import Image from "next/image";
import HeroSection from "./components/Banner";
import Link from "next/link";
import FacilityCard from "./components/FacilityCard";
import CommunityHighlights from "./components/CommunityHighlights";
import WhyChooseSportNest from "./components/WhyChooseSportNest";

  let facilities = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch facilities");
    }

    facilities = await res.json();
  } catch (error) {
    console.error(error);
  }

  // Show only 4 cards
  const featuredFacilities = facilities.slice(0, 6);

export default function Home() {
  
  return (
    <div>
        <HeroSection />
        <section className="max-w-7xl mx-auto px-5 py-20">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-black text-gray-800">
            Featured Facilities
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore our most popular sports facilities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredFacilities.map((facility) => (
            <FacilityCard
              key={facility._id}
              facility={facility}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-14">
          <Link
            href="/all-facilities"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-2xl font-semibold transition duration-300 shadow-lg hover:scale-105"
          >
            View All Facilities
          </Link>
        </div>
      </section>
      <WhyChooseSportNest/>
      <CommunityHighlights/>
    </div>
  );
}
