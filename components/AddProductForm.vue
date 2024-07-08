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
  <form @submit.prevent="submitForm" class="mt-8 space-y-6 bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold text-gray-700">{{ $t('product.title') }}</h2>
    <div v-for="locale in locales" :key="locale" class="space-y-4">
      <div class="font-semibold text-gray-700">{{ localesLabels[locale] }}</div>
      <div>
        <label class="block text-sm font-medium text-gray-600">{{ $t('product.placeholder.name') }}</label>
        <input
          v-model="product.translations[locale].name"
          class="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-200 focus:border-blue-500"
          required
        />
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-600">{{ $t('product.placeholder.description') }}</label>
        <textarea
          v-model="product.translations[locale].description"
          class="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-200 focus:border-blue-500"
          required
        ></textarea>
      </div>
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-600">{{ $t('product.placeholder.price') }}</label>
      <input
        v-model.number="product.price"
        type="number"
        class="w-full p-2 border border-gray-300 rounded mt-1 focus:ring focus:ring-blue-200 focus:border-blue-500"
        required
      />
    </div>
    <button type="submit" class="w-full py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700">
      {{ $t("product.btn") }}
    </button>
  </form>
</template>
