// components/CommunityHighlights.jsx

const CommunityHighlights = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#03497F]">
            Community Highlights
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Discover exciting sports activities, featured matches,
            and inspiring stories from the SportNest community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-[#F5F9FC] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#03497F] mb-3">
              Featured Matches
            </h3>

            <p className="text-gray-600 text-sm sm:text-base">
              Explore the most exciting games and tournaments happening this week.
            </p>
          </div>

          <div className="bg-[#F5F9FC] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#03497F] mb-3">
              Success Stories
            </h3>

            <p className="text-gray-600 text-sm sm:text-base">
              Read inspiring stories from players and teams who use SportNest.
            </p>
          </div>

          <div className="bg-[#F5F9FC] p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-[#03497F] mb-3">
              Sports Community
            </h3>

            <p className="text-gray-600 text-sm sm:text-base">
              Connect with sports enthusiasts and stay updated with upcoming events.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CommunityHighlights;