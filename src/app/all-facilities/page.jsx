export const dynamic = "force-dynamic";

import FacilityCard from "../components/FacilityCard";

const AllfacilitiesPage = async ({ searchParams }) => {
  let facilities = [];

  // FIX FOR NEXT 15/16
  const params = await searchParams;

  // Query values
  const search = params?.search || "";
  const sport = params?.sport || "";

  // Build URL params
  const query = new URLSearchParams();

  if (search) {
    query.append("search", search);
  }

  if (sport) {
    query.append("sport", sport);
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities?${query.toString()}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Failed: ${res.status}`);
    }

    facilities = await res.json();
  } catch (err) {
    console.log(err);
  }

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-black text-gray-800">
          All Facilities
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover premium sports facilities across Bangladesh.
        </p>
      </div>

      {/* Search + Filter */}
      <form className="flex flex-col md:flex-row gap-4 mb-12">
        
        {/* Search */}
        <input
          type="text"
          name="search"
          placeholder="Search facility name..."
          defaultValue={search}
          className="border border-gray-300 px-4 py-3 rounded-xl w-full"
        />

        {/* Filter */}
        <select
          name="sport"
          defaultValue={sport}
          className="border border-gray-300 px-4 py-3 rounded-xl"
        >
          <option value="">All Sports</option>
          <option value="Football">Football</option>
          <option value="Cricket">Cricket</option>
          <option value="Badminton">Badminton</option>
          <option value="Tennis">Tennis</option>
        </select>

        {/* Button */}
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl"
        >
          Search
        </button>
      </form>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {facilities.map((facility) => (
          <FacilityCard
            key={facility._id}
            facility={facility}
          />
        ))}
      </div>

      {/* Empty State */}
      {facilities.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold text-gray-700">
            No Facilities Found
          </h2>

          <p className="text-gray-500 mt-3">
            Try different search keywords.
          </p>
        </div>
      )}
    </section>
  );
};

export default AllfacilitiesPage;