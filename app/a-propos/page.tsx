import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos — Emma Servilla",
  description: "Parcours, expériences et compétences d’Emma Servilla, styliste et directrice artistique.",
};

const experiences = [
  { role: "Conseillère de vente (PVT)", company: "Browns Shoes", place: "Toronto, Canada", date: "2025-2026" },
  { role: "Assistante Styliste-Modéliste", company: "Oud Paris", place: "Paris, France", date: "2023-2024" },
  { role: "Assistante Styliste-Modéliste", company: "Nine Worths", place: "Toulouse, France", date: "2021-2022" },
];

const education = [
  { degree: "Formation anglais", school: "CES Schools", place: "Toronto, Canada", detail: "", date: "2025" },
  { degree: "Mastère direction artistique et management de collection (Option Digital)", school: "MOD’ART International", place: "Paris, France", detail: "RNCP Level 7", date: "2022-2024" },
  { degree: "Bachelor design de mode", school: "MJM Graphic Design", place: "Toulouse, France", detail: "RNCP Level 5", date: "2022-2024" },
];

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-nav">
        <a href="/" aria-label="Retour à la page d’accueil">Emma Servilla</a>
        <a href="/#works">Works</a>
      </header>

      <div className="about-layout">
        <aside className="about-portrait-wrap">
          <img className="about-portrait" src="/images/about-emma.png" alt="Portrait en noir et blanc d’Emma Servilla" />
        </aside>

        <div className="about-content">
          <section className="about-intro" aria-labelledby="about-hello">
            <h1 id="about-hello">hello”</h1>
            <p className="scroll-note">Scroll to discover</p>
            <div className="about-block">
              <h2>About me</h2>
              <p>Styliste diplômée d’un Mastère spécialisé en développement produit et conception de collections. Sensible aux tendances, aux matières et aux couleurs, je maîtrise les différentes étapes du processus créatif, du brief au lancement.<br />De retour à Paris, je souhaite aujourd’hui contribuer au développement de collections au sein d’une maison de mode à forte identité.</p>
            </div>
          </section>

          <section className="about-block" aria-labelledby="experiences-title">
            <h2 id="experiences-title">Experiences</h2>
            <div className="about-list">
              {experiences.map((item) => (
                <article className="about-entry" key={`${item.company}-${item.date}`}>
                  <div><p>{item.role}</p><em>{item.company}</em><p>{item.place}</p></div>
                  <time>{item.date}</time>
                </article>
              ))}
            </div>
          </section>

          <section className="about-block" aria-labelledby="education-title">
            <h2 id="education-title">Education</h2>
            <div className="about-list">
              {education.map((item) => (
                <article className="about-entry" key={`${item.school}-${item.date}`}>
                  <div><p className="degree">{item.degree}</p><em>{item.school}</em><p>{item.place}</p>{item.detail && <strong>{item.detail}</strong>}</div>
                  <time>{item.date}</time>
                </article>
              ))}
            </div>
          </section>

          <section className="about-skills" aria-label="Compétences et logiciels">
            <div className="about-block">
              <h2>Fashion skills</h2>
              <ul>
                <li>Développement produit (brief → lancement)</li>
                <li>Tech Packs &amp; dessins techniques (flats)</li>
                <li>Spécifications produit</li>
                <li>Suivi qualité &amp; production</li>
                <li>Recherche tendances</li>
                <li>Gammes couleurs &amp; matières</li>
                <li>Line sheets &amp; supports commerciaux</li>
              </ul>
            </div>
            <div className="about-block software-block">
              <h2>Softwares</h2>
              <p>Illustrator<br />InDesign<br />Photoshop<br />Style 3D<br />Blender<br />PackOffice</p>
            </div>
          </section>

          <section className="international-block">
            <h2>L’expérience à l’international</h2>
            <p>Chaque expérience façonne un regard. Mon année au Canada a enrichi le mien en m’offrant une perspective internationale sur la création, le produit et les dynamiques du secteur. Une immersion dans une nouvelle culture, une autre manière de penser et de créer. Cette parenthèse internationale a nourri ma curiosité, élargi ma perception du design et renforcé ma capacité à évoluer dans des environnements exigeants et multiculturels. Confrontée à de nouveaux codes, j’ai appris à allier adaptabilité, rigueur et ouverture d’esprit. Cette expérience confirme aujourd’hui mon ambition de contribuer à des projets où créativité, innovation et excellence dialoguent avec sens.</p>
          </section>
        </div>
      </div>

      <footer>
        <p>Emma Servilla — Paris</p>
        <nav aria-label="Réseaux sociaux">
          <a href="https://www.instagram.com/emmaservilla/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://ca.linkedin.com/in/emma-servilla-325027213" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </nav>
      </footer>
    </main>
  );
}
