<template>
  <ul>
    <li v-for="item in items" class="my-3">
      <a :href="item.link" class="text-2xl text-blue hover:underline" target="_blank">
        {{ item.title }}
      </a>
      <time class="ml-3 text-gray-500" :datetime="item.date + 'T' + item.time">
        {{ item.date }} ({{ item.diff }})
      </time>
      <div class="w-auto sm:w-1/2 mt-2">
        <a :href="item.link" target="_blank">
          <img :src="item.thumbnail" :alt="item.title" :title="item.title" class="rounded shadow hover:opacity-70">
        </a>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const url = 'https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json'

const items = ref([])

fetch(url).then((response) => response.json()).then((data) => items.value = data)
</script>
