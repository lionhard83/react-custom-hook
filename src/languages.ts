export const languages = {
  it: {
    title: "Titolo",
  },
  en: {
    title: "Title",
  },
  es: {
    title: "Titoles",
  },
  po: {
    title: "Titoges",
  },
};

export type Languages = keyof typeof languages;
export const allLanguages = Object.keys(languages) as Languages[];
