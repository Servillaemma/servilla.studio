const gallery = [
  ["editorial-hanger-stripes.jpg", "Superposition de chemise blanche et maille rayée"],
  ["editorial-flatlay.jpg", "Silhouette blanche et accessoires sur une peau brune"],
  ["editorial-red.png", "Silhouette rouge et accessoires graphiques"],
  ["editorial-look.png", "Silhouette rouge, denim et sac brun"],
  ["editorial-chair-pink.png", "Sélection rose et bleue sur chaise vintage"],
  ["editorial-bag.png", "Sac Miu Miu et objets du quotidien"],
  ["editorial-hanger-blue.jpg", "Chemise bleue et débardeur noir suspendus"],
  ["editorial-coat.png", "Trench beige et cravate en composition éditoriale"],
  ["editorial-chair-denim.png", "Denim, mocassins et accessoires sur chaise"],
  ["editorial-bag.png", "Accessoires dans un sac brun"],
];

const works = [
  {
    title: "Style",
    folder: "style",
    images: ["cover.png", "01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.jpg", "08.jpg", "09.jpg"],
  },
  { title: "Illustration", folder: "illustration", images: ["cover.png", "01.png", "02.png", "03.png", "04.png"] },
  { title: "Collaboration", folder: "collaboration", images: ["cover.png", "01.png", "02.png"] },
  { title: "Collection digitale", folder: null, images: [] },
  { title: "Analyse des tendances", folder: "trends", images: ["cover.png", "01.png", "02.png", "03.png"] },
  { title: "Branding", folder: "branding", images: ["cover.png", "01.png", "02.png", "03.png"] },
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <a className="gallery-link" href="#galerie">Galerie</a>

        <div className="hero-title-wrap">
          <p className="eyebrow">Direction artistique &amp; image</p>
          <h1 id="hero-title">Editorial<br />by Emma<br />Servilla</h1>
        </div>

        <figure className="portrait-card">
          <img src="/images/emma-servilla.jpg" alt="Portrait en noir et blanc d’Emma Servilla" />
          <figcaption>
            <span>basée à Paris</span>
            <a href="#works">Voir plus</a>
          </figcaption>
        </figure>

        <div className="gallery-strip" id="galerie" aria-label="Galerie de projets éditoriaux">
          {gallery.map(([src, alt], index) => (
            <figure className="gallery-item" key={`${src}-${index}`}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <img src={`/images/${src}`} alt={alt} />
            </figure>
          ))}
        </div>
      </section>

      <section className="works-section" id="works" aria-labelledby="works-title">
        <p className="manifesto">
          Chaque projet est pour moi l’occasion de transformer une idée ou un produit cohérent, en explorant
          l’équilibre entre créativité, identité de marque et faisabilité. À travers mes recherches de tendances,
          de matières, de couleurs et de silhouettes, je développe des collections pensées dans leur globalité,
          où chaque détail contribue à raconter une histoire. Mon approche privilégie la justesse du détail,
          l’équilibre des proportions et la force d’une identité, avec la volonté de créer des produits à la fois
          désirables, durables et porteurs de sens.
        </p>

        <h2 id="works-title">Works</h2>

        <ol className="work-list">
          {works.map((work, index) => (
            <li key={work.title} id={`work-${index + 1}`}>
              {work.folder ? (
                <details>
                  <summary>
                    <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{work.title}</strong>
                    <span className="work-action" aria-label={`Afficher les projets : ${work.title}`}>
                      <span className="arrow" aria-hidden="true">↗</span>
                      <span className="view-more">View more</span>
                    </span>
                  </summary>
                  <div className={`project-expansion project-${work.folder}`}>
                    {work.images.map((image, imageIndex) => (
                      <figure className={imageIndex === 0 ? "project-cover" : ""} key={image}>
                        <img
                          src={`/sections/${work.folder}/${image}`}
                          alt={`${work.title} — visuel ${imageIndex + 1}`}
                          loading="lazy"
                        />
                      </figure>
                    ))}
                  </div>
                </details>
              ) : (
                <div className="work-row work-disabled" aria-label="Collection digitale — section indisponible">
                  <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
                  <strong>{work.title}</strong>
                  <span className="coming-soon">À venir</span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

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
