<script setup lang="ts">
import { reactive } from "vue";
import { type Product, locales } from "~/types";

const emit = defineEmits<{
  (e: "add-product", product: Omit<Product, "id">): void;
}>();

const product = reactive<Omit<Product, "id">>(
  locales.reduce(
    (acc, locale) => {
      acc.translations[locale] = { name: "", description: "" };
      return acc;
    },
    {
      price: 0,
      translations: {},
    }
  )
);

function submitForm() {
  emit("add-product", { ...product });
  product.translations = locales.reduce((acc, locale) => {
    acc[locale] = { name: "", description: "" };
    return acc;
  }, {});
  product.price = 0;
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div v-for="locale in locales" :key="locale">
      <div>{{ locale }}</div>
      <input
        v-model="product.translations[locale].name"
        :placeholder="$t('product.placeholder.name')"
        required
      />
      <textarea
        v-model="product.translations[locale].description"
        :placeholder="$t('product.placeholder.description')"
        required
      ></textarea>
    </div>
      <input
        v-model.number="product.price"
        type="number"
        :placeholder="$t('product.placeholder.price')"
        required
      />
    <button type="submit">{{ $t("product.btn") }}</button>
  </form>
</template>
