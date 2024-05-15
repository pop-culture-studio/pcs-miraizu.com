<script setup lang="ts">
import NoteItem from './NoteItem.vue';
import {ref} from 'vue';
import {Item} from '../../types';

const url: string = import.meta.env.VITE_NOTE_URL;
const items = ref<Item[]>([]);

fetch(url).then(res => res.json()).then(json => items.value = json);
</script>

<template>
  <NoteItem v-for="item in items" :key="item.link" v-bind="item"/>
</template>
