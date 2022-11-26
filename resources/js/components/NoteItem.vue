<script setup>
const props = defineProps({
  title: String,
  link: String,
  thumbnail: String,
  description: String,
  date: String,
  time: String,
  diff: String,
})

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ja';

dayjs.extend(relativeTime);
dayjs.locale('ja');
</script>

<template>
  <article class="my-3 grid grid-cols-1 sm:grid-cols-2 border rounded hover:shadow-sm">
    <div v-if="thumbnail.startsWith('http')">
      <a :href="link" target="_blank">
        <img :src="thumbnail" :alt="title" :title="title" class="hover:opacity-80" loading="lazy">
      </a>
    </div>

    <div class="p-3 sm:py-1">
      <time :datetime="`${date}T${time}`" class="text-gray-500">
        {{ date }} ({{ dayjs(`${date} ${time}`).fromNow() }})
      </time>

      <h3 class="my-2 text-2xl">
        <a :href="link" class="text-blue font-bold hover:underline" target="_blank">
          {{ title }}
        </a>
      </h3>

      <div v-html="description" class="prose prose-sm prose-a:text-blue prose-p:text-gray-500"></div>
    </div>
  </article>
</template>
