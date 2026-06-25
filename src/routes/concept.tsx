import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/sofy/Nav";

export const Route = createFileRoute("/concept")({
  component: ConceptPage,
  head: () => ({
    meta: [
      { title: "I miei concept — Sofy Web Design" },
      { name: "description", content: "Una raccolta di concept, moodboard e direzioni creative per siti WordPress: beauty, e-commerce, professioniste." },
      { property: "og:title", content: "I miei concept — Sofy Web Design" },
      { property: "og:description", content: "Le idee prima che diventino siti. Concept, moodboard e direzioni creative." },
      { property: "og:url", content: "/concept" },
    ],
    links: [{ rel: "canonical", href: "/concept" }],
  }),
});

type Concept = {
  size: 4 | 6 | 8;
  cat: string;
  yr: string;
  title: string;
  desc: string;
  tags: string[];
  img: string;
};

const concepts: Concept[] = [
  { size: 8, cat: "Beauty · Atelier", yr: "'26", title: "Atelier Mira — la calma del rito.", desc: "Direzione visiva per un atelier di estetica olistica: tempi lenti, tipografia editoriale, rituali raccontati come piccole liturgie. Palette polvere e cipria.", tags: ["Brand", "Sito vetrina", "WooCommerce light"], img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1400&q=80&auto=format&fit=crop" },
  { size: 4, cat: "E-commerce · Skincare", yr: "'26", title: "Velvet Skin Co.", desc: "Negozio online per skincare clean. Schede prodotto editoriali, ingredienti come protagonisti, check-out a un solo passo.", tags: ["WooCommerce", "Editoriale"], img: "https://images.unsplash.com/photo-1778409762668-cf893875d611?w=900&q=80&auto=format&fit=crop" },
  { size: 4, cat: "Professioniste · Coach", yr: "'26", title: "Studio Lume.", desc: "Sito per una coach del benessere. Pagina servizi che porta dritto alla call gratuita, blog editoriale e lead magnet integrato.", tags: ["Sito professioniste", "Lead magnet"], img: "https://images.unsplash.com/photo-1591343395082-e120087004b4?w=900&q=80&auto=format&fit=crop" },
  { size: 8, cat: "Beauty · Boutique", yr: "'25", title: "Maison Petra — boutique slow beauty.", desc: "Concept per una boutique di profumeria di nicchia. Look-book interattivo, schede prodotto con storytelling lungo, check-out essenziale.", tags: ["Brand", "E-commerce", "Look-book"], img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1400&q=80&auto=format&fit=crop" },
  { size: 6, cat: "Professioniste · Consulenza", yr: "'25", title: "Giulia Ferri Studio.", desc: "Personal brand per una consulente fiscale specializzata in liberi professionisti del beauty. Tono serio, ma caldo. Prenotazione integrata.", tags: ["Personal brand", "Booking"], img: "https://images.unsplash.com/photo-1758518729929-8210d3b0839e?w=1200&q=80&auto=format&fit=crop" },
  { size: 6, cat: "Editoriale · Blog", yr: "'25", title: "Taccuino — diario digitale.", desc: "Concept di blog moderno: layout magazine, categorie come capitoli di un libro, archivio cronologico ispirato ai diari di carta.", tags: ["Blog", "Editoriale", "SEO base"], img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80&auto=format&fit=crop" },
];

const filters = ["Tutti", "Beauty", "E-commerce", "Professioniste", "Brand identity", "Editoriale"];

function ConceptPage() {
  return (
    <div className="sofy">
      <Nav active="/concept" />

      <section className="container hero-anim" style={{ padding: "96px 0 56px", textAlign: "center" }}>
        <span className="eyebrow">Concept · Idee · Sperimentazioni</span>
        <h1 className="h-display" style={{ maxWidth: 880, margin: "24px auto 0" }}>Le idee <em>prima</em> che diventino siti.</h1>
        <p className="lead" style={{ maxWidth: 620, margin: "28px auto 0" }}>
          Una raccolta di concept, moodboard e direzioni creative. Alcuni sono diventati progetti reali, altri sono ancora ipotesi: studi liberi su brand, palette e layout per esplorare nuove direzioni.
        </p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginTop: 48 }}>
          {filters.map((f, i) => (
            <button key={f} type="button" style={{
              height: 38, padding: "0 18px", borderRadius: "var(--radius-pill)",
              background: i === 0 ? "var(--espresso)" : "transparent",
              color: i === 0 ? "var(--cream)" : "var(--ink-soft)",
              border: `1px solid ${i === 0 ? "var(--espresso)" : "var(--line)"}`,
              fontSize: 12, fontWeight: 500, letterSpacing: "0.04em", cursor: "pointer",
            }}>{f}</button>
          ))}
        </div>
      </section>

      <section className="container">
        <div style={{ marginTop: 64, paddingBottom: 120, display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: 24 }}>
          {concepts.map((c, i) => (
            <article key={i} style={{
              gridColumn: `span ${c.size}`,
              background: "var(--cream)", border: "1px solid var(--line)", borderRadius: "var(--radius-l)",
              overflow: "hidden", display: "flex", flexDirection: "column",
            }}>
              <div className="ph" style={{
                borderRadius: 0, border: "none", borderBottom: "1px solid var(--line)",
                aspectRatio: c.size === 8 ? "16/9" : c.size === 6 ? "4/3" : "4/4.4",
                backgroundImage: `url(${c.img})`,
              }} />
              <div style={{ padding: "24px 26px 28px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cacao)" }}>{c.cat}</span>
                  <span style={{ fontFamily: "var(--ff-serif)", fontStyle: "italic", color: "var(--rose-deep)", fontSize: 16 }}>{c.yr}</span>
                </div>
                <h3 style={{ fontFamily: "var(--ff-serif)", fontWeight: 400, fontSize: 26, lineHeight: 1.15, color: "var(--espresso)", margin: 0 }}>{c.title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)" }}>{c.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: "auto", paddingTop: 12 }}>
                  {c.tags.map((t) => (
                    <span key={t} style={{ fontSize: 11, padding: "4px 10px", borderRadius: "var(--radius-pill)", background: "var(--bg)", border: "1px solid var(--line)", color: "var(--cacao-deep)", letterSpacing: "0.04em" }}>{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--espresso)", color: "var(--cream)", padding: "100px 0", textAlign: "center" }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--rose)" }}>Hai un progetto in mente?</span>
          <h2 className="h-1" style={{ marginTop: 14, color: "var(--cream)" }}>Trasformiamolo in un <em style={{ color: "var(--rose)" }}>sito vero</em>.</h2>
          <p style={{ color: "rgba(251,246,241,0.78)", maxWidth: 540, margin: "24px auto 0" }}>Se uno dei concept ti ha ispirato — o se hai un'idea completamente nuova — partiamo da una call di 30 minuti, senza impegno.</p>
          <div className="row" style={{ justifyContent: "center", marginTop: 32 }}>
            <Link to="/prenotazione" className="btn btn-primary btn-arrow" style={{ background: "var(--cream)", color: "var(--espresso)" }}>Prenota una call</Link>
            <Link to="/chi-sono" className="btn btn-ghost" style={{ color: "var(--cream)", borderColor: "var(--cream)" }}>Conosci Sofy</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
