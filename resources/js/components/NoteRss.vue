<template>
  <ul>
    <li v-for="item in items">
      <a :href="item.link" class="text-2xl text-blue hover:underline" target="_blank">
        {{ item.title }}
      </a>
      <span class="ml-3 text-gray-500">{{ item.date }}</span>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const url = 'https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json'

const items = ref([])

fetch(url).then((response) => response.json()).then((data) => items.value = data)
</script>
