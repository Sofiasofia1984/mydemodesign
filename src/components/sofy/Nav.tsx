import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/sofy-logo.png.asset.json";


type NavItem = { to: string; label: string };
const items: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/concept", label: "I miei concept" },
  { to: "/chi-sono", label: "Chi sono" },
  { to: "/prenotazione", label: "Prenotazione" },
];

export function Nav({ active }: { active: NavItem["to"] }) {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand" aria-label="Sofy Web Design — home">
          <img src={logoAsset.url} alt="Sofy Web Design" className="brand-logo" width={140} height={140} />
        </Link>
        <nav className="nav-links">

          {items.map((it) => (
            <Link key={it.to} to={it.to} className={active === it.to ? "active" : ""}>
              {it.label}
            </Link>
          ))}
        </nav>
        <Link to="/prenotazione" className="btn btn-primary">Richiedi preventivo</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand brand-footer" aria-label="Sofy Web Design — home">
              <img src={logoAsset.url} alt="Sofy Web Design" className="brand-logo brand-logo-footer" width={160} height={160} loading="lazy" />
            </Link>

            <p className="body" style={{ color: "rgba(251,246,241,0.7)", marginTop: 18, maxWidth: 320 }}>
              Siti WordPress moderni, curati, pensati per portare vendite e prenotazioni reali. Made with care from Italy.
            </p>
          </div>
          <div>
            <h4>Esplora</h4>
            <ul>
              {items.map((it) => (
                <li key={it.to}><Link to={it.to}>{it.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Servizi</h4>
            <ul>
              <li>Blog moderno</li>
              <li>E-commerce</li>
              <li>Sito professioniste</li>
              <li>Manutenzione</li>
            </ul>
          </div>
          <div>
            <h4>Contatti</h4>
            <ul>
              <li><a href="mailto:sofisofi10123@gmail.com">sofisofi10123@gmail.com</a></li>
              <li><a href="tel:+393501646712">+39 350 164 6712</a></li>
              <li>Instagram · @sofywebdesign</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sofy Web Design — P.IVA __________</span>
          <span>Privacy · Cookie · Termini</span>
        </div>
      </div>
    </footer>
  );
}
