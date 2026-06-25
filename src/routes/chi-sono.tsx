import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/sofy/Nav";

export const Route = createFileRoute("/chi-sono")({
  component: ChiSonoPage,
  head: () => ({
    meta: [
      { title: "Chi sono — Sofy Web Design" },
      { name: "description", content: "Ciao, sono Sofy. Web designer freelance specializzata WordPress. Aiuto donne e professioniste a portare online un sito che le rappresenti." },
      { property: "og:title", content: "Chi sono — Sofy Web Design" },
      { property: "og:description", content: "Ciao, sono Sofy. Web designer WordPress per donne e professioniste." },
      { property: "og:url", content: "/chi-sono" },
      { property: "og:image", content: "/sofia-new-portrait.jpg" },
    ],
    links: [{ rel: "canonical", href: "/chi-sono" }],
  }),
});

const story = [
  { y: "'18", t: "Il primo sito, il primo \"wow\".", p: "Costruisco il mio primo sito WordPress quasi per gioco, per una zia che aveva aperto un piccolo atelier. Tre mesi dopo riceve la sua prima cliente trovata su Google. Da lì non ho più smesso." },
  { y: "'20", t: "Da hobby a mestiere.", p: "Apro la partita IVA. Studio UX, copy che converte, SEO. Capisco che un sito bello ma muto non basta: deve avere una struttura che porta davvero le persone all'azione." },
  { y: "'22", t: "La nicchia che mi sceglie.", p: "Sempre più clienti dal mondo del beauty, del benessere, della consulenza al femminile. Inizio a specializzarmi: tono caldo, palette curate, layout editoriali." },
  { y: "'26", t: "Sofy Web Design oggi.", p: "Più di 40 siti pubblicati, un metodo collaudato, zero clienti scontente. Lavoro al massimo con due progetti al mese — perché ognuna merita la mia attenzione completa." },
];

const vals = [
  { n: "i", t: "Cura, non fretta.", p: "Lavoro con poche clienti per volta. Ogni colore, ogni titolo, ogni dettaglio passa da almeno tre passaggi di revisione." },
  { n: "ii", t: "Trasparenza, sempre.", p: "Preventivo scritto, tempi reali, nessuna sorpresa in fattura. Se qualcosa non si può fare entro budget, te lo dico subito." },
  { n: "iii", t: "Autonomia, non dipendenza.", p: "Il mio obiettivo è che dopo il lancio tu non abbia bisogno di me per gestire il sito. Tutorial, guide, formazione individuale." },
];

const tools = [
  { l: "Design", v: "Figma · Photoshop" },
  { l: "Sviluppo", v: "WordPress · Elementor" },
  { l: "E-commerce", v: "WooCommerce" },
  { l: "SEO & analytics", v: "Yoast · GA4 · Search Console" },
];

function ChiSonoPage() {
  return (
    <div className="sofy">
      <Nav active="/chi-sono" />

      <section className="container" style={{ padding: "80px 0 100px", display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" }}>
        <div className="ph" style={{ aspectRatio: "4/5", borderRadius: "var(--radius-l)", backgroundImage: `url(/sofia-new-portrait.jpg)`, backgroundPosition: "center top" }} />
        <div className="hero-anim">
          <span className="eyebrow">Chi sono</span>
          <h1 className="h-display" style={{ marginTop: 18 }}>Ciao, sono <em>Sofy</em>.</h1>
          <p className="lead" style={{ marginTop: 28, maxWidth: 480 }}>Sono web designer freelance, specializzata su WordPress. Aiuto donne e professioniste a portare online un sito che le rappresenti davvero — e che lavori per loro ogni giorno, anche quando sono offline.</p>
          <div style={{ marginTop: 36, display: "inline-flex", alignItems: "center", gap: 16, fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: 22, color: "var(--rose-deep)" }}>
            — con cura, una cliente alla volta
            <span style={{ width: 80, height: 1, background: "var(--cacao)" }} />
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-soft)", padding: "140px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80 }}>
          <div>
            <span className="eyebrow">Il percorso</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Come <em>sono arrivata</em> qui.</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {story.map((s, i) => (
              <div key={s.y} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 32, paddingBottom: 48, borderBottom: i === story.length - 1 ? "none" : "1px solid var(--line)" }}>
                <div style={{ fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: 32, color: "var(--rose-deep)", lineHeight: 1 }}>{s.y}</div>
                <div>
                  <h4 style={{ fontFamily: "var(--ff-serif)", fontWeight: 400, fontSize: 26, lineHeight: 1.2, color: "var(--espresso)", margin: "0 0 12px" }}>{s.t}</h4>
                  <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: 15, lineHeight: 1.7 }}>{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "140px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 80px" }}>
            <span className="eyebrow">Come lavoro</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Tre cose <em>che mi stanno a cuore</em>.</h2>
            <p className="lead" style={{ marginTop: 20 }}>Non sono "valori da brochure". Sono i tre filtri che applico a ogni decisione di progetto.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {vals.map((v) => (
              <div key={v.n} style={{ background: "var(--cream)", border: "1px solid var(--line)", borderRadius: "var(--radius-l)", padding: "36px 32px 32px" }}>
                <div style={{ fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: 40, color: "var(--rose)", lineHeight: 1, marginBottom: 24 }}>{v.n}</div>
                <h4 style={{ fontFamily: "var(--ff-serif)", fontWeight: 400, fontSize: 24, color: "var(--espresso)", margin: "0 0 12px", lineHeight: 1.2 }}>{v.t}</h4>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-soft)" }}>{v.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--espresso)", color: "var(--cream)", padding: "140px 0" }}>
        <div className="container">
          <span className="eyebrow" style={{ color: "var(--rose)" }}>Lo studio</span>
          <h2 className="h-1" style={{ marginTop: 14, color: "var(--cream)" }}>Strumenti, <em style={{ color: "var(--rose)" }}>metodo</em>, attenzione.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 60, marginTop: 48, alignItems: "start" }}>
            <div className="ph" style={{ aspectRatio: "4/5", borderRadius: "var(--radius-l)", backgroundImage: `url(/sofia-1.jpg)` }} />
            <div style={{ color: "rgba(251,246,241,0.78)", fontSize: 16, lineHeight: 1.75 }}>
              <p>Lavoro da casa, nello studio luminoso che mi sono costruita un angolo alla volta. Disegno su Figma, costruisco su WordPress, scrivo i miei testi a mano in un quaderno prima di portarli online.</p>
              <p style={{ marginTop: 18 }}>Credo che un sito non sia mai "tecnologia". È una conversazione tra te e la persona dall'altra parte dello schermo.</p>
            </div>
            <div style={{ color: "rgba(251,246,241,0.78)", fontSize: 16, lineHeight: 1.75 }}>
              <p>Ogni progetto inizia con una call gratuita di 30 minuti. Non per vendere: per capire se siamo le persone giuste l'una per l'altra.</p>
              <p style={{ marginTop: 18 }}>Quando dico "sì" a un progetto, blocco tre settimane del mio calendario solo per te. Niente clienti in parallelo.</p>
            </div>
          </div>
          <div style={{ marginTop: 56, borderTop: "1px solid rgba(251,246,241,0.18)", paddingTop: 40, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {tools.map((t, i) => (
              <div key={t.l} style={{ borderRight: i < tools.length - 1 ? "1px solid rgba(251,246,241,0.12)" : "none", paddingRight: 24 }}>
                <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--rose)" }}>{t.l}</span>
                <p style={{ margin: "8px 0 0", fontFamily: "var(--ff-serif)", fontSize: 22, color: "var(--cream)" }}>{t.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "140px 0", textAlign: "center", background: "radial-gradient(ellipse at 50% 30%, rgba(201,161,139,0.3), transparent 60%), var(--bg)" }}>
        <div className="container">
          <span className="eyebrow">Lavoriamo insieme</span>
          <h2 className="h-display" style={{ maxWidth: 880, margin: "18px auto 0" }}>Ti va di <em>conoscerci</em>?</h2>
          <p className="lead" style={{ maxWidth: 540, margin: "24px auto 0" }}>Una call di 30 minuti, senza impegno. Mi racconti il tuo progetto, ti dico in tutta sincerità se posso aiutarti.</p>
          <div className="row" style={{ justifyContent: "center", marginTop: 36 }}>
            <Link to="/prenotazione" className="btn btn-primary btn-arrow">Prenota la call</Link>
            <Link to="/concept" className="btn btn-ghost">Vedi i miei concept</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
