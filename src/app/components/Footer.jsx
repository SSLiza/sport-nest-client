import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  MdSportsSoccer,
  MdHome,
  MdInfoOutline,
  MdMail,
  MdLogin,
  MdPersonAdd,
  MdDashboard,
  MdCalendarToday,
  MdHelpOutline,
  MdShield,
  MdDescription,
  MdQuestionAnswer,
} from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#0B1026] text-white pt-16 pb-0 mt-20">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div className="pb-10">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-lg">
                <MdSportsSoccer />
              </div>
              <span className="text-xl font-medium tracking-tight">
                Sport<span className="text-blue-400">Nest</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-[#8993B2] text-sm leading-relaxed max-w-[220px] mb-5">
              Book your favourite sports facilities easily and quickly. Play anytime, anywhere.
            </p>

            {/* Contact */}
            <p className="text-[10px] uppercase tracking-widest text-[#5A6380] mb-1">
              Get in touch
            </p>
            <p className="text-[#C9D0E8] font-medium mb-5">+880 1XXX-XXXXXX</p>

            {/* Socials */}
            <div className="flex gap-2">
              {[
                { icon: <FaFacebook />, label: "Facebook", hover: "hover:border-blue-500" },
                { icon: <FaInstagram />, label: "Instagram", hover: "hover:border-pink-500" },
                { icon: <FaGithub />, label: "GitHub", hover: "hover:border-gray-300" },
                { icon: <FaLinkedin />, label: "LinkedIn", hover: "hover:border-blue-400" },
              ].map(({ icon, label, hover }) => (
                <button
                  key={label}
                  aria-label={label}
                  className={`w-[34px] h-[34px] rounded-lg border border-[#2A3050] bg-[#13193A] flex items-center justify-center text-[#6B758F] text-base transition-all duration-150 hover:bg-[#1E2648] hover:text-white ${hover}`}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Column 2 — Company */}
          <div className="pb-10">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-blue-400 mb-4">
              Company
            </h3>
            <ul className="space-y-[10px]">
              {[
                { href: "/", label: "Home", icon: <MdHome /> },
                { href: "/about", label: "About", icon: <MdInfoOutline /> },
                { href: "/all-facilities", label: "Facilities", icon: <MdSportsSoccer /> },
                { href: "/", label: "Contact", icon: <MdMail /> },
              ].map(({ href, label, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-[#8993B2] text-sm hover:text-[#C9D0E8] transition-colors duration-150"
                  >
                    <span className="text-base opacity-60">{icon}</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Quick Links */}
          <div className="pb-10">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-blue-400 mb-4">
              Quick links
            </h3>
            <ul className="space-y-[10px]">
              {[
                { href: "/my-bookings", label: "My bookings", icon: <MdCalendarToday /> },
                { href: "/", label: "Dashboard", icon: <MdDashboard /> },
                { href: "/login", label: "Login", icon: <MdLogin /> },
                { href: "/signup", label: "Signup", icon: <MdPersonAdd /> },
              ].map(({ href, label, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="flex items-center gap-2 text-[#8993B2] text-sm hover:text-[#C9D0E8] transition-colors duration-150"
                  >
                    <span className="text-base opacity-60">{icon}</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Support */}
          <div className="pb-10">
            <h3 className="text-[11px] font-medium uppercase tracking-widest text-blue-400 mb-4">
              Support
            </h3>
            <ul className="space-y-[10px]">
              {[
                { label: "Help center", icon: <MdHelpOutline /> },
                { label: "Privacy policy", icon: <MdShield /> },
                { label: "Terms & conditions", icon: <MdDescription /> },
                { label: "FAQ", icon: <MdQuestionAnswer /> },
              ].map(({ label, icon }) => (
                <li key={label}>
                  <span className="flex items-center gap-2 text-[#8993B2] text-sm hover:text-[#C9D0E8] transition-colors duration-150 cursor-pointer">
                    <span className="text-base opacity-60">{icon}</span>
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#1E2648] mx-10">
        <div className="max-w-7xl mx-auto px-0 py-[18px] flex items-center justify-between">
          <span className="text-[#4B5470] text-xs">
            © {new Date().getFullYear()} SportNest. All rights reserved.
          </span>
          <div className="flex gap-2">
            {["Secure booking", "24/7 support"].map((badge) => (
              <span
                key={badge}
                className="text-[11px] px-3 py-[3px] rounded-full border border-[#2A3050] text-[#5A6380] bg-[#0F1530]"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;