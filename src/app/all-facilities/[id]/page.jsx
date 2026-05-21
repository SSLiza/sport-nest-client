import BookingCard from "@/app/components/BookingCard";
import { DeleteAlert } from "@/app/components/DeleteAlert";
import { EditModal } from "@/app/components/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

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
        `http://localhost:5000/facilities/${id}`
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

    console.log("available_slots:", available_slots);
    console.log("type:", typeof available_slots);
    console.log("isArray:", Array.isArray(available_slots));

    return (
        <div className="flex justify-between px-5 py-10  mx-auto gap-10">
            <section className="max-w-5xl ">

                <div className="flex  items-center gap-3 justify-end mt-5 mb-3">
                    <EditModal facility={facility} />
                    <DeleteAlert facility={facility} />
                </div>
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

                    <div className="absolute top-5 right-5 bg-cyan-500 text-white px-5 py-2 rounded-full font-semibold">
                        ${price_per_hour}/hour
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