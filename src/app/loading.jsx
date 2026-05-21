export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>

        <p className="text-lg font-semibold text-cyan-600">
          Loading...
        </p>
      </div>
    </div>
  );
}