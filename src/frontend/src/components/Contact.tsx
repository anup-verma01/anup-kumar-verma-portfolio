import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useState } from "react";
import { useRef } from "react";
import { toast } from "sonner";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setForm({ name: "", email: "", message: "" });
    toast.success("Message sent! I'll get back to you soon. 🎉");
  };

  const socials = [
    {
      icon: Mail,
      label: "Email",
      value: "anupverma4589@gmail.com",
      href: "mailto:anupverma4589@gmail.com",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9198376415",
      href: "tel:+919198376415",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com",
      color: "text-blue-700 bg-blue-100",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-pink-500 font-semibold text-sm tracking-widest uppercase mb-2">
            Let's Connect
          </p>
          <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
          <div
            className="w-16 h-1 rounded-full mx-auto mt-4"
            style={{ background: "linear-gradient(90deg, #D23AA8, #A78BFA)" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Let's Work Together
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8">
              I'm always open to discussing new opportunities, interesting
              projects, or just having a great conversation about tech and AI.
            </p>

            <div className="space-y-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4 p-4 glass-card rounded-2xl group hover:shadow-lg transition-shadow"
                  data-ocid={`contact.${social.label.toLowerCase()}.link`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${social.color}`}
                  >
                    <social.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      {social.label}
                    </div>
                    <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                      {social.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 space-y-5"
              data-ocid="contact.form"
            >
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-name"
                  className="text-gray-700 font-semibold text-sm"
                >
                  Your Name
                </Label>
                <Input
                  id="contact-name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  required
                  className="bg-white/60 border-white/70 focus:border-blue-400 rounded-xl"
                  data-ocid="contact.name.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-email"
                  className="text-gray-700 font-semibold text-sm"
                >
                  Email Address
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, email: e.target.value }))
                  }
                  required
                  className="bg-white/60 border-white/70 focus:border-blue-400 rounded-xl"
                  data-ocid="contact.email.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-message"
                  className="text-gray-700 font-semibold text-sm"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell me about your project or just say hi..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                  className="bg-white/60 border-white/70 focus:border-blue-400 rounded-xl resize-none"
                  data-ocid="contact.message.textarea"
                />
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
                data-ocid="contact.submit.button"
              >
                {submitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={16} /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
