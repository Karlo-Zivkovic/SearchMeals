<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 borderd-orange-600 bg-orange-500 hover:bg-orange-600 text-white transition-colors"
  >
    <slot>YouTube</slot>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  href: String
})
</script>
