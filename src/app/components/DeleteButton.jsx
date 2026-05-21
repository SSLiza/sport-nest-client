"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteButton = ({ id, email }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm("Delete this facility?");
    if (!confirmDelete) return;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
      toast.success("Deleted successfully");
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-3 py-1 rounded"
    >
      Delete
    </button>
  );
};

export default DeleteButton;