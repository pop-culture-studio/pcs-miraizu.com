<script setup>
import NoteTime from './NoteTime.vue'

const props = defineProps({
  link: String,
  date: String,
  time: String,
  title: String,
  thumbnail: String,
  description: String,
})
</script>

<template>
  <article class="my-3 grid grid-cols-1 sm:grid-cols-2 border rounded hover:shadow-sm">
    <div v-if="thumbnail.startsWith('http')">
      <a :href="link" target="_blank">
        <img :src="thumbnail" :alt="title" :title="title" class="hover:opacity-80" loading="lazy">
      </a>
    </div>

    <div class="p-3 sm:py-1">
      <NoteTime :date="date" :time="time"></NoteTime>

      <h3 class="my-2 text-2xl">
        <a :href="link" class="text-blue font-bold hover:underline" target="_blank">
          {{ title }}
        </a>
      </h3>

      <div v-html="description" class="prose prose-sm prose-a:text-blue prose-p:text-gray-500"></div>
    </div>
  </article>
</template>
