<script setup lang="ts">
import { reactive } from "vue";
import { type Product, locales, localesLabels } from "~/types";

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
      price: null,
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
  product.price = null;
}
</script>

<template>
  <form @submit.prevent="submitForm" class="mt-4 space-y-4 bg-gray-400 p-4 rounded">
    <div v-for="locale in locales" :key="locale">
      <div class="font-semibold">{{ localesLabels[locale] }}</div>
      <div :key="locale" class="flex space-x-1">
        <input
          v-model="product.translations[locale].name"
          :placeholder="$t('product.placeholder.name')"
          class="w-full p-2 border rounded"
          required
        />
        <textarea
          v-model="product.translations[locale].description"
          :placeholder="$t('product.placeholder.description')"
          class="w-full p-2 border rounded"
          required
        ></textarea>
      </div>
    </div>
    <div>
      <input
        v-model.number="product.price"
        type="number"
        :placeholder="$t('product.placeholder.price')"
        class="w-full p-2 border rounded"
        required
      />
    </div>
    <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded">
      {{ $t("product.btn") }}
    </button>
  </form>
</template>
