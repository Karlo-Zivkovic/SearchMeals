<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup lang="ts">
import {  onMounted, ref } from 'vue'
import Meals from '../components/Meals.vue'
import axiosClient from '../axiosClient.js'
import type { Meal } from '@/types'

const meals = ref<Meal[]>([])

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    axiosClient
      .get(`random.php`)
      .then(({ data }: { data: { meals: Meal[] } }) => meals.value.push(data.meals[0]))
  }
})
</script>
