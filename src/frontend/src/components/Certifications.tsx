import {
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  ExternalLink,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

const certifications = [
  {
    image: "/assets/uploads/WhatsApp-Image-2026-03-21-at-12.04.25-AM-1.jpeg",
    title: "Introduction to Generative AI",
    issuer: "Simplilearn / Google Cloud",
    instructor: "Simplilearn SkillUp",
    date: "2nd October 2025",
    duration: "",
    gradient: "from-blue-400/10 to-cyan-400/10",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    image: "/assets/uploads/eCertificate_page-0001-1-2.jpg",
    title:
      "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    instructor: "Oracle University",
    date: "1 Sep 2025",
    duration: "",
    gradient: "from-red-400/10 to-pink-400/10",
    badgeColor: "bg-red-100 text-red-700",
  },
  {
    image: "/assets/uploads/power-bi-certificate_page-0001-1-3.jpg",
    title: "30-Days Power BI Micro Course",
    issuer: "CoursePe",
    instructor: "Satish Dhawale",
    date: "5 Sep 2025",
    duration: "30 days",
    gradient: "from-yellow-400/10 to-orange-400/10",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  };

  const prev = () => {
    const index = (current - 1 + certifications.length) % certifications.length;
    goTo(index, -1);
  };

  const next = () => {
    const index = (current + 1) % certifications.length;
    goTo(index, 1);
  };

  const cert = certifications[current];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -80 }),
  };

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-2">
            My Credentials
          </p>
          <h2 className="text-4xl font-bold text-gray-800">Certifications</h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #2F74D0, #A78BFA)" }}
          />
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto px-14 md:px-16">
          {/* Left Arrow */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Card */}
          <div className="w-full overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={cert.title}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`glass-card rounded-2xl overflow-hidden bg-gradient-to-br ${cert.gradient} w-full`}
              >
                {/* Certificate image */}
                <div
                  className="relative w-full overflow-hidden"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${cert.badgeColor} backdrop-blur-sm`}
                    >
                      {cert.issuer}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs text-white/80 font-medium bg-black/30 px-2 py-1 rounded-full backdrop-blur-sm">
                      {current + 1} / {certifications.length}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <Award
                      className="text-blue-500 mt-0.5 flex-shrink-0"
                      size={20}
                    />
                    <h3 className="font-bold text-gray-800 text-lg leading-snug">
                      {cert.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-purple-400" />
                      <span>
                        Issuer:{" "}
                        <span className="font-semibold text-purple-600">
                          {cert.instructor}
                        </span>
                      </span>
                    </div>
                    {cert.duration && (
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-gray-400" />
                        <span>{cert.duration}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">
                      {cert.date}
                    </span>
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={12} />
                      View Certificate
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-gray-100 flex items-center justify-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 hover:scale-110 active:scale-95"
            aria-label="Next certificate"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-8">
          {certifications.map((c, i) => (
            <button
              key={c.title}
              type="button"
              onClick={() => goTo(i, i > current ? 1 : -1)}
              aria-label={`Go to certificate ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-3 bg-blue-500"
                  : "w-3 h-3 bg-gray-300 hover:bg-blue-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
