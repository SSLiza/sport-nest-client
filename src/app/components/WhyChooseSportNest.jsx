// components/WhyChooseSportNest.jsx

const WhyChooseSportNest = () => {
  return (
    <section className="py-12 md:py-16 bg-[#03497F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Why Choose SportNest
          </h2>

          <p className="mt-4 text-gray-200 max-w-2xl mx-auto text-sm sm:text-base">
            SportNest makes sports facility booking simple, fast, and reliable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Easy Booking
            </h3>

            <p className="text-gray-200 text-sm sm:text-base">
              Reserve your favorite sports venue in just a few clicks.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Secure Login
            </h3>

            <p className="text-gray-200 text-sm sm:text-base">
              Google authentication powered by Better Auth for safe access.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Responsive Design
            </h3>

            <p className="text-gray-200 text-sm sm:text-base">
              Optimized experience for desktop, tablet, and mobile users.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Fast Experience
            </h3>

            <p className="text-gray-200 text-sm sm:text-base">
              Smooth navigation and instant booking management system.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSportNest;