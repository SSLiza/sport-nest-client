"use client";

import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <Button
      onClick={handleLogout}
      className="bg-red-500 text-white rounded-none"
    >
      Logout
    </Button>
  );
};

export default LogoutButton;