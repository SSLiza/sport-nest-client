"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MyBookingCard = ({ bookings }) => {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleCancel = async (id) => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

      if (!baseUrl) {
        toast.error("Server URL missing");
        return;
      }

      const tokenData = await authClient.token?.();
      const token = tokenData?.token || tokenData?.data?.token;

      if (!token) {
        toast.error("Login expired. Please login again.");
        return;
      }

      const res = await fetch(`${baseUrl}/bookings/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.message || "Delete failed");
        return;
      }

      toast.success("Booking cancelled!");

      setOpenModal(false);
      setSelectedId(null);

      router.refresh();
    } catch (err) {
      console.error(err);
      toast.error("Network error");
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
              onClick={() => {
                setSelectedId(booking._id);
                setOpenModal(true);
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
            >
              Cancel Booking
            </button>
          </div>
        </div>
      ))}

      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg">

            <h2 className="text-xl font-bold mb-3">
              Cancel Booking?
            </h2>

            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel this booking? This action cannot be undone.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setOpenModal(false);
                  setSelectedId(null);
                }}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
              >
                No
              </button>

              <button
                onClick={() => handleCancel(selectedId)}
                className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookingCard;