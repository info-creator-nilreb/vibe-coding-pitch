/** Lokale Bilder: Dateien in public/images/ ablegen (hero.jpg, problem.jpg, …), dann hier true. */
const USE_LOCAL_IMAGES = false;
const local = (name: string) => `/images/${name}`;

const U = "https://images.unsplash.com/photo-";
const Q = "?auto=format&fit=crop&w=1600&q=85";
const QHalf = "?auto=format&fit=crop&w=800&q=85";

const remote = {
  hero: `${U}1497366811353-6870744d04b2${Q}`,
  problem: `${U}1454165804606-c3d57bc86b40${Q}`,
  process: `${U}1551288049-bebda4e38f71${Q}`,
  impact: `${U}1560472354-b33ff0c44a43${Q}`,
  contact: `${U}1522071820081-009c5c0a4907${Q}`,
} as const;

export const editorialImages = USE_LOCAL_IMAGES
  ? {
      hero: local("hero.jpg"),
      problem: local("problem.jpg"),
      problemLeft: local("problem.jpg"),
      problemRight: local("impact.jpg"),
      process: local("process.jpg"),
      impact: local("impact.jpg"),
      contact: local("contact.jpg"),
      contactLeft: local("contact.jpg"),
      contactRight: local("hero.jpg"),
    }
  : {
      hero: remote.hero,
      problem: remote.problem,
      problemLeft: `${U}1454165804606-c3d57bc86b40${QHalf}`,
      problemRight: `${U}1560472354-b33ff0c44a43${QHalf}`,
      process: remote.process,
      impact: remote.impact,
      contact: remote.contact,
      contactLeft: `${U}1522071820081-009c5c0a4907${QHalf}`,
      contactRight: `${U}1497366811353-6870744d04b2${QHalf}`,
    };
