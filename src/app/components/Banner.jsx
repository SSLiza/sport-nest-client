'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
  className="relative min-h-[90vh] flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/hero.png')",
  }}
>
      {/* Dark Overlay */}
      <div className="absolute inset-0  z-0" />

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-brand-900/20 rounded-full blur-3xl" />

        <div className="absolute bottom-20 right-0 w-80 h-80 bg-brand-800/10 rounded-full blur-3xl" />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(34,197,94,0.06) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-3xl">
          <span className=" flex items-center badge bg-transparent text-white border border-base-800 pt-1 inline-block">
            🏆 Bangladesh&apos;s Premier Booking Platform
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-[#03497F] leading-tight mb-6">
            Book Your{' '}
            <span className="text-brand-400 relative inline-block">
              Perfect Court

              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M0 10 C75 2, 225 2, 300 10"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </span>{' '}
            in Seconds
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            From football turfs to badminton courts — find, book,
            and play at world-class sports facilities near you.
            No calls, no hassle.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/all-facilities"
              className="btn-primary text-white flex items-center gap-2"
            >
              Explore Facilities

              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="/add-facility"
              className="btn-secondary text-white"
            >
              List Your Facility
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-8 mt-14">
            {[
              { num: '200+', label: 'Facilities' },
              { num: '5,000+', label: 'Bookings' },
              { num: '12+', label: 'Sports Types' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold text-white">
                  {s.num}
                </p>

                <p className="text-sm text-gray-400">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Sports Icons */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 opacity-20 z-10">
        {['⚽', '🏸', '🎾', '🏊', '🏏', '🏀'].map((e, i) => (
          <div
            key={i}
            className="text-4xl"
            style={{
              animation: `fadeUp 0.6s ease ${i * 0.1}s both`,
            }}
          >
            {e}
          </div>
        ))}
      </div>
    </section>
  );
}