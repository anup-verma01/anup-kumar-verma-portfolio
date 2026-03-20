import { ArrowRight, Download, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div
              className="w-36 h-36 rounded-full p-1"
              style={{
                background: "linear-gradient(135deg, #2F74D0, #A78BFA)",
              }}
            >
              <img
                src="/assets/uploads/a-1.jpg"
                alt="Anup Kumar Verma"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold leading-tight"
          >
            <span className="text-gray-800">Anup Kumar </span>
            <span className="text-gradient-blue">Verma</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-purple-600 text-base sm:text-lg font-semibold tracking-wide"
          >
            B.Tech CSE Student Specializing in Data Science
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-500 leading-relaxed max-w-2xl text-sm sm:text-base"
          >
            B.Tech CSE student specializing in Data Science with experience in
            full-stack web development. Skilled in{" "}
            <span className="text-purple-600 font-semibold">
              Python, JavaScript, React, SQL, and DSA
            </span>
            . Passionate about building{" "}
            <span className="text-blue-600 font-semibold">AI-powered</span>{" "}
            applications.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-10 mt-2"
          >
            {[
              { value: "3+", label: "Projects" },
              { value: "7.2", label: "CGPA" },
              { value: "5+", label: "Skills" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-gradient-blue">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-2"
          >
            <button
              type="button"
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-blue-300/50 hover:-translate-y-0.5 text-sm"
              data-ocid="hero.projects.button"
            >
              View Projects
              <ArrowRight size={15} />
            </button>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-blue-500 text-blue-600 hover:bg-blue-50 font-semibold px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 text-sm"
              data-ocid="hero.resume.button"
            >
              <Download size={15} />
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-purple-300/50 hover:-translate-y-0.5 text-sm"
              data-ocid="hero.contact.button"
            >
              Contact Me
            </button>
            <a
              href="https://www.linkedin.com/in/anup-kumar-verma-5a3159294/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold px-6 py-2.5 rounded-full transition-all hover:-translate-y-0.5 text-sm shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f97316, #ef4444)",
              }}
              data-ocid="hero.linkedin.button"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
