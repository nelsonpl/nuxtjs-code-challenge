export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
      intro: "List of products",
      product: {
        title: "Add product",
        placeholder: {
          name: "Product name",
          price: "Product price",
          description: "Product description",
        },
        btn: "Add product",
      },
    },
    fr: {
      welcome: "Bienvenue",
      intro: "Liste des produits",
      product: {
        title: "Ajouter un produit",
        placeholder: {
          name: "Nom du produit",
          price: "Prix du produit",
          description: "Description du produit",
        },
        btn: "Ajouter un produit",
      },
    },
    es: {
      welcome: "Bienvenido",
      intro: "Lista de productos",
      product: {
        title: "Añadir producto",
        placeholder: {
          name: "Nombre del producto",
          price: "Precio del producto",
          description: "Descripción del producto",
        },
        btn: "Añadir producto",
      },
    },
  },
}));
