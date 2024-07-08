import { z } from "zod";
import { publicProcedure, router } from "../trpc";
import { Product, locales } from "~/types";

const productsDb: Product[] = [
  {
    id: 1 as unknown as number,
    price: 10,
    translations: {
      en: {
        name: "Product 1",
        description: "This is product 1",
      },
      es: {
        name: "Producto 1",
        description: "Este es el producto 1",
      },
      fr: {
        name: "Produit 1",
        description: "C'est le produit 1",
      },
    },
  },
  {
    id: 2 as unknown as number,
    price: 20,
    translations: {
      en: {
        name: "Product 2",
        description: "This is product 2",
      },
      es: {
        name: "Producto 2",
        description: "Este es el producto 2",
      },
      fr: {
        name: "Produit 2",
        description: "C'est le produit 2",
      },
    },
  },
  {
    id: 3 as unknown as number,
    price: 30,
    translations: {
      en: {
        name: "Product 3",
        description: "This is product 3",
      },
      es: {
        name: "Producto 3",
        description: "Este es el producto 3",
      },
      fr: {
        name: "Produit 3",
        description: "C'est le produit 3",
      },
    },
  },
];

const translationSchema = locales.reduce((acc, locale) => {
  return {
    ...acc,
    [locale]: z.object({
      name: z.string(),
      description: z.string(),
    }),
  };
}, {});

export const appRouter = router({
  getProducts: publicProcedure.query(() => {
    return productsDb;
  }),
  addProduct: publicProcedure
    .input(
      z.object({
        price: z.number(),
        translations: z.object(translationSchema),
      })
    )
    .mutation(({ input }) => {
      const newProduct = {
        id: productsDb.length + 1,
        ...input,
      };
      productsDb.push(newProduct);
      return newProduct;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
