import Link from "next/link";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1026] text-white pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-12 md:6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">SportNest</h2>
          <p className="text-gray-400">
            Book your favorite sports facilities easily and quickly.
            Play anytime, anywhere with SportNest.
          </p>

          <div className="mt-5 text-gray-300">
            <p className="text-sm">Get in touch</p>
            <p className="text-lg font-semibold">+880 1XXX-XXXXXX</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/facilities">Facilities</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/my-bookings">My Bookings</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Help Center</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
          </ul>

          {/* Social */}
          <div className="flex gap-4 mt-6 text-xl">
            <FaFacebook className="cursor-pointer hover:text-blue-500" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaGithub className="cursor-pointer hover:text-gray-300" />
            <FaLinkedin className="cursor-pointer hover:text-blue-400" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SportNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;