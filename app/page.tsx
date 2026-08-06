"use client";

import { useEffect, useRef, useState } from "react";

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
  },
  { title: "Illustration", folder: "illustration" },
  { title: "Collaboration", folder: "collaboration" },
  { title: "Collection digitale", folder: null },
  { title: "Analyse des tendances", folder: "trends" },
  { title: "Branding", folder: "branding" },
];

function StyleMotionCarousel() {
  const focusTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const images = [
    "01.png", "02.png", "03.png", "04.png", "05.png",
    "06.jpg", "07.jpg", "08.png", "09.png",
  ];

  useEffect(() => () => {
    if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
  }, []);

  const featureImage = (image: string) => {
    if (focusTimerRef.current) clearTimeout(focusTimerRef.current);
    setFeaturedImage(image);
    focusTimerRef.current = setTimeout(() => setFeaturedImage(null), 3000);
  };

  return (
    <div className="style-motion">
      {images.map((image, index) => (
        <button className="style-motion-card" key={image} type="button" onClick={() => featureImage(image)} aria-label={`Agrandir la composition de style ${index + 1} pendant trois secondes`}>
          <div className="style-motion-drift">
            <img src={`/sections/style/${image}`} alt={`Composition de style ${index + 1}`} loading="lazy" />
          </div>
        </button>
      ))}
      {featuredImage && (
        <button className="style-featured" type="button" onClick={() => setFeaturedImage(null)} aria-label="Fermer l’image agrandie">
          <img src={`/sections/style/${featuredImage}`} alt="Composition de style agrandie" />
        </button>
      )}
    </div>
  );
}

function ProjectSection({ type }: { type: string }) {
  if (type === "style") {
    return (
      <div className="designed-section style-design">
        <h3>Style</h3>
        <StyleMotionCarousel />
      </div>
    );
  }

  if (type === "illustration") {
    return (
      <div className="designed-section illustration-design">
        <h3>Illustration</h3>
        <div className="illustration-grid">
          {["01.png", "02.png", "03.png", "04.png"].map((image, index) => (
            <img key={image} src={`/sections/illustration/${image}`} alt={`Illustration de silhouette ${index + 1}`} loading="lazy" />
          ))}
        </div>
        <div className="draw-statement" aria-label="What I Draw"><span>What</span><span className="draw-i" aria-hidden="true">I</span><span>Draw</span></div>
        <p>Nourrie par l’architecture contemporaine, mes illustrations digitales explorent le dialogue entre structure, matière et mouvement. J’y transpose les lignes, volumes et les contrastes des espaces architecturaux afin de créer des compositions où la rigueur formelle rencontre une approche plus sensible et intuitive.</p>
      </div>
    );
  }

  if (type === "collaboration") {
    return (
      <div className="designed-section collaboration-design">
        <h3>Collaboration</h3>
        <div className="collab-copy">
          <h4>Loewe / Aesop</h4>
          <p className="concept">Concept fictif</p>
          <p>Entre Artisanat du Cuir et Botanique Sensorielle, LOEWE et AÉSOP réinventent le mythique sac PUZZLE à travers le prisme de la nature et du savoir-faire intemporel. Cette pièce d’exception fusionne l’excellence de la maroquinerie espagnole et la philosophie de soin holistique de la célèbre marque australienne.</p>
          <p>Plus qu’un accessoire, cette pièce de collection s’adresse aux connaisseurs en quête d’un objet d’art de vivre. Elle incarne une vision partagée du luxe, où la beauté des matières rencontre la poésie du monde naturel, dans une approche holistique et intemporelle.</p>
        </div>
        <div className="collab-visual">
          <img className="collab-scene" src="/sections/collaboration/01.png" alt="Concept Loewe et Aesop dans un intérieur botanique" loading="lazy" />
        </div>
      </div>
    );
  }

  if (type === "trends") {
    return (
      <div className="designed-section trends-design">
        <h3>Analyses des tendances</h3>
        <div className="trends-copy">
          <p>À travers mes analyses tendances, j’explore les évolutions stylistiques, les influences culturelles et les éléments clés qui façonnent les collections contemporaines. Chaque recherche est une réflexion autour des silhouettes, des détails, des matières et des codes esthétiques qui construisent l’identité d’une tendance.</p>
          <p>Cette démarche me permet de décrypter les inspirations émergentes, d’analyser leur potentiel créatif et de comprendre comment elles peuvent être réinterprétées dans une approche plus actuelle et durable.</p>
          <p>Cette approche combine veille créative, analyse stylistique et réflexion produit afin de traduire les influences actuelles en propositions cohérentes, sensibles et adaptées à l’identité d’une marque.</p>
        </div>
        <div className="trends-visual" aria-label="Trois analyses de tendances mode">
          <figure className="trend-board deer"><img src="/sections/trends/01.png" alt="Analyse de tendance Deer Print" loading="lazy" /></figure>
          <figure className="trend-board stirrup"><img src="/sections/trends/03.png" alt="Analyse de tendance Stirrup Pant" loading="lazy" /></figure>
          <figure className="trend-board high-neck"><img src="/sections/trends/02.png" alt="Analyse de tendance High Necked" loading="lazy" /></figure>
        </div>
      </div>
    );
  }

  return (
    <div className="designed-section branding-design">
      <h3>Branding</h3>
      <figure className="brand brand-koya"><img src="/sections/branding/01.png" alt="Brand board Koya Paris" loading="lazy" /><figcaption>Une identité organique, responsable et chaleureuse, pensée autour de la proximité et de la transparence.</figcaption></figure>
      <figure className="brand brand-belvare"><figcaption>Un univers solaire et balnéaire porté par une palette vive, joyeuse et inclusive.</figcaption><img src="/sections/branding/02.png" alt="Brand board Belvare" loading="lazy" /></figure>
      <figure className="brand brand-augustine"><figcaption>Une direction colorée, expressive et contemporaine, construite autour d’une typographie forte.</figcaption><img src="/sections/branding/03.png" alt="Brand board Augustine" loading="lazy" /></figure>
    </div>
  );
}

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
                  <div className="project-expansion">
                    <ProjectSection type={work.folder} />
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
