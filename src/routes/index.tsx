import { createFileRoute } from "@tanstack/react-router";
import nordicForm from "@/assets/project-nordic-form.jpg";
import pulse from "@/assets/project-pulse.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Erik Vance — WordPress Specialist & Custom Development" },
      {
        name: "description",
        content:
          "Freelance WordPress specialist building custom themes, plugins, and headless WooCommerce architectures for performance-obsessed brands.",
      },
      { property: "og:title", content: "Erik Vance — WordPress Specialist" },
      {
        property: "og:description",
        content: "Custom WordPress development for performance-obsessed brands.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: "Erik Vance — WordPress Specialist" },
      {
        name: "twitter:description",
        content: "Custom WordPress development for performance-obsessed brands.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              name: "Erik Vance",
              jobTitle: "WordPress Specialist",
              description:
                "Freelance WordPress specialist building custom themes, plugins, and headless WooCommerce architectures.",
              address: { "@type": "PostalAddress", addressLocality: "Berlin", addressCountry: "DE" },
              knowsAbout: [
                "WordPress",
                "WooCommerce",
                "Gutenberg",
                "Advanced Custom Fields",
                "PHP",
                "Headless CMS",
                "Web Performance",
              ],
            },
            {
              "@type": "ProfessionalService",
              name: "Erik Vance — WordPress Development",
              serviceType: "Custom WordPress Development",
              areaServed: "Worldwide",
              priceRange: "$$",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});


type Project = {
  tag: string;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    tag: "ACF_PRO // WOOCOMMERCE",
    title: "Nordic Form",
    description:
      "High-performance headless WooCommerce build with 0.8s LCP and a custom inventory sync layer.",
    image: nordicForm,
  },
  {
    tag: "GUTENBERG // CUSTOM_BLOCKS",
    title: "The Pulse",
    description:
      "Editorial platform featuring 40+ custom Gutenberg blocks and an automated editorial workflow.",
    image: pulse,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-wp-bg text-wp-fg font-sans selection:bg-wp-primary/30">
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-wp-border bg-wp-bg/80 backdrop-blur-md">
        <div className="font-display text-2xl tracking-tighter uppercase">Erik.Dev</div>
        <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-mono uppercase tracking-widest">
          <a href="#work" className="hover:text-wp-primary transition-colors">[ Projects ]</a>
          <a href="#stack" className="hidden sm:inline hover:text-wp-primary transition-colors">[ Capabilities ]</a>
          <a href="#contact" className="px-3 py-1 bg-wp-primary text-wp-bg font-bold">Contact</a>
        </div>
      </nav>

      <main>
        <section className="relative px-6 py-24 lg:py-40 border-b border-wp-border overflow-hidden">
          <div className="absolute top-10 right-10 text-[20vw] font-display text-white/[0.02] leading-none select-none pointer-events-none">
            WP_CORE
          </div>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-end relative">
            <div className="lg:col-span-8 animate-reveal">
              <div className="inline-block px-2 py-1 mb-6 border border-wp-primary/40 text-wp-primary text-[10px] font-mono uppercase tracking-widest">
                WordPress Engineering Specialist
              </div>
              <h1 className="font-display text-6xl sm:text-7xl md:text-9xl uppercase leading-[0.85] tracking-tighter mb-8">
                Engineering <br />
                <span className="text-wp-primary">Scalable</span> Web
              </h1>
              <p className="max-w-md text-wp-muted text-lg leading-relaxed">
                Custom-built WordPress architectures for performance-obsessed brands. No templates, no bloat — just pure PHP and Gutenberg excellence.
              </p>
            </div>
            <div className="lg:col-span-4 animate-reveal [animation-delay:200ms]">
              <div className="p-6 border border-wp-border bg-white/[0.02] font-mono text-[11px] leading-loose">
                <div className="text-wp-primary">// CURRENT_STATUS</div>
                <div className="flex justify-between"><span>Location</span><span className="text-wp-muted">Berlin, DE</span></div>
                <div className="flex justify-between"><span>Availability</span><span className="text-wp-primary">Open Q3 2026</span></div>
                <div className="flex justify-between"><span>Specialty</span><span className="text-wp-muted">Headless & Woo</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-16 animate-reveal">
              <h2 className="font-display text-4xl uppercase tracking-tight">Selected Builds</h2>
              <span className="font-mono text-xs text-wp-muted">[ 001 — 002 ]</span>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-wp-border border border-wp-border">
              {projects.map((p) => (
                <article key={p.title} className="group bg-wp-bg p-8 lg:p-12 hover:bg-white/[0.02] transition-colors">
                  <div className="font-mono text-[10px] text-wp-primary mb-4">{p.tag}</div>
                  <div className="w-full aspect-[4/3] bg-white/5 border border-wp-border mb-8 overflow-hidden">
                    <img
                      src={p.image}
                      alt={`${p.title} project cover`}
                      width={800}
                      height={608}
                      loading="lazy"
                      className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-display text-3xl uppercase mb-2">{p.title}</h3>
                  <p className="text-wp-muted text-sm max-w-sm mb-6">{p.description}</p>
                  <div className="h-px w-0 group-hover:w-full bg-wp-primary transition-all duration-500" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="px-6 py-24 bg-white/[0.01] border-y border-wp-border">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">
            <div className="animate-reveal">
              <h2 className="font-display text-5xl uppercase leading-none mb-6">Custom <br /><span className="text-wp-primary">Dev</span></h2>
              <p className="text-wp-muted text-sm mb-8">Deep PHP expertise to bend WordPress to any business requirement. I build engines, not just skins.</p>
              <ul className="font-mono text-xs space-y-3">
                {["Custom Plugin Development","Third-party API Integration","Database Optimization"].map((i) => (
                  <li key={i} className="flex items-center gap-3"><span className="size-1.5 bg-wp-primary" /> {i}</li>
                ))}
              </ul>
            </div>
            <div className="animate-reveal [animation-delay:100ms]">
              <h2 className="font-display text-5xl uppercase leading-none mb-6">User <br /><span className="text-wp-primary">Exp</span></h2>
              <p className="text-wp-muted text-sm mb-8">Leveraging Gutenberg to give clients an intuitive, visual editing experience that scales with the business.</p>
              <ul className="font-mono text-xs space-y-3">
                {["Block-based Themes","Performance Tuning","Accessibility (WCAG)"].map((i) => (
                  <li key={i} className="flex items-center gap-3"><span className="size-1.5 bg-wp-primary" /> {i}</li>
                ))}
              </ul>
            </div>
            <div className="animate-reveal [animation-delay:200ms]">
              <div className="p-8 border border-wp-primary/20 bg-wp-primary/5">
                <div className="font-mono text-[10px] text-wp-primary uppercase mb-6">Tech Stack v2.6</div>
                <div className="grid grid-cols-2 gap-y-4 font-display text-xl uppercase tracking-tight">
                  <div>PHP 8.3</div><div>WP Core</div><div>ACF Pro</div><div>React</div><div>Woo</div><div>Tailwind</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-32 text-center">
          <div className="max-w-4xl mx-auto animate-reveal">
            <h2 className="font-display text-5xl sm:text-6xl md:text-8xl uppercase tracking-tighter mb-12">
              Ready to build <br />
              the <span className="text-wp-primary italic">next</span> level?
            </h2>
            <a href="mailto:hello@erik.dev" className="group inline-flex items-center gap-6 px-12 py-6 border border-wp-border hover:border-wp-primary transition-colors">
              <span className="font-display text-2xl uppercase">Get in touch</span>
              <span className="font-mono text-wp-primary text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="px-6 py-12 border-t border-wp-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-mono text-[10px] text-wp-muted uppercase tracking-widest">© 2026 Erik Vance / Custom WordPress Architecture</div>
          <div className="flex gap-8 font-mono text-[10px] text-wp-muted uppercase tracking-widest">
            <a href="#" className="hover:text-wp-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-wp-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-wp-primary transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
