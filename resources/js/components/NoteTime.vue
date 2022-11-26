<script setup>
const props = defineProps({
  date: String,
  time: String,
})

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ja'

dayjs.extend(relativeTime)
dayjs.locale('ja')
</script>

<template>
  <time :datetime="`${date}T${time}`" class="text-gray-500">
    {{ date }} ({{ dayjs(`${date} ${time}`).fromNow() }})
  </time>
</template>
