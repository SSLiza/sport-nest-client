import BookingCard from "@/app/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

export const metadata = {
  title: "Facility Details | SportNest",
  
  description:
    "View premium sports facility details, available slots, pricing, and booking information on SportNest.",

  keywords: [
    "sports facility",
    "football turf",
    "cricket ground",
    "badminton court",
    "SportNest",
  ],

  openGraph: {
    title: "Facility Details | SportNest",

    description:
      "Explore sports facilities across Bangladesh with SportNest.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SportNest",
      },
    ],

    type: "website",
  },
};

const FacilityDetailsPage = async ({ params }) => {
    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    console.log(token)

    // GET SESSION
    const session = await auth.api.getSession({
        headers: await headers(),
    });


    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`
        , {
            headers: {
                authorization:  `Bearer ${token}`
            }
        }
    );

    const facility = await res.json();

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

    // FIX AVAILABLE SLOTS
    const slots = Array.isArray(available_slots)
        ? available_slots
        : typeof available_slots === "string"
            ? [available_slots]
            : [];

    return (
        <div className="flex flex-col md:flex-row justify-between px-5 py-10 mx-auto gap-10">
            <section className="max-w-7xl mx-auto">
                {/* Image */}
                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={name || "facility"}
                            fill
                            sizes="100vw"
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            No Image Available
                        </div>
                    )}

                    <div className="absolute top-5 right-5 bg-[#03497F] text-white px-5 py-2 rounded-full font-semibold">
                        ৳{price_per_hour.toLocaleString()}/hour
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">

                    {/* Left Side */}
                    <div className="lg:col-span-2 space-y-6">

                        <h1 className="text-4xl font-black text-gray-800">
                            {name}
                        </h1>

                        <p className="text-gray-600">
                            {description}
                        </p>

                        <div className="flex gap-6 text-gray-600">
                            <span>{location}</span>
                            <span>{capacity} People Capacity</span>
                            <span>🔥 {booking_count} Bookings</span>
                        </div>

                        {/* Available Slots */}
                        <div>
                            <h2 className="text-2xl font-bold mb-4">
                                Available Slots
                            </h2>

                            <div className="flex flex-wrap gap-3">
                                {slots.map((slot, index) => (
                                    <span
                                        key={index}
                                        className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium"
                                    >
                                        {slot}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Booking Card */}
                </div>
            </section>
            <BookingCard
                facility={facility}
                session={session}
            />
        </div>
    );
};

export default FacilityDetailsPage;