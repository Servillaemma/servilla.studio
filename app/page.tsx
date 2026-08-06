"use client";

import { useEffect, useRef, useState } from "react";

const gallery = [
  ["header-01.jpg", "Superposition de chemise blanche et maille rayée"],
  ["header-02.jpg", "Chemise blanche, mocassins et accessoires sur fourrure brune"],
  ["header-03.png", "Silhouette rouge et accessoires graphiques"],
  ["header-04.png", "Silhouette rouge, denim et sac brun"],
  ["header-05.png", "Sélection rose et bleue sur chaise vintage"],
  ["header-06.png", "Sac Miu Miu et objets du quotidien"],
  ["header-07.jpg", "Chemise bleue et débardeur noir suspendus"],
  ["header-08.png", "Trench beige et cravate en composition éditoriale"],
  ["header-09.png", "Denim, mocassins et accessoires sur chaise"],
  ["header-10.png", "Accessoires dans un sac brun"],
];

const works = [
  {
    title: "Style",
    folder: "style",
  },
  { title: "Illustration", folder: "illustration" },
  { title: "Collaboration", folder: "collaboration" },
  { title: "Collection digitale", folder: "digital" },
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

function BrandingGallery() {
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const brands = [
    ["koya.png", "Brand board Koya Paris"],
    ["augustine.png", "Brand board Augustine"],
    ["belvare.png", "Brand board Belvare"],
  ];

  return (
    <div className="branding-boards" data-active={activeBrand ? "true" : "false"} aria-label="Trois projets de branding">
      {brands.map(([image, label]) => {
        const isActive = activeBrand === image;
        return (
          <button
            className={`brand${isActive ? " is-active" : ""}${activeBrand && !isActive ? " is-muted" : ""}`}
            key={image}
            type="button"
            aria-label={`${isActive ? "Réduire" : "Agrandir"} ${label}`}
            aria-pressed={isActive}
            onClick={() => setActiveBrand(isActive ? null : image)}
          >
            <img src={`/sections/branding/${image}`} alt={label} loading="lazy" />
          </button>
        );
      })}
    </div>
  );
}

function DigitalCollection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const boardImages = [
    ["architecture-angular.jpeg", "digital-arch arch-one", "Architecture déconstructiviste angulaire"],
    ["architecture-hadid.jpeg", "digital-arch arch-two", "Architecture courbe de Zaha Hadid"],
    ["architecture-pavilion.jpg", "digital-arch arch-three", "Pavillon moderniste au bord de l'eau"],
    ["architecture-modern.png", "digital-arch arch-four", "Architecture moderniste géométrique"],
    ["look-feature.png", "digital-look look-feature", "Silhouette digitale principale"],
    ["look-detail-dark.png", "digital-look look-detail-one", "Détail de col sombre"],
    ["look-detail-boots.png", "digital-look look-detail-two", "Détail des bottes"],
    ["look-main.png", "digital-look look-thumb-one", "Silhouette digitale bleu et rouge"],
    ["look-boots.png", "digital-look look-thumb-two", "Détail de la silhouette et des bottes"],
    ["look-beige.png", "digital-look look-thumb-three", "Silhouette digitale beige"],
    ["look-volume.png", "digital-look look-volume", "Silhouette digitale sculpturale"],
    ["look-portrait.jpg", "digital-look look-portrait", "Portrait de la silhouette digitale"],
  ];

  const imageButton = (image: string, className: string, alt: string) => {
    const isActive = activeImage === image;
    return (
      <button
        className={`digital-zoom-image ${className}${isActive ? " is-active" : ""}${activeImage && !isActive ? " is-muted" : ""}`}
        key={image}
        type="button"
        aria-label={`${isActive ? "Réduire" : "Agrandir"} ${alt}`}
        aria-pressed={isActive}
        onClick={() => setActiveImage(isActive ? null : image)}
      >
        <img src={`/sections/digital/${image}`} alt={alt} loading="lazy" />
      </button>
    );
  };

  return (
    <div className="digital-design">
      <section className="designed-section digital-board">
        <h3>Collection digitale</h3>
        <div className="digital-title"><strong>Collection signature</strong><span>Collection digitale</span></div>
        <div className="digital-signature"><b>by</b><span>re<br />b<span>e</span><sub>1</sub></span></div>
        {boardImages.slice(0, 2).map(([image, className, alt]) => imageButton(image, className, alt))}
        <p className="digital-copy">Inspirée par les codes de l'architecture minimaliste et déconstructiviste, cette collection réinterprète le vêtement comme un espace à construire. Les silhouettes jouent sur les contrastes entre rigueur géométrique et déséquilibre maîtrisé, créant une esthétique à la fois architecturale et fonctionnelle.</p>
        {boardImages.slice(2, 10).map(([image, className, alt]) => imageButton(image, className, alt))}
        <div className="digital-volume" aria-label="vol...me">
          <span>vol</span>
          <span className="volume-dots" aria-hidden="true"><i /><i /><i /></span>
          <span>me</span>
        </div>
        {boardImages.slice(10).map(([image, className, alt]) => imageButton(image, className, alt))}
      </section>

      <section className="digital-opening" aria-label="Présentation de la collection digitale">
        {imageButton("look-group.png", "digital-opening-group", "Quatre silhouettes de la collection digitale")}
      </section>
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

  if (type === "digital") {
    return <DigitalCollection />;
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
      <BrandingGallery />
      <p className="branding-copy">Chaque projet de branding est développé à partir d'une réflexion stratégique sur l'identité de la marque. De la recherche d'inspirations à la définition de l'univers visuel, chaque élément est pensé pour traduire son ADN avec cohérence et créer une identité forte et distinctive.</p>
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
            <a
              className="about-link"
              href="/a-propos"
              onClick={(event) => {
                event.preventDefault();
                window.location.assign("/a-propos");
              }}
            >
              Voir plus
            </a>
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
                      <span className="arrow" aria-hidden="true" />
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
