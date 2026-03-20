import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export default function ProfessionalSummary() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="professional-summary" className="py-16 px-4" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold">
              <span className="text-gradient-blue">Professional</span>
              <span className="text-gray-800"> Summary</span>
            </h2>
            <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </div>

          {/* Summary Card */}
          <div
            className="relative rounded-2xl p-8 sm:p-10 shadow-xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(219,234,254,0.7) 50%, rgba(237,233,254,0.7) 100%)",
              backdropFilter: "blur(16px)",
              border: "1.5px solid rgba(147,197,253,0.4)",
            }}
          >
            {/* Decorative blob */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-20 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #818cf8 0%, #60a5fa 100%)",
              }}
            />
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-15 pointer-events-none"
              style={{
                background: "radial-gradient(circle, #a78bfa 0%, #38bdf8 100%)",
              }}
            />

            {/* Quote icon */}
            <div className="text-5xl leading-none text-blue-300 font-serif select-none mb-3">
              &ldquo;
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed relative z-10">
              Data Science-focused{" "}
              <span className="text-blue-600 font-semibold">
                B.Tech student
              </span>{" "}
              with hands-on experience in building{" "}
              <span className="text-blue-600 font-semibold">
                AI-powered and full-stack web applications
              </span>
              . Skilled in developing intelligent systems using{" "}
              <span className="text-purple-600 font-semibold">
                machine learning concepts, NLP techniques
              </span>
              , and modern web technologies. Proficient in{" "}
              <span className="text-purple-600 font-semibold">
                Python, JavaScript, React, and SQL
              </span>
              , with a solid foundation in{" "}
              <span className="text-blue-600 font-semibold">
                Data Structures, Algorithms, and backend development
              </span>
              . Passionate about creating scalable, impactful solutions that
              bridge the gap between{" "}
              <span className="text-blue-600 font-semibold">
                AI and modern software engineering
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
