import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  const links = [
    { label: "About", href: "#hero" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-4">
      <div className="container mx-auto">
        <div className="glass-card rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <span>© {year}. Built with</span>
            <Heart size={14} className="text-pink-500 fill-pink-500" />
            <span>using</span>
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              data-ocid="footer.caffeine.link"
            >
              caffeine.ai
            </a>
          </div>

          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors font-medium"
                data-ocid={`footer.${link.label.toLowerCase()}.link`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
