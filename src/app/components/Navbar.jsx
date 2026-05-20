import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LogoutButton from './Logout';

const NavBar = () => {
    return (
        <nav className="flex justify-between px-10 py-2 shadow-md bg-[#FAFBF6] items-center">
            <div className='flex items-center'>
                <Image
                src="/logo.png"
                alt="Logo"
                width={0}
                height={0}
                sizes="100vw"
                className="w-10 h-auto"
            />
            <h1 className="text-2xl font-bold ml-2 text-[#03497F]">Sport<span className="text-[#E59057]">Nest</span></h1>
            </div>
            <ul className="flex gap-3">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/all-facilities">All Facilities</Link></li>
                <li><Link href="/my-bookings">My Bookings</Link></li>
                <li><Link href="/add-facility">Add Facility</Link></li>
                <li><Link href="/manage-facilities">Manage Facilities</Link></li>
            </ul>

            <ul className="flex gap-3">
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/signup">Signup</Link></li>
                <li><LogoutButton /></li>
            </ul>
        </nav>
    );
};

export default NavBar;