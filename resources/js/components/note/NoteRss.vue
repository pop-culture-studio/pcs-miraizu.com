<script setup>
const url = import.meta.env.VITE_NOTE_URL

import NoteItem from './NoteItem.vue'
import { ref } from 'vue'

const items = ref([])

fetch(url).then(res => res.json()).then(json => items.value = json)
</script>

<template>
  <NoteItem v-for="item in items" :key="item.link" v-bind="item" />
</template>
