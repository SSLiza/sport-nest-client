import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import MyBookingCard from "../components/MyBookingCard";

const MyBookingsPage = async () => {

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // PRIVATE ROUTE
  if (!session) {
    return <h1>Please Login</h1>;
  }

const res = await fetch(
  `http://localhost:5000/bookings/${session.user.email}`,
  {
    cache: "no-store",
  }
);

if (!res.ok) {
  throw new Error("Failed to fetch bookings");
}

const bookings = await res.json();

  return (
    <div className="max-w-6xl mx-auto py-10 px-5">

      <h1 className="text-4xl font-black mb-8">
        My Bookings
      </h1>

      <MyBookingCard bookings={bookings} />
    </div>
  );
};

export default MyBookingsPage;