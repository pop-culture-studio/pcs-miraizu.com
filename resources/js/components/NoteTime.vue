<script setup>
const props = defineProps({
  date: String,
  time: String,
})

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/ja'

dayjs.extend(relativeTime)
dayjs.extend(localizedFormat)
dayjs.locale('ja')
</script>

<template>
  <time :datetime="dayjs(`${date} ${time}`).format()" class="text-gray-500">
    {{ dayjs(date).format('LL') }} ({{ dayjs(`${date} ${time}`).fromNow() }})
  </time>
</template>
