<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import MaleHeader from './components/MaleHeader.vue'
import FemaleHeader from './components/FemaleHeader.vue'

const route = useRoute()

const currentHeader = computed(() => {
  if (route.path.startsWith('/Homme')) return 'male'
  if (route.path.startsWith('/Femme')) return 'female'
  return null 
})
</script>

<template>
  <div>
    <MaleHeader v-if="currentHeader === 'male'" />
    <FemaleHeader v-if="currentHeader === 'female'" />

    <router-view />
  </div>
</template>

<style scoped></style>
