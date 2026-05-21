"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LogoutButton from "./Logout";

const ProfileDropdown = ({ session }) => {
    const user = session.user;

    const [open, setOpen] = useState(false);

    return (
        <div className="relative">

            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 border px-3 py-1 rounded-full"
            >

                <div className="w-9 h-9 rounded-full overflow-hidden bg-[#03497F] flex items-center justify-center text-white font-semibold">
                    {
                        session?.user?.image ? (
                            <Image
                                src={session.user.image}
                                alt="profile"
                                width={36}
                                height={36}
                                className="rounded-full"
                            />
                        ) : (
                            <span>
                                {session?.user?.name?.charAt(0).toUpperCase()}
                            </span>
                        )
                    }
                </div>

                <span className="text-sm">
                    {user?.email}
                </span>

            </button>

            {/* Dropdown */}
            {
                open && (

                    <div className="absolute right-0 top-14 bg-white shadow-lg rounded-lg w-60 p-4 z-50">

                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-2 right-3 text-xl"
                        >
                            ✕
                        </button>

                        <div className="flex flex-col gap-3 mt-5">

                            <Link href="/my-bookings">
                                My Bookings
                            </Link>

                            <Link href="/add-facility">
                                Add Facility
                            </Link>

                            <Link href="/manage-facilities">
                                Manage My Facilities
                            </Link>

                            <LogoutButton />

                        </div>

                    </div>

                )
            }

        </div>
    );
};

export default ProfileDropdown;