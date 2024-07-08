// types/index.ts

export const locales = ["en", "es", "fr"];

export const localesLabels = {
  en: "English",
  es: "Spanish",
  fr: "French",
};

export interface Product {
  id: number;
  price: number;
  translations: {
    [locale: string]: {
      name: string;
      description: string;
    };
  };
}
