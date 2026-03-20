import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const projects = [
  {
    emoji: "📚",
    title: "ExamNotesAI",
    description:
      "AI platform that generates structured notes from PDFs and videos. NLP-based summarization, keyword extraction, and a smart Q&A feature for efficient learning.",
    tags: ["React", "Python", "NLP", "REST API"],
    tagColors: [
      "bg-blue-100 text-blue-700",
      "bg-yellow-100 text-yellow-700",
      "bg-green-100 text-green-700",
      "bg-purple-100 text-purple-700",
    ],
    demo: "https://examnotesai-1-sjel.onrender.com",
    github: "https://github.com",
    gradient: "from-blue-400/20 via-cyan-300/10 to-purple-400/20",
  },
  {
    emoji: "🤖",
    title: "InterviewIQ AI",
    description:
      "AI-powered interview preparation platform with mock interview simulations, personalized feedback, and real-time performance analytics to help you ace your next interview.",
    tags: ["React", "Python", "AI", "REST API"],
    tagColors: [
      "bg-cyan-100 text-cyan-700",
      "bg-yellow-100 text-yellow-700",
      "bg-pink-100 text-pink-700",
      "bg-indigo-100 text-indigo-700",
    ],
    demo: "https://interviewiq-ai-96v5.onrender.com",
    github: "https://github.com",
    gradient: "from-purple-400/20 via-pink-300/10 to-cyan-400/20",
  },
  {
    emoji: "🌐",
    title: "AI Website Builder",
    description:
      "Generates complete websites from text prompts. Real-time HTML/CSS/JS code generation, live preview with drag & drop editor, and one-click deployment.",
    tags: ["React", "JavaScript", "AI", "CSS"],
    tagColors: [
      "bg-cyan-100 text-cyan-700",
      "bg-orange-100 text-orange-700",
      "bg-pink-100 text-pink-700",
      "bg-indigo-100 text-indigo-700",
    ],
    demo: "https://aiwebbuilder.example.com",
    github: "https://github.com",
    gradient: "from-green-400/20 via-cyan-300/10 to-blue-400/20",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-purple-500 font-semibold text-sm tracking-widest uppercase mb-2">
            What I've Built
          </p>
          <h2 className="text-4xl font-bold text-gray-800">
            Project Highlights
          </h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #A78BFA, #D23AA8)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`glass-card rounded-3xl overflow-hidden bg-gradient-to-br ${project.gradient} group`}
              data-ocid={`projects.item.${i + 1}`}
            >
              <div
                className="p-8 pb-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)",
                }}
              >
                <div className="text-5xl mb-4">{project.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="px-8 pb-8">
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, ti) => (
                    <span
                      key={tag}
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${project.tagColors[ti]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                    data-ocid={`projects.demo.button.${i + 1}`}
                  >
                    <ExternalLink size={13} /> View Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-gray-300 hover:border-gray-500 text-gray-700 text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                    data-ocid={`projects.github.button.${i + 1}`}
                  >
                    <Github size={13} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
