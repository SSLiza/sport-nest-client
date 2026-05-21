import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import ProfileDropdown from "./ProfileDropdown";

const NavBar = async () => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-3 bg-[#FAFBF6] shadow-md">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">

                <Image
                    src="/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                />

                <h1 className="text-2xl font-bold text-[#03497F]">
                    Sport<span className="text-[#E59057]">Nest</span>
                </h1>

            </Link>

            {/* Main Links */}
            {/* Main Links */}
            <ul className="flex items-center gap-6 font-medium">

                <li>
                    <Link href="/">Home</Link>
                </li>

                <li>
                    <Link href="/all-facilities">
                        All Facilities
                    </Link>
                </li>

                {
                    session && (
                        <>
                            <li>
                                <Link href="/my-bookings">
                                    My Bookings
                                </Link>
                            </li>

                            <li>
                                <Link href="/add-facility">
                                    Add Facility
                                </Link>
                            </li>

                            <li>
                                <Link href="/manage-facilities">
                                    Manage Facilities
                                </Link>
                            </li>
                        </>
                    )
                }

            </ul>

            {/* Right Side */}
            <div>

                {
                    session ? (

                        <ProfileDropdown session={session} />

                    ) : (

                        <Link
                            href="/login"
                            className="bg-[#03497F] text-white px-5 py-2 rounded-lg"
                        >
                            Login
                        </Link>

                    )
                }

            </div>

        </nav>
    );
};

export default NavBar;