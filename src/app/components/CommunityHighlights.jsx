// components/CommunityHighlights.jsx
"use client";

import { useState } from "react";
import { MdStar, MdFormatQuote } from "react-icons/md";

const highlights = [
  {
    category: "Featured match",
    tag: "⚽ Football",
    title: "Dhaka Premier League — Semifinals",
    description:
      "An electrifying showdown at Green Valley Arena. Two top-ranked teams battle for a spot in the finals.",
    meta: "This Saturday · 4:00 PM",
    accent: "bg-blue-50 border-blue-100",
    badge: "bg-blue-100 text-blue-700",
    titleColor: "text-[#03497F]",
  },
  {
    category: "Upcoming event",
    tag: "🏸 Badminton",
    title: "City Badminton Open 2025",
    description:
      "Register now for the biggest badminton tournament of the year. Open to all skill levels.",
    meta: "June 14 · SportNest Arena",
    accent: "bg-emerald-50 border-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
    titleColor: "text-emerald-800",
  },
  {
    category: "Community news",
    tag: "🏊 Swimming",
    title: "New Olympic Pool Now Open",
    description:
      "SportNest's newest 50m Olympic pool is now available for lane bookings and coaching sessions.",
    meta: "Open daily · 6:00 AM – 10:00 PM",
    accent: "bg-violet-50 border-violet-100",
    badge: "bg-violet-100 text-violet-700",
    titleColor: "text-violet-800",
  },
];

const reviews = [
  {
    name: "Rafiul Islam",
    role: "Football player",
    initials: "RI",
    rating: 5,
    review:
      "SportNest made booking a football field incredibly easy. I booked in under 2 minutes from my phone. Absolutely love it!",
    avatarBg: "bg-blue-100 text-blue-700",
  },
  {
    name: "Nadia Chowdhury",
    role: "Badminton enthusiast",
    initials: "NC",
    rating: 5,
    review:
      "The interface is so clean and smooth. I found a badminton court near me instantly. Will keep using SportNest!",
    avatarBg: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Tanvir Ahmed",
    role: "Cricket coach",
    initials: "TA",
    rating: 4,
    review:
      "Great platform for managing team bookings. The dashboard is super helpful. Would love a team calendar feature next.",
    avatarBg: "bg-violet-100 text-violet-700",
  },
  {
    name: "Sadia Rahman",
    role: "Swimming instructor",
    initials: "SR",
    rating: 5,
    review:
      "Booking lanes for my students is now effortless. The new pool listing on SportNest is a game changer for us.",
    avatarBg: "bg-amber-100 text-amber-700",
  },
  {
    name: "Imran Hossain",
    role: "Basketball player",
    initials: "IH",
    rating: 5,
    review:
      "Finally a platform that actually works in Bangladesh. Fast, reliable, and no unnecessary steps. Highly recommended.",
    avatarBg: "bg-rose-100 text-rose-700",
  },
  {
    name: "Mitu Akter",
    role: "Yoga & fitness",
    initials: "MA",
    rating: 4,
    review:
      "I use SportNest to book studio spaces every week. Responsive on mobile and the booking confirmation is instant.",
    avatarBg: "bg-teal-100 text-teal-700",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <MdStar
        key={s}
        className={s <= rating ? "text-amber-400" : "text-gray-200"}
        size={15}
      />
    ))}
  </div>
);

const CommunityHighlights = () => {
  const [activeTab, setActiveTab] = useState("highlights");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-[#03497F] bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full mb-4">
            Community
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#03497F] tracking-tight">
            Community Highlights
          </h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Discover exciting matches, events, and hear what the SportNest
            community is saying.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
            {[
              { key: "highlights", label: "Highlights" },
              { key: "reviews", label: "Reviews" },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeTab === key
                    ? "bg-white text-[#03497F] shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Highlights Tab */}
        {activeTab === "highlights" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map(
              ({ category, tag, title, description, meta, accent, badge, titleColor }) => (
                <div
                  key={title}
                  className={`border ${accent} rounded-2xl p-6 hover:-translate-y-1 transition-all duration-200 group`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${badge}`}>
                      {tag}
                    </span>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      {category}
                    </span>
                  </div>
                  <h3 className={`text-lg font-semibold mb-2 ${titleColor}`}>
                    {title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span>🕐</span>
                    <span>{meta}</span>
                  </div>
                </div>
              )
            )}
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <>
            {/* Summary bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-[#03497F]">4.9</span>
                <div>
                  <StarRating rating={5} />
                  <p className="text-xs text-gray-400 mt-0.5">Based on 1,200+ reviews</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-gray-200" />
              <p className="text-sm text-gray-500 max-w-xs text-center sm:text-left">
                Real feedback from athletes and coaches across Bangladesh.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map(({ name, role, initials, rating, review, avatarBg }) => (
                <div
                  key={name}
                  className="border border-gray-100 bg-[#F9FBFD] rounded-2xl p-5 hover:-translate-y-1 transition-all duration-200 relative"
                >
                  {/* Quote icon */}
                  <MdFormatQuote
                    className="absolute top-4 right-4 text-gray-200"
                    size={32}
                  />

                  {/* Stars */}
                  <StarRating rating={rating} />

                  {/* Review text */}
                  <p className="text-gray-600 text-sm leading-relaxed mt-3 mb-5">
                    review
                  </p>

                  {/* Reviewer */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold ${avatarBg}`}
                    >
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">{name}</p>
                      <p className="text-xs text-gray-400">{role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default CommunityHighlights;