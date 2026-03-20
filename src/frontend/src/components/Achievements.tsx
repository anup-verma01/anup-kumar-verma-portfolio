import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const achievements = [
  {
    emoji: "🏆",
    title: "Smart India Hackathon 2025",
    description:
      "Participant — cleared the internal selection round, qualifying for the national-level hackathon competition.",
    badge: "Hackathon",
    gradient: "from-yellow-400/20 to-orange-400/20",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    emoji: "💻",
    title: "Competitive Programming",
    description:
      "Consistent DSA practice with focus on algorithmic problem solving, data structures, and competitive coding.",
    badge: "DSA",
    gradient: "from-blue-400/20 to-indigo-400/20",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    emoji: "🚀",
    title: "Hackathons & Competitions",
    description:
      "Active participant in coding competitions and hackathons, continuously pushing boundaries in collaborative tech environments.",
    badge: "Competitions",
    gradient: "from-purple-400/20 to-pink-400/20",
    badgeColor: "bg-purple-100 text-purple-700",
  },
];

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-600 font-semibold text-sm tracking-widest uppercase mb-2">
            Recognition
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Achievements &amp; Activities
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #FBBF24, #F59E0B)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${item.gradient} text-center`}
              data-ocid={`achievements.item.${i + 1}`}
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <span
                className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${item.badgeColor}`}
              >
                {item.badge}
              </span>
              <h3 className="font-bold text-gray-800 text-base mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
