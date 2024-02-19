<template>
  <div class="max-w-[800px] mx-auto p-8" v-if="meal">
    <h1 class="text-5xl font-bold mb-5">{{ meal?.strMeal }}</h1>
    <img :src="meal?.strMealThumb" :alt="meal?.strMeal" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div><strong class="font-bold">Category:</strong> {{ meal?.strCategory }}</div>
      <div><strong class="font-bold">Area:</strong> {{ meal?.strArea }}</div>
      <div v-if="meal.strTags"><strong class="font-bold">Tags:</strong> {{ meal?.strTags }}</div>
    </div>

    <div class="my-3">
      {{ meal?.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(_, index) of new Array(20)">
            <li v-if="isValidIngredient(meal[`strIngredient${index + 1}` as keyof Meal])">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}` as keyof Meal] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(_, index) of new Array(20)">
            <li v-if="isValidIngredient(meal[`strMeasure${index + 1}` as keyof Meal])">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}` as keyof Meal] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div class="mt-6">
      <YoutubeButton :href="meal?.strYoutube">YouTube</YoutubeButton>
      <a
        :href="meal?.strSource"
        target="_blank"
        class="ml-3 px-3 py-2 rounded text-indigo-600 transition-colors"
      >
        View Original Source
      </a>
    </div>
  </div>
  <div v-else class="text-center text-gray-600 p-8">Loading...</div>
</template>

<script setup lang="ts">
import axiosClient from '@/axiosClient'
import type { Meal } from '@/types'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import YoutubeButton from '../components/YoutubeButton.vue'

const route = useRoute()
const meal = ref<Meal | null>(null)

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || null
  })
})

const isValidIngredient = (ingredient: string | null) => ingredient && ingredient.trim() !== ''
</script>
