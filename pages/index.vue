<script setup lang="ts">
import AddProductForm from "~/components/AddProductForm.vue";
import ProductList from "~/components/ProductList.vue";
import LanguageSwitcher from "~/components/LanguageSwitcher.vue";
import type { Product } from "~/types";

const { $client } = useNuxtApp();

const productsQuery = $client.getProducts.useQuery();

async function handleAddProduct(product: Omit<Product, "id">) {
  try {
    await $client.addProduct.mutate(product);
  } catch (error) {
    console.error(error);
    return;
  }
  productsQuery.refresh().catch(console.error);
}

const products = computed(() => productsQuery.data.value ?? []);

onMounted(() => {
  productsQuery.execute().catch(console.error);
});
</script>

<template>
  <div>
    <h1>Welcome</h1>
    <p>Intro</p>
    <ProductList :products="products" />
    <AddProductForm @add-product="handleAddProduct" />
    <language-switcher />
  </div>
</template>
