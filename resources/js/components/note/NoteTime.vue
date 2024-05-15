<script setup lang="ts">
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/ja';

defineProps<{
  date: string,
  time: string,
}>();

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale('ja');
</script>

<template>
  <time :datetime="dayjs(`${date} ${time}`).format()">
    {{ dayjs(date).format('LL') }} ({{ dayjs(`${date} ${time}`).fromNow() }})
  </time>
</template>
