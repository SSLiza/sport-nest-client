import React from 'react';
import FacilityCard from '../components/FacilityCard';

const AllfacilitiesPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`);
    const facilities = await res.json();

    return (
        <section className="max-w-7xl mx-auto px-5 py-16">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-black text-gray-800">
          All Facilities
        </h1>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Discover premium sports facilities across Bangladesh.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {facilities.map((facility) => (
          <FacilityCard
            key={facility._id}
            facility={facility}
          />
        ))}
      </div>
    </section>
    );
};

export default AllfacilitiesPage;