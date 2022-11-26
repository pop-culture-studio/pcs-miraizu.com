<script setup>
const url = 'https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json'

import NoteItem from './NoteItem.vue'
import { ref } from 'vue'

const items = ref([])

fetch(url).then(res => res.json()).then(json => items.value = json)
</script>

<template>
  <NoteItem v-for="item in items" v-bind="item"></NoteItem>
</template>
