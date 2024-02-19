<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{ name: 'mealDetails', params: { id: meal?.idMeal } }">
      <img
        :src="meal?.strMealThumb"
        class="rounded-t-xl w-full h-48 object-cover"
        :alt="meal?.strMeal"
      />
    </router-link>
    <div class="p-3">
      <h3 class="font-bold">{{ meal?.strMeal }}</h3>
      <p class="mb-4">
        {{ truncateWords(meal?.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <YoutubeButton :href="meal?.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import YoutubeButton from '../components/YoutubeButton.vue'
import { truncateWords } from '@/filters'
const { meal } = defineProps({
  meal: Object
})
</script>
