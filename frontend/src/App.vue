
<script setup lang="ts">
import {useStore} from 'vuex'
import { useHead } from '@vueuse/head'
import {key} from './store/index'

const store = useStore(key);

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
});

store.commit('SET_CHECKING_LANGUAGE');
store.dispatch('getApiScreens');
console.log(navigator.language);
</script>

<template>
  <router-view />
</template>
