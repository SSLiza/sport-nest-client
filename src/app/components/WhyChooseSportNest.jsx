// components/WhyChooseSportNest.jsx
import {
  MdCalendarToday,
  MdLock,
  MdDevices,
  MdBolt,
} from "react-icons/md";

const features = [
  {
    icon: <MdCalendarToday />,
    title: "Easy booking",
    description:
      "Reserve your favourite sports venue in just a few clicks — no hassle, no waiting.",
    accent: "from-blue-400/20 to-blue-400/5",
    iconBg: "bg-blue-400/20 text-blue-300",
  },
  {
    icon: <MdLock />,
    title: "Secure login",
    description:
      "Google authentication powered by Better Auth keeps your account safe at all times.",
    accent: "from-emerald-400/20 to-emerald-400/5",
    iconBg: "bg-emerald-400/20 text-emerald-300",
  },
  {
    icon: <MdDevices />,
    title: "Responsive design",
    description:
      "A seamless experience whether you're on desktop, tablet, or mobile.",
    accent: "from-violet-400/20 to-violet-400/5",
    iconBg: "bg-violet-400/20 text-violet-300",
  },
  {
    icon: <MdBolt />,
    title: "Fast experience",
    description:
      "Smooth navigation and instant booking management so you're always in control.",
    accent: "from-amber-400/20 to-amber-400/5",
    iconBg: "bg-amber-400/20 text-amber-300",
  },
];

const WhyChooseSportNest = () => {
  return (
    <section className="py-20 bg-[#03497F] text-white relative overflow-hidden">

      {/* Subtle background glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-blue-300 bg-blue-400/10 border border-blue-400/20 px-4 py-1.5 rounded-full mb-4">
            Why SportNest
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything you need to{" "}
            <span className="text-blue-300">book and play</span>
          </h2>
          <p className="mt-4 text-blue-100/70 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            SportNest makes sports facility booking simple, fast, and reliable
            — from first click to final whistle.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon, title, description, accent, iconBg }) => (
            <div
              key={title}
              className={`group relative bg-gradient-to-b ${accent} border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1`}
            >
              {/* Icon */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl mb-5 ${iconBg}`}
              >
                {icon}
              </div>

              {/* Text */}
              <h3 className="text-base font-semibold mb-2 text-white">
                {title}
              </h3>
              <p className="text-blue-100/60 text-sm leading-relaxed">
                {description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "500+", label: "Facilities listed" },
            { value: "10k+", label: "Bookings made" },
            { value: "98%", label: "Satisfaction rate" },
            { value: "24/7", label: "Support available" },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="text-center bg-white/5 border border-white/10 rounded-2xl py-5 px-4"
            >
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-xs text-blue-200/60 mt-1">{label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSportNest;