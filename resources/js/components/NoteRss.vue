<template>
  <template v-if="items.length > 0">
    <article v-for="item in items" class="my-3 grid grid-cols-1 sm:grid-cols-2 border rounded hover:shadow-sm">
      <div>
        <a :href="item.link" target="_blank">
          <img :src="item.thumbnail" loading="lazy" :alt="item.title" :title="item.title" class="hover:opacity-80">
        </a>
      </div>

      <div class="p-2 sm:py-0">
        <time class="text-gray-500" :datetime="`${item.date}T${item.time}`">
          {{ item.date }} ({{ dayjs(`${item.date} ${item.time}`).fromNow() }})
        </time>
        <h3 class="my-2 text-2xl">
          <a :href="item.link" class="text-blue font-bold hover:underline" target="_blank">
            {{ item.title }}
          </a>
        </h3>

        <div v-html="item.description" class="prose prose-sm prose-a:text-blue prose-p:text-gray-500"></div>
      </div>
    </article>
  </template>
</template>

<script setup>
import { ref } from 'vue'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ja';

dayjs.extend(relativeTime);
dayjs.locale('ja');

const url = 'https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json'

const items = ref([])

fetch(url).then((res) => res.json()).then((json) => items.value = json)
</script>
