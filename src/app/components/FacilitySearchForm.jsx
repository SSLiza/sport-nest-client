"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const FacilitySearchForm = ({
  defaultSearch = "",
  defaultSport = "",
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(defaultSearch);
  const [sport, setSport] = useState(defaultSport);

  // Submit Search
  const handleSubmit = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    // Search
    if (search.trim()) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    // Sport
    if (sport) {
      params.set("sport", sport);
    } else {
      params.delete("sport");
    }

    router.push(`/all-facilities?${params.toString()}`);
  };

  // Clear Filters
  const handleClear = () => {
    setSearch("");
    setSport("");

    router.push("/all-facilities");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-4"
    >
      {/* Search */}
      <input
        type="text"
        placeholder="Search facility..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 px-4 py-3 rounded-xl w-full"
      />

      {/* Filter */}
      <select
  value={sport}
  onChange={(e) => setSport(e.target.value)}
  className="border border-gray-300 px-4 py-3 rounded-xl"
>
  <option value="">All Sports</option>
  <option value="Football">Football</option>
  <option value="Cricket">Cricket</option>
  <option value="Basketball">Basketball</option>
  <option value="Badminton">Badminton</option>
  <option value="Swimming">Swimming</option>
  <option value="Gym">Gym</option>
  <option value="Others">Others</option>
</select>

      {/* Search Button */}
      <button
        type="submit"
        className="bg-[#03497F] hover:bg-cyan-600 text-white px-6 py-3 rounded-xl"
      >
        Search
      </button>

      {/* Clear Button */}
      <button
        type="button"
        onClick={handleClear}
        className="border border-gray-300 hover:bg-gray-100 px-6 py-3 rounded-xl"
      >
        Clear
      </button>
    </form>
  );
};

export default FacilitySearchForm;