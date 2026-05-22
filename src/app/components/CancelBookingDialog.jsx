"use client";

import {
  AlertDialog,
  Button,
} from "@heroui/react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CancelBookingDialog = ({ bookingId }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleCancel = async () => {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

      const { data: tokenData } = await authClient.token();

      const res = await fetch(`${baseUrl}/bookings/${bookingId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${tokenData?.token || ""}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.message || "Cancel failed!");
        return;
      }

      toast.success("Booking cancelled!");
      router.refresh();
    } catch (err) {
      console.error(err);
      toast.error("Network error");
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <Button
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl"
        onClick={() => setOpen(true)}
      >
        Cancel Booking
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Cancel this booking?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              This action cannot be undone. Your booking will be permanently cancelled.
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button variant="tertiary" onClick={() => setOpen(false)}>
                No
              </Button>

              <Button
                variant="danger"
                onClick={async () => {
                  await handleCancel();
                  setOpen(false);
                }}
              >
                Yes, Cancel
              </Button>
            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default CancelBookingDialog;