<script setup>
import { PaperClipIcon } from "@heroicons/vue/solid";
import { defineProps } from "vue";

defineProps({
  name: String,
  description: String,
  address: String,
  siren: String,
});
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
      </dl>
    </div>
  </div>
</template>
