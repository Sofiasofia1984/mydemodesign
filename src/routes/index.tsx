import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "@/components/sofy/Nav";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Sofy Web Design — Siti WordPress che vendono ogni giorno" },
      { name: "description", content: "Web designer freelance WordPress. Siti curati che raccontano chi sei e portano vendite reali. Per donne e professioniste." },
      { property: "og:title", content: "Sofy Web Design — Siti WordPress curati" },
      { property: "og:description", content: "Siti WordPress che raccontano chi sei e vendono ogni giorno." },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/sofia-new-portrait.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Sofy Web Design",
        description: "Web design WordPress per donne e professioniste.",
        image: "/sofia-portrait.jpg",
        areaServed: "Italia",
        serviceType: "Web design WordPress",
      }),
    }],
  }),
});

const pains = [
  { i: "i", t: "Il sito c'è, ma sembra di un'altra.", p: "Lo guardi e non ti riconosci più: i colori non sono i tuoi, i testi parlano una lingua che non è la tua." },
  { i: "ii", t: "Le persone entrano e se ne vanno.", p: "Vedi visite nelle statistiche, ma niente messaggi, niente prenotazioni, niente vendite." },
  { i: "iii", t: "Aggiornarlo è un incubo.", p: "Ogni piccola modifica richiede di scrivere a qualcuno, aspettare giorni e a volte pagare un extra." },
  { i: "iv", t: "Da mobile è imbarazzante.", p: "Il 70% delle persone ti cerca dal telefono e trova testi piccoli, pulsanti che non si vedono." },
  { i: "v", t: "Su Google non esisti.", p: "Hai investito, ma se digiti il tuo servizio + città non ti trovi. Non sei ottimizzata." },
  { i: "vi", t: "Hai paura di rifarlo da capo.", p: "Non vuoi rivivere mesi di mail, brief, PDF da approvare e risultati deludenti." },
];

const values = [
  { t: "Identità visiva coerente.", p: "Colori, font, immagini e micro-dettagli che parlano di te — pensati insieme, non scelti a caso." },
  { t: "Struttura che converte.", p: "Le pagine sono ordinate come una conversazione: attenzione, fiducia, prova, decisione." },
  { t: "Veloce, mobile-first, indicizzato.", p: "Tempo di caricamento sotto i 2 secondi, pensato prima per smartphone, ottimizzato per Google." },
  { t: "Autonomia totale dopo il lancio.", p: "Ti consegno un sito che puoi aggiornare tu, in pochi clic. Con video tutorial su misura." },
];

const services = [
  { m: "b", t: "Blog moderno", p: "Per chi vuole costruire autorevolezza e farsi trovare su Google con costanza.", l: ["Architettura editoriale", "Layout articoli & categorie", "SEO base on-page", "Newsletter integrata"] },
  { m: "e", t: "E-commerce", p: "Vendi i tuoi prodotti online con un negozio WooCommerce ordinato e pensato per convertire.", l: ["Schede prodotto curate", "Checkout ottimizzato", "Pagamenti & spedizioni", "Email automatiche"] },
  { m: "p", t: "Sito per professionisti", p: "Per chi vende il proprio tempo: consulenti, terapiste, coach, professioniste del beauty.", l: ["Pagina servizi efficace", "Prenotazione online", "Pagina chi sono che converte", "Form & lead magnet"] },
];

const steps = [
  { n: 1, t: "Ascolto", p: "Una call gratuita di 30 minuti per capire chi sei e che cosa ti serve davvero." },
  { n: 2, t: "Strategia", p: "Mappiamo struttura, contenuti e tono. Ricevi un documento di progetto prima di partire." },
  { n: 3, t: "Design & sviluppo", p: "Disegno il sito su Figma, lo costruisco su WordPress e te lo mostro vivo." },
  { n: 4, t: "Lancio & autonomia", p: "Ti formo per gestirlo da sola, ti lascio video tutorial e resto disponibile per il primo mese." },
];

const faqs = [
  { q: "Quanto costa un sito?", a: "Ogni progetto è diverso e il preventivo è gratuito. Un sito vetrina parte da una cifra contenuta, mentre un e-commerce richiede un investimento maggiore. Dopo la prima call ricevi un'offerta dettagliata, scritta, valida 30 giorni." },
  { q: "In quanto tempo è online?", a: "Un sito vetrina richiede in media 3 settimane, un e-commerce 5–6. I tempi dipendono dalla velocità con cui mi mandi i contenuti: ti accompagno con una checklist." },
  { q: "Lavori solo su WordPress?", a: "Sì, è la mia specialità. WordPress è la piattaforma più diffusa al mondo, flessibile e in tuo pieno controllo: nessun lock-in, nessun canone alto." },
  { q: "Posso modificarlo da sola dopo?", a: "Assolutamente. Ti consegno il sito con un pannello semplice, video tutorial registrati su misura e una guida PDF." },
  { q: "Che cosa devo preparare?", a: "Niente, all'inizio. Bastano poche idee e una chiacchierata. Insieme definiamo brief, contenuti e immagini." },
  { q: "Offri anche manutenzione?", a: "Sì. Dopo il lancio puoi scegliere un piano di manutenzione mensile: backup, aggiornamenti, sicurezza e ore dedicate alle modifiche." },
];

function HomePage() {
  return (
    <div className="sofy">
      <Nav active="/" />

      {/* HERO */}
      <section style={{ padding: "96px 0 120px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", top: -180, right: -160, width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(closest-side, rgba(201,161,139,0.35), transparent 70%)", pointerEvents: "none" }} />
        <div aria-hidden style={{ position: "absolute", bottom: -200, left: -160, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(closest-side, rgba(176,133,110,0.22), transparent 70%)", pointerEvents: "none" }} />
        <div className="container hero-anim" style={{ position: "relative", textAlign: "center", maxWidth: 880, margin: "0 auto" }}>
          <span className="tag"><span className="dot" /> Web design su WordPress · Disponibile da maggio</span>
          <h1 className="h-display" style={{ marginTop: 24 }}>
            Un sito che ti rappresenta e <em>vende</em> ogni giorno per te.
          </h1>
          <p className="lead" style={{ maxWidth: 640, margin: "28px auto 0" }}>
            Creo siti WordPress che raccontano chi sei, portano vendite e prenotazioni reali, e fanno crescere il valore del tuo brand sul web — senza che tu debba pensare a una sola riga di codice.
          </p>
          <div className="row" style={{ justifyContent: "center", marginTop: 40 }}>
            <Link to="/prenotazione" className="btn btn-primary btn-arrow">Prenota una consulenza</Link>
            <Link to="/concept" className="btn btn-ghost">Vedi i miei concept</Link>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 64, flexWrap: "wrap" }}>
            {[["+40", "siti pubblicati"], ["5★", "recensioni clienti"], ["3 sett.", "tempo medio consegna"]].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <strong style={{ display: "block", fontFamily: "var(--ff-serif)", fontSize: 36, color: "var(--espresso)", lineHeight: 1 }}>{n}</strong>
                <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cacao)", marginTop: 8, display: "block" }}>{l}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "1fr 1.2fr 1fr", gap: 24, alignItems: "center" }}>
            <div className="ph" style={{ aspectRatio: "3/4.6", backgroundImage: `url(/sofia-1.jpg)` }} />
            <div className="ph" style={{ aspectRatio: "4/5.6", backgroundImage: `url(/sofia-new-portrait.jpg)`, backgroundPosition: "center top" }} />
            <div className="ph" style={{ aspectRatio: "3/4.6", backgroundImage: `url(/sofia-3.jpg)` }} />
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section style={{ background: "var(--bg-soft)", padding: "120px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto 64px" }}>
            <span className="eyebrow">Il problema</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Hai un sito, ma <em>non lavora per te.</em></h2>
            <p className="lead" style={{ marginTop: 20 }}>Forse ti riconosci in qualcuno di questi punti. Sono le cose che sento ripetere ogni settimana dalle clienti che arrivano da me.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
            {pains.map((p) => (
              <div key={p.i} style={{ background: "var(--cream)", border: "1px solid var(--line)", borderRadius: "var(--radius-m)", padding: "28px 28px 28px 32px", display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", background: "var(--bg-warm)", color: "var(--cacao-deep)", display: "grid", placeItems: "center", fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: 18 }}>{p.i}</div>
                <div>
                  <h4 className="h-3" style={{ margin: "4px 0 8px" }}>{p.t}</h4>
                  <p className="body" style={{ margin: 0 }}>{p.p}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 64, textAlign: "center", fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: "clamp(22px, 2.4vw, 32px)", color: "var(--espresso)", lineHeight: 1.4, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            "Un sito non è un costo. È la tua vetrina aperta 24 ore su 24, sette giorni su sette. Se è fatta bene, lavora per te anche mentre dormi."
          </p>
        </div>
      </section>

      {/* SOLUTION */}
      <section style={{ padding: "120px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 80, alignItems: "center" }}>
          <div className="ph" style={{ aspectRatio: "5/6", backgroundImage: `url(/sofia-portrait.jpg)` }} />
          <div>
            <span className="eyebrow">La soluzione</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Un sito <em>WordPress</em> pensato come una piccola macchina di vendita.</h2>
            <p className="lead" style={{ marginTop: 24 }}>Non solo un bel design. Ogni pagina, ogni titolo, ogni call to action è studiata per accompagnare chi arriva sul sito da "curioso" a "cliente". Senza forzature, con il tono giusto per te.</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "32px 0 0" }}>
              {values.map((v, i) => (
                <li key={i} style={{ display: "flex", gap: 16, padding: "18px 0", borderTop: "1px solid var(--line)", borderBottom: i === values.length - 1 ? "1px solid var(--line)" : undefined }}>
                  <span style={{ flexShrink: 0, width: 28, height: 28, borderRadius: "50%", border: "1px solid var(--rose-deep)", color: "var(--rose-deep)", display: "grid", placeItems: "center", fontSize: 14 }}>✓</span>
                  <div>
                    <h5 style={{ margin: "2px 0 4px", fontSize: 16, fontWeight: 600, color: "var(--espresso)" }}>{v.t}</h5>
                    <p style={{ margin: 0, fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.55 }}>{v.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: "var(--espresso)", color: "var(--cream)", padding: "120px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 72px" }}>
            <span className="eyebrow" style={{ color: "var(--rose)" }}>Servizi</span>
            <h2 className="h-1" style={{ marginTop: 14, color: "var(--cream)" }}>Tre modi per <em style={{ color: "var(--rose)" }}>lavorare</em> insieme.</h2>
            <p className="lead" style={{ marginTop: 20, color: "rgba(251,246,241,0.78)" }}>Ogni progetto parte da una conversazione e da un brief gratuito. I prezzi sono personalizzati.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {services.map((s) => (
              <div key={s.t} style={{ background: "rgba(251,246,241,0.04)", border: "1px solid rgba(251,246,241,0.12)", borderRadius: "var(--radius-m)", padding: "36px 30px 30px", display: "flex", flexDirection: "column", gap: 18, minHeight: 380 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--cream)", color: "var(--espresso)", display: "grid", placeItems: "center", fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: 22 }}>{s.m}</div>
                <h3 style={{ fontFamily: "var(--ff-serif)", fontWeight: 400, fontSize: 28, margin: 0, color: "var(--cream)" }}>{s.t}</h3>
                <p style={{ color: "rgba(251,246,241,0.72)", fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>{s.p}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13, color: "rgba(251,246,241,0.6)" }}>
                  {s.l.map((li) => (
                    <li key={li} style={{ padding: "6px 0", borderTop: "1px solid rgba(251,246,241,0.1)" }}>{li}</li>
                  ))}
                </ul>
                <span style={{ marginTop: "auto", paddingTop: 18, color: "var(--rose)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>Scopri di più →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "120px 0", background: "var(--bg-soft)", borderTop: "1px solid var(--line)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto 80px" }}>
            <span className="eyebrow">Come lavoriamo</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Un percorso <em>chiaro</em>, in quattro tappe.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, position: "relative" }}>
            {steps.map((s) => (
              <div key={s.n} style={{ position: "relative", zIndex: 1, padding: "0 16px", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--bg)", border: "1px solid var(--line)", color: "var(--rose-deep)", display: "grid", placeItems: "center", fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: 24, margin: "0 auto 22px" }}>{s.n}</div>
                <h4 style={{ fontSize: 16, margin: "0 0 8px", color: "var(--espresso)" }}>{s.t}</h4>
                <p style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.55, margin: 0 }}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--bg-soft)", padding: "120px 0", borderTop: "1px solid var(--line)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "0.9fr 1.4fr", gap: 80, alignItems: "start" }}>
          <div>
            <span className="eyebrow">Domande frequenti</span>
            <h2 className="h-1" style={{ marginTop: 14 }}>Le risposte <em>più richieste</em>.</h2>
            <p className="lead" style={{ marginTop: 20 }}>Se la tua domanda non c'è, scrivimi: rispondo personalmente entro un giorno lavorativo.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((f, i) => (
              <details key={i} open={i === 0} style={{ background: "var(--cream)", border: "1px solid var(--line)", borderRadius: "var(--radius-m)", padding: "22px 26px" }}>
                <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontWeight: 600, fontSize: 15, color: "var(--espresso)" }}>
                  {f.q}<span style={{ fontFamily: "var(--ff-serif)", fontSize: 22, color: "var(--rose-deep)" }}>+</span>
                </summary>
                <p style={{ margin: "14px 0 0", fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "140px 0", textAlign: "center", background: "radial-gradient(ellipse at 50% 20%, rgba(201,161,139,0.35), transparent 60%), var(--bg)" }}>
        <div className="container">
          <span className="eyebrow">Pronta a partire?</span>
          <h2 className="h-display" style={{ marginTop: 18, maxWidth: 900, marginLeft: "auto", marginRight: "auto" }}>Costruiamo insieme il sito <em>che meriti.</em></h2>
          <p className="lead" style={{ maxWidth: 580, margin: "28px auto 0" }}>La prima call è gratuita, dura 30 minuti, e da lì capiamo se ha senso lavorare insieme. Senza impegno, senza vendita aggressiva.</p>
          <div className="row" style={{ justifyContent: "center", marginTop: 40 }}>
            <Link to="/prenotazione" className="btn btn-primary btn-arrow">Prenota la tua call</Link>
            <Link to="/chi-sono" className="btn btn-ghost">Conosci Sofy</Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
