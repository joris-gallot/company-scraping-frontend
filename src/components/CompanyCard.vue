<script setup>
import { defineProps, inject, ref } from "vue";

const api = inject("api");
const isLoading = ref(false);
const fetched = ref(false);
const company = ref();
const error = ref();

const props = defineProps({
  name: String,
  description: String,
  address: String,
  siren: String,
  slug: String,
});

const getCompanyDetails = async () => {
  isLoading.value = true;
  fetched.value = true;

  const response = await api.company.getDetails(props.slug).catch((e) => {
    error.value = "Error while fetching company details";
  });

  if (response) {
    company.value = response.data;
  }

  isLoading.value = false;
};
</script>

<template>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg max-w-3xl">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        {{ name }}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        {{ description }}
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Location</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ address }}
          </dd>
        </div>
        <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Siren</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ siren }}
          </dd>
        </div>

        <template v-if="company">
          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Category</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ company.categorie }}
            </dd>
          </div>

          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">RCS number</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ company.rcsNum }}
            </dd>
          </div>

          <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm font-medium text-gray-500">Creation date</dt>
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {{ company.createdAt }}
            </dd>
          </div>
        </template>
      </dl>
    </div>

    <div v-if="isLoading" class="flex justify-center py-4 w-full">
      <Spinner />
    </div>

    <p class="p-4 text-sm text-red-500" v-if="error">
      {{ error }}
    </p>

    <div class="p-4" v-if="!fetched">
      <button
        type="button"
        @click="getCompanyDetails"
        :disabled="isLoading"
        class="inline-flex items-center px-4 py-2 border disabled:opacity-50 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 disabled:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        More details
      </button>
    </div>
  </div>
</template>
