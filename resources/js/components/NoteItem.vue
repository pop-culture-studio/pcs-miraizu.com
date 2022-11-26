<script setup>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ja';

dayjs.extend(relativeTime);
dayjs.locale('ja');

const props = defineProps({
  title: String,
  link: String,
  thumbnail: String,
  date: String,
  time: String,
  diff: String,
  description: String,
})
</script>

<template>
  <article class="my-3 grid grid-cols-1 sm:grid-cols-2 border rounded hover:shadow-sm">
    <div>
      <a :href="link" target="_blank">
        <img :src="thumbnail" loading="lazy" :alt="title" :title="title" class="hover:opacity-80">
      </a>
    </div>

    <div class="p-2 sm:py-0">
      <time class="text-gray-500" :datetime="`${date}T${time}`">
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
