<template>
  <ul>
    <li v-for="item in items">
      <a :href="item.link" class="text-2xl text-blue hover:underline" target="_blank">
        {{ item.title }}
      </a>
      <span class="ml-3 text-gray-500">{{ item.date }}</span>
    </li>
  </ul>
</template>

<script>
import axios from 'axios'

export default {
  name: 'NoteRss',
  data () {
    return {
      url: 'https://d2ttuujo1i51fi.cloudfront.net/note_pcs_miraizu.json',
      items: [],
    }
  },
  mounted () {
    axios.get(this.url).then((res) => {
      this.items = res.data
    }).catch((error) => {
      console.log(error)
    })
  },
}
</script>

<style scoped>

</style>
