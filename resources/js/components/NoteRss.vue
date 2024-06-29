<script setup lang="ts">
import NoteItem from './NoteItem.vue';
import {ref, onMounted} from 'vue';
import type {Item} from '../types';

const url: string = import.meta.env.VITE_NOTE_URL;
const items = ref<Item[]>([]);

onMounted(async () => {
  const res = await fetch(url);
  items.value = await res.json();
})
</script>

<template>
  <NoteItem v-for="item in items" :key="item.link" v-bind="item"/>
</template>
