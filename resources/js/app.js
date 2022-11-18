import { createApp } from 'vue';

const app = createApp({});

import NoteRss from './components/NoteRss.vue';
app.component('note-rss-component', NoteRss);

app.mount('#app');
