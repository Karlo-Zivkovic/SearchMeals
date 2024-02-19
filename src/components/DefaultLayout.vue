<template>
  <div class="bg-gray-100 h-full">
    <Navbar />
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
</script>
