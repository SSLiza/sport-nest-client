"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const MyBookingCard = ({ bookings }) => {
  const router = useRouter();

  const handleCancel = async (id) => {
    const confirmDelete = confirm("Cancel this booking?");
    if (!confirmDelete) return;

    const { data: tokenData } = await authClient.token()

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${id}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`
        }
      }
    );

    const data = await res.json();

   if (!res.ok) {
      toast.error(data?.message || "Action failed!");
      return;
    }

   if (data.deletedCount > 0) {
      toast.success("Booking cancelled!");
      router.refresh();
    } else {
      toast.error("Booking not found or already cancelled.");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-5">
      {bookings.map((booking) => (
        <div
          key={booking._id}
          className="border rounded-2xl p-6 shadow-sm bg-white flex flex-col md:flex-row md:items-center md:justify-between gap-5"
        >
          {/* Left Side */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-cyan-600">
              {booking.facility_name}
            </h2>

            <p className="text-gray-600">
              <span className="font-semibold text-black">
                Booking Date:
              </span>{" "}
              {booking.booking_date}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold text-black">
                Time Slot:
              </span>{" "}
              {booking.time_slot}
            </p>

            <p className="text-gray-600">
              <span className="font-semibold text-black">
                Total Price:
              </span>{" "}
              ${booking.total_price}
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col items-start md:items-end gap-4">
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
              {booking.status}
            </span>

            <button
              onClick={() => handleCancel(booking._id)}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
            >
              Cancel Booking
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyBookingCard;