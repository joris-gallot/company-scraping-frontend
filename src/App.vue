<script setup>
import { inject, ref } from "vue";
import CompanyCard from "./components/CompanyCard.vue";
import Spinner from "./components/Spinner.vue";

const api = inject("api");
const search = ref("");
const isLoading = ref(false);
const fetched = ref(false);
const companies = ref([]);

const searchCompany = async () => {
  companies.value = [];
  fetched.value = true;
  isLoading.value = true;

  const response = await api.company.search(search.value);

  companies.value = response.data;

  isLoading.value = false;
};
</script>

<template>
  <div class="container mx-auto">
    <div class="flex items-center my-6 space-x-2">
      <input
        type="search"
        v-model="search"
        name="search"
        @keyup.enter="searchCompany"
        placeholder="Search a company"
        class="shadow-sm focus:ring-blue-500 w-64 focus:border-blue-500 block sm:text-sm border-gray-300 rounded-md"
      />

      <button
        type="button"
        @click="searchCompany"
        :disabled="isLoading || !search"
        class="inline-flex items-center px-4 py-2 border disabled:opacity-50 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 disabled:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>

    <div v-if="isLoading" class="flex justify-center w-full"><Spinner /></div>

    <div v-else-if="!companies.length && fetched">No result.</div>

    <div class="space-y-6">
      <CompanyCard
        v-for="(company, i) in companies"
        :key="i"
        v-bind="company"
      />
    </div>
  </div>
</template>
