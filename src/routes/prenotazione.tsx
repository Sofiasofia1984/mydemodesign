import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Nav, Footer } from "@/components/sofy/Nav";

export const Route = createFileRoute("/prenotazione")({
  component: PrenotazionePage,
  head: () => ({
    meta: [
      { title: "Prenota il tuo progetto — Sofy Web Design" },
      { name: "description", content: "Compila il form: ti richiamo entro 24 ore lavorative per una call gratuita di 30 minuti e capire il tuo progetto WordPress." },
      { property: "og:title", content: "Prenota — Sofy Web Design" },
      { property: "og:description", content: "Call gratuita 30 minuti per il tuo prossimo sito WordPress." },
      { property: "og:url", content: "/prenotazione" },
    ],
    links: [{ rel: "canonical", href: "/prenotazione" }],
  }),
});

const promise = [
  { n: "i", t: "Risposta in 24 ore.", p: "Ti ricontatto personalmente, mai con risposte automatiche." },
  { n: "ii", t: "Call di 30 minuti, gratuita.", p: "Niente impegno, niente vendita aggressiva. Solo una conversazione." },
  { n: "iii", t: "Preventivo scritto in 3 giorni.", p: "Dopo la call, se siamo allineate, ricevi un'offerta dettagliata valida 30 giorni." },
];

const picks = [
  { v: "blog", m: "b", t: "Blog moderno", d: "Per costruire autorevolezza e farti trovare su Google." },
  { v: "ecommerce", m: "e", t: "E-commerce", d: "Vendi i tuoi prodotti online con WooCommerce." },
  { v: "professionisti", m: "p", t: "Sito professioniste", d: "Per consulenti, coach, professioniste del beauty." },
];

function PrenotazionePage() {
  const [servizio, setServizio] = useState("ecommerce");
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="sofy">
      <Nav active="/prenotazione" />

      <section className="container" style={{ padding: "64px 0 120px" }}>
        <div className="preno-grid" style={{ display: "grid", gridTemplateColumns: "0.95fr 1.15fr", gap: 80, alignItems: "start" }}>
          {/* LEFT */}
          <div className="hero-anim preno-left" style={{ position: "sticky", top: 100 }}>
            <span className="eyebrow">Prenotazione</span>
            <h1 className="h-display" style={{ marginTop: 20 }}>Iniziamo con un <em>caffè</em>.</h1>
            <div className="preno-hero-img" aria-hidden style={{
              marginTop: 28, aspectRatio: "5/3", borderRadius: "var(--radius-l)",
              backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop')",
              backgroundSize: "cover", backgroundPosition: "center", border: "1px solid var(--line)",
            }} />
            <p className="lead" style={{ marginTop: 24, maxWidth: 460 }}>
              Compila il form: ti richiamo entro 24 ore lavorative per fissare una call gratuita di 30 minuti, capire il tuo progetto e — se ha senso lavorare insieme — prepararti un preventivo scritto.
            </p>


            <ul style={{ marginTop: 48, borderTop: "1px solid var(--line)", listStyle: "none", padding: 0 }}>
              {promise.map((it) => (
                <li key={it.n} style={{ padding: "22px 0", borderBottom: "1px solid var(--line)", display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, width: 36, height: 36, borderRadius: "50%", border: "1px solid var(--rose-deep)", color: "var(--rose-deep)", display: "grid", placeItems: "center", fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: 16 }}>{it.n}</div>
                  <div>
                    <h5 style={{ margin: "4px 0 4px", fontSize: 15, fontWeight: 600, color: "var(--espresso)" }}>{it.t}</h5>
                    <p style={{ margin: 0, fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.55 }}>{it.p}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 40, background: "var(--bg-soft)", border: "1px solid var(--line)", borderRadius: "var(--radius-l)", padding: 32 }}>
              <blockquote style={{ fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: 22, lineHeight: 1.4, color: "var(--espresso)", margin: 0 }}>
                "Sofy ha ascoltato prima di proporre. Il sito che mi ha consegnato non sembra fatto da una freelance: sembra fatto su misura per me, perché lo è davvero."
              </blockquote>
              <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: "linear-gradient(135deg, var(--rose), var(--cacao))", color: "var(--cream)", fontFamily: "var(--ff-serif)", fontStyle: "italic", display: "grid", placeItems: "center", fontSize: 18 }}>M</div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <strong style={{ fontSize: 14, color: "var(--espresso)" }}>Martina V.</strong>
                  <span style={{ fontSize: 12, color: "var(--cacao)", letterSpacing: "0.04em" }}>Atelier estetica · Milano</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24, background: "var(--espresso)", color: "var(--cream)", border: "1px solid var(--espresso)", borderRadius: "var(--radius-l)", padding: 28 }}>
              <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--rose)" }}>Preferisci scrivere?</span>
              <h4 style={{ fontFamily: "var(--ff-serif)", fontWeight: 400, fontSize: 24, margin: "10px 0 18px", lineHeight: 1.2 }}>Contattami direttamente.</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                <li style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14 }}>
                  <span aria-hidden style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(251,246,241,0.08)", color: "var(--rose)", display: "grid", placeItems: "center", fontFamily: "var(--ff-serif)", fontStyle: "italic" }}>@</span>
                  <a href="mailto:sofisofi10123@gmail.com" style={{ color: "var(--cream)", textDecoration: "none" }}>sofisofi10123@gmail.com</a>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14 }}>
                  <span aria-hidden style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(251,246,241,0.08)", color: "var(--rose)", display: "grid", placeItems: "center", fontFamily: "var(--ff-serif)", fontStyle: "italic" }}>☏</span>
                  <a href="tel:+393501646712" style={{ color: "var(--cream)", textDecoration: "none" }}>+39 350 164 6712</a>
                </li>
              </ul>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={submit} style={{ background: "var(--cream)", border: "1px solid var(--line)", borderRadius: "var(--radius-l)", padding: "48px 48px 40px", boxShadow: "var(--shadow-m)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cacao)", marginBottom: 12 }}>
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--rose)", color: "var(--cream)", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 600, letterSpacing: 0 }}>1</span>
              Richiesta progetto · 2 minuti
            </span>
            <h3 style={{ fontFamily: "var(--ff-serif)", fontWeight: 400, fontSize: "clamp(24px, 2.4vw, 30px)", lineHeight: 1.2, color: "var(--espresso)", margin: "0 0 8px", textWrap: "balance" }}>
              Raccontami <em style={{ color: "var(--rose-deep)", fontStyle: "italic" }}>chi sei</em> e cosa ti serve.
            </h3>
            <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: "0 0 32px" }}>Tre informazioni e abbiamo iniziato. Tutto il resto lo vediamo insieme in call.</p>

            {sent && (
              <div style={{ padding: "16px 18px", borderRadius: "var(--radius-m)", background: "var(--bg-warm)", color: "var(--espresso)", marginBottom: 24, fontSize: 14 }}>
                Grazie! Ti ricontatto entro 24 ore.
              </div>
            )}

            <FormSection num="i" title="I tuoi contatti">
              <Field label="Nome" required>
                <input type="text" placeholder="Il tuo nome" required style={inputStyle} />
              </Field>
              <Field label="Cellulare" required hint="Ti chiamo io — nessun numero verrà mai condiviso.">
                <div style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 12 }}>
                  <select aria-label="Prefisso" style={{ ...inputStyle, paddingRight: 32, appearance: "none", backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' fill='none' stroke='%238B6F5C' stroke-width='1.4' stroke-linecap='round'/></svg>\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                    <option>+39</option><option>+41</option><option>+33</option><option>+34</option><option>+44</option><option>+1</option>
                  </select>
                  <input type="tel" placeholder="333 123 4567" required style={inputStyle} />
                </div>
              </Field>
              <Field label="Email" required>
                <input type="email" placeholder="tu@email.it" required style={inputStyle} />
              </Field>
            </FormSection>

            <FormSection num="ii" title="Il servizio che ti interessa">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
                {picks.map((p) => {
                  const checked = servizio === p.v;
                  return (
                    <label key={p.v} style={{
                      cursor: "pointer", display: "block", padding: "22px 20px 20px",
                      border: `1px solid ${checked ? "var(--espresso)" : "var(--line)"}`,
                      borderRadius: "var(--radius-m)",
                      background: checked ? "var(--espresso)" : "var(--bg-soft)",
                      color: checked ? "var(--cream)" : undefined,
                      transition: "all 0.2s ease",
                    }}>
                      <input type="radio" name="servizio" value={p.v} checked={checked} onChange={() => setServizio(p.v)} style={{ position: "absolute", opacity: 0, pointerEvents: "none" }} />
                      <div style={{
                        width: 40, height: 40, borderRadius: "50%",
                        background: checked ? "var(--rose)" : "var(--bg-warm)",
                        color: checked ? "var(--cream)" : "var(--cacao-deep)",
                        display: "grid", placeItems: "center", fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: 18, marginBottom: 14,
                      }}>{p.m}</div>
                      <div style={{ fontFamily: "var(--ff-serif)", fontWeight: 400, fontSize: 22, color: checked ? "var(--cream)" : "var(--espresso)", lineHeight: 1.15, marginBottom: 4 }}>{p.t}</div>
                      <div style={{ fontSize: 12.5, color: checked ? "rgba(251,246,241,0.7)" : "var(--ink-soft)", lineHeight: 1.5 }}>{p.d}</div>
                    </label>
                  );
                })}
              </div>
            </FormSection>

            <div style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "18px 20px", border: "1px solid var(--line)", borderRadius: "var(--radius-m)", background: "var(--bg-soft)", margin: "8px 0 28px" }}>
              <input id="priv" type="checkbox" required style={{ marginTop: 3, accentColor: "var(--rose-deep)" }} />
              <label htmlFor="priv" style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>
                Ho letto e accetto la <a href="#" style={{ color: "var(--rose-deep)", textDecoration: "underline" }}>privacy policy</a> e autorizzo il trattamento dei miei dati per essere ricontattata in merito al progetto. Niente newsletter, promesso.
              </label>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid var(--line)", gap: 16, flexWrap: "wrap" }}>
              <p style={{ fontSize: 12, color: "var(--ink-soft)", maxWidth: 240, margin: 0 }}>Inviando il form, ti richiamo entro un giorno lavorativo. Nessun impegno.</p>
              <button type="submit" className="btn btn-primary btn-arrow">Invia richiesta</button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  height: 52, padding: "0 18px", border: "1px solid var(--line)", background: "var(--bg-soft)",
  borderRadius: "var(--radius-m)", fontFamily: "var(--ff-sans)", fontSize: 15, color: "var(--espresso)",
  width: "100%", boxSizing: "border-box",
};

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
      <label style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--cacao-deep)" }}>
        {label} {required && <span style={{ color: "var(--rose-deep)" }}>*</span>}
      </label>
      {children}
      {hint && <span style={{ fontSize: 12, color: "var(--ink-soft)" }}>{hint}</span>}
    </div>
  );
}

function FormSection({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "28px 0", borderTop: "1px solid var(--line)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 22 }}>
        <span style={{ width: 26, height: 26, borderRadius: "50%", border: "1px solid var(--cacao)", color: "var(--cacao)", display: "grid", placeItems: "center", fontFamily: "var(--ff-serif)", fontStyle: "italic", fontSize: 14 }}>{num}</span>
        <h4 style={{ fontSize: 14, fontWeight: 600, color: "var(--espresso)", margin: 0, letterSpacing: "0.02em" }}>{title}</h4>
      </div>
      {children}
    </div>
  );
}
