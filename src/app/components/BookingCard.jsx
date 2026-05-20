"use client";

import { useState } from "react";

const BookingCard = ({ facility, session }) => {
  const {
    _id,
    name,
    available_slots,
    price_per_hour,
  } = facility;

  // Convert slots safely
  const slots = Array.isArray(available_slots)
    ? available_slots
    : typeof available_slots === "string"
    ? available_slots.split(",")
    : [];

  // State
  const [hours, setHours] = useState(1);

  // Total Price
  const totalPrice = hours * price_per_hour;

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const booking = {
      facility_id: _id,
      facility_name: name,
      user_email: session?.user?.email,
      booking_date: formData.get("booking_date"),
      time_slot: formData.get("time_slot"),
      hours: Number(formData.get("hours")),
      total_price: totalPrice,
      status: "pending",
    };

    console.log("Form Data:", booking);

    const res = await fetch(
      "http://localhost:5000/bookings",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(booking),
      }
    );

    const data = await res.json();

    console.log("Response from server:", data);
  };

  return (
    <div className="border border-gray-200 rounded-3xl p-6 shadow-lg h-fit">

      <h2 className="text-2xl font-bold mb-6">
        Book Facility
      </h2>

      <form
        onSubmit={onSubmit}
        className="space-y-5"
      >

        {/* Facility Name */}
        <div>
          <label className="font-medium block mb-2">
            Facility Name
          </label>

          <input
            type="text"
            value={name}
            readOnly
            className="w-full border p-3 rounded-xl"
          />
        </div>

        {/* Booking Date */}
        <div>
          <label className="font-medium block mb-2">
            Booking Date
          </label>

          <input
            type="date"
            name="booking_date"
            required
            className="w-full border p-3 rounded-xl"
          />
        </div>

        {/* Time Slot */}
        <div>
          <label className="font-medium block mb-2">
            Time Slot
          </label>

          <select
            name="time_slot"
            required
            className="w-full border p-3 rounded-xl"
          >
            {slots.map((slot, index) => (
              <option
                key={index}
                value={slot}
              >
                {slot}
              </option>
            ))}
          </select>
        </div>

        {/* Hours */}
        <div>
          <label className="font-medium block mb-2">
            Hours
          </label>

          <input
            type="number"
            name="hours"
            min="1"
            defaultValue={1}
            onChange={(e) =>
              setHours(Number(e.target.value))
            }
            className="w-full border p-3 rounded-xl"
          />
        </div>

        {/* Total Price */}
        <div className="bg-cyan-50 p-4 rounded-2xl">
          <h3 className="text-lg font-bold">
            Total Price: ${totalPrice}
          </h3>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-xl font-semibold transition"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingCard;