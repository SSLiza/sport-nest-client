import Image from "next/image";
import Link from "next/link";

const FacilityCard = ({ facility }) => {
  const {
    name,
    facility_type,
    imageUrl,
    location,
    price_per_hour,
    capacity,
    available_slots,
    booking_count,
    description,
  } = facility;

  // FIX HERE
  const slots = Array.isArray(available_slots)
    ? available_slots
    : typeof available_slots === "string"
    ? available_slots.split(",")
    : [];

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition duration-300">

      {/* Image */}
      <div className="relative h-60 w-full">

        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
        />

        <div className="absolute top-4 right-4 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          ${price_per_hour}/hr
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">

        {/* Title */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {name}
          </h2>

          <p className="text-sm text-cyan-600 font-medium">
            {facility_type}
          </p>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <p>📍 {location}</p>
          <p>👥 {capacity} People</p>
        </div>

        {/* Available Slots */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2">
            Available Slots
          </h3>

          <div className="flex flex-wrap gap-2">
            {slots.map((slot, index) => (
              <span
                key={index}
                className="bg-cyan-100 text-cyan-700 text-xs px-3 py-1 rounded-full"
              >
                {slot}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm line-clamp-3">
          {description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            🔥 {booking_count} bookings
          </p>

          <Link
            href={`/all-facilities/${facility._id}`}
            className="bg-[#03497F] hover:bg-cyan-600 text-white px-5 py-2 rounded-xl transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;