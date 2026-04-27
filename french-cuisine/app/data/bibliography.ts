export interface Book {
  id: string;
  title: string;
  author: string;
  year: string;
  publisher: string;
  description: string;
}

export interface Website {
  id: string;
  title: string;
  url: string;
  description: string;
}

export interface Media {
  id: string;
  title: string;
  type: string;
  year: string;
  description: string;
}

export const books: Book[] = [
  {
    id: "mastering-art",
    title: "Mastering the Art of French Cooking",
    author: "Julia Child, Simone Beck, Louisette Bertholle",
    year: "1961",
    publisher: "Alfred A. Knopf",
    description: "The definitive guide to French cooking for American audiences, featuring classic techniques and recipes."
  },
  {
    id: "larousse",
    title: "Larousse Gastronomique",
    author: "Prosper Montagné",
    year: "1938",
    publisher: "Larousse",
    description: "The world's most famous culinary encyclopedia, covering French cuisine, techniques, and ingredients."
  },
  {
    id: "escoffier",
    title: "Le Guide Culinaire",
    author: "Auguste Escoffier",
    year: "1903",
    publisher: "Flammarion",
    description: "The foundational text of modern French cuisine, codifying the five mother sauces and classic techniques."
  },
  {
    id: "french-cooking-classics",
    title: "French Cooking Classics",
    author: "Ginette Mathiot",
    year: "1932",
    publisher: "Albin Michel",
    description: "A comprehensive collection of traditional French home cooking recipes loved by generations."
  },
  {
    id: "wine-atlas",
    title: "The World Atlas of Wine",
    author: "Hugh Johnson, Jancis Robinson",
    year: "1971",
    publisher: "Mitchell Beazley",
    description: "An authoritative guide to wine regions of the world, with extensive coverage of French vineyards."
  }
];

export const websites: Website[] = [
  {
    id: "ateliertatin",
    title: "Atelier Tatin",
    url: "https://www.ateliertatin.com",
    description: "Official site of the Tarte Tatin sisters' legacy, featuring the history of this iconic upside-down tart."
  },
  {
    id: "frenchcheese",
    title: "Fromages de France",
    url: "https://www.fromagesdefrance.com",
    description: "The official portal for French cheese, profiling hundreds of AOP and traditional cheeses."
  },
  {
    id: "bordeauxwine",
    title: "Bordeaux Wine Official",
    url: "https://www.bordeaux.com",
    description: "The official website of Bordeaux wines, offering guides to appellations, tastings, and châteaux."
  },
  {
    id: "maisondecampagne",
    title: "Maison de Campagne",
    url: "https://www.maisondecampagne.fr",
    description: "A digital magazine dedicated to French regional cuisine, seasonal ingredients, and rural gastronomy."
  }
];

export const media: Media[] = [
  {
    id: "chefstable",
    title: "Chef's Table: France",
    type: "Netflix Documentary Series",
    year: "2016",
    description: "An intimate look into the lives and kitchens of Michelin-starred French chefs."
  },
  {
    id: "ratatouille-film",
    title: "Ratatouille",
    type: "Animated Film",
    year: "2007",
    description: "Pixar's love letter to French cuisine, celebrating the idea that anyone can cook."
  },
  {
    id: "provence-doc",
    title: "A Taste of Provence",
    type: "BBC Documentary",
    year: "2019",
    description: "A journey through the sun-drenched landscapes and flavors of Provence."
  }
];
