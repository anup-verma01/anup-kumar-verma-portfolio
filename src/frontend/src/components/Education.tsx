import { BookOpen, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech CSE (Data Science)",
    institution: "GL Bajaj Institute of Technology and Management",
    period: "2023 – 2027",
    score: "CGPA: 7.2",
    scoreLabel: "Current",
    color: "from-blue-500/20 to-purple-500/20",
    iconColor: "text-blue-600",
    accent: "bg-blue-100 text-blue-700",
  },
  {
    icon: BookOpen,
    degree: "Class 12 – CBSE",
    institution: "JD Public School",
    period: "2021 – 2022",
    score: "72%",
    scoreLabel: "Score",
    color: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-600",
    accent: "bg-purple-100 text-purple-700",
  },
  {
    icon: BookOpen,
    degree: "Class 10 – CBSE",
    institution: "JD Public School",
    period: "2020",
    score: "73.6%",
    scoreLabel: "Score",
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-600",
    accent: "bg-cyan-100 text-cyan-700",
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-cyan-600 font-semibold text-sm tracking-widest uppercase mb-2">
            Academic Background
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Education Journey
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #67E8F9, #2F74D0)" }}
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{
              background: "linear-gradient(180deg, #67E8F9, #A78BFA, #F0ABFC)",
            }}
          />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-16"
                data-ocid={`education.item.${i + 1}`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-white"
                  style={{
                    background: "linear-gradient(135deg, #67E8F9, #A78BFA)",
                    top: "1.5rem",
                  }}
                />

                <div
                  className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${edu.color}`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex items-start gap-4">
                      <div className={`${edu.iconColor} mt-1`}>
                        <edu.icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg">
                          {edu.degree}
                        </h3>
                        <p className="text-gray-500 text-sm mt-0.5">
                          {edu.institution}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          {edu.period}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span
                        className={`inline-block text-sm font-bold px-3 py-1 rounded-full ${edu.accent}`}
                      >
                        {edu.score}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
