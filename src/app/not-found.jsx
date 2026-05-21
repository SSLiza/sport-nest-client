import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-700 text-white px-4">
      <h1 className="text-8xl font-extrabold">404</h1>

      <h2 className="mt-4 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-2 text-center text-lg max-w-md text-gray-100">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg"
      >
        Go Back Home
      </Link>
    </div>
  );
}