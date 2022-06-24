<script setup>
import { Head } from '@inertiajs/inertia-vue3'
import AppMessage from '@/components/AppMessage.vue'
import AppButtonLink from '@/components/AppButtonLink.vue'

defineProps({
  title: String,
})
</script>

<template>
  <Head :title="title" />

  <nav class="mb-5">
    <AppButtonLink icon="pi pi-home" label="Beranda" href="/" />
  </nav>

  <main>
    <AppMessage />

    <slot />
  </main>
</template>
