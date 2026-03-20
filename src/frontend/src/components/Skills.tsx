import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const skills = [
  {
    icon: "🐍",
    title: "Programming",
    tags: ["Python", "JavaScript", "Java", "C"],
    color: "from-yellow-400/20 to-orange-400/20",
    border: "border-yellow-300/40",
  },
  {
    icon: "⚛️",
    title: "Web Development",
    tags: ["React", "HTML", "CSS"],
    color: "from-cyan-400/20 to-blue-400/20",
    border: "border-cyan-300/40",
  },
  {
    icon: "🗄️",
    title: "Database",
    tags: ["MySQL", "Firebase"],
    color: "from-emerald-400/20 to-teal-400/20",
    border: "border-emerald-300/40",
  },
  {
    icon: "🛠️",
    title: "Dev Tools",
    tags: ["Git", "GitHub", "Postman", "VS Code"],
    color: "from-purple-400/20 to-pink-400/20",
    border: "border-purple-300/40",
  },
  {
    icon: "🧠",
    title: "Core Concepts",
    tags: ["DSA", "OOP", "DBMS", "OS"],
    color: "from-blue-400/20 to-indigo-400/20",
    border: "border-blue-300/40",
  },
  {
    icon: "☁️",
    title: "APIs & Cloud",
    tags: ["REST APIs", "Cloud Basics"],
    color: "from-sky-400/20 to-cyan-400/20",
    border: "border-sky-300/40",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-500 font-semibold text-sm tracking-widest uppercase mb-2">
            What I Know
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Skills &amp; Expertise
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #2F74D0, #D23AA8)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${skill.color} border ${skill.border} cursor-default`}
              data-ocid={`skills.item.${i + 1}`}
            >
              <div className="text-3xl mb-3">{skill.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-3">
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-white/70 text-gray-700 border border-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
