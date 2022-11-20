<template>
  <div>
    <article v-for="item in items" class="my-3 grid grid-cols-1 sm:grid-cols-2 border  rounded hover:shadow-sm">
      <div>
        <a :href="item.link" target="_blank">
          <img :src="item.thumbnail" loading="lazy" :alt="item.title" :title="item.title" class="hover:opacity-80">
        </a>
      </div>

      <div class="p-2 sm:py-0">
        <time class="text-gray-500" :datetime="item.date + 'T' + item.time">
          {{ item.date }} ({{ item.diff }})
        </time>
        <h3 class="my-2 text-2xl">
          <a :href="item.link" class="text-blue hover:underline" target="_blank">
            {{ item.title }}
          </a>
        </h3>

        <div v-html="item.description" class="prose prose-sm prose-a:text-blue prose-p:text-gray-500"></div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const url = 'https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json'

const items = ref([])

fetch(url).then((response) => response.json()).then((data) => items.value = data)
</script>
