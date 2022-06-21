<script setup lang="ts">
import {useStore} from 'vuex'
import {computed, ref} from 'vue'
import {key} from '../store/index'
import OneBoard from '../components/OneBoard.vue'
const store = useStore(key);
const boards = computed(()=> store.getters.getsortedScreens);

const sliderIndexImpot = ref(0);

setInterval(() => {
  
  sliderIndexImpot.value += 1;
}, 10000);
</script>

<template>
  <div class="wrapper">
    <div>
      <Birthday v-if="boards[sliderIndexImpot].screenType == 'birthday'" :eventData="boards[sliderIndexImpot]"/>
      <Employee v-if="boards[sliderIndexImpot].screenType == 'employee'" :eventData="boards[sliderIndexImpot]"/>
      <Vacation v-if="boards[sliderIndexImpot].screenType == 'vacation'" :eventData="boards[sliderIndexImpot]"/>
      <AchievementsOne v-if="boards[sliderIndexImpot].screenType == 'achievementsOne'" :eventData="boards[sliderIndexImpot]"/>
      <AchievementsTwo v-if="boards[sliderIndexImpot].screenType == 'achievementsTwo'" :eventData="boards[sliderIndexImpot]"/>
      <AchievementsThree v-if="boards[sliderIndexImpot].screenType == 'achievementsThree'" :eventData="boards[sliderIndexImpot]"/>
      <Article v-if="boards[sliderIndexImpot].screenType == 'article'" :eventData="boards[sliderIndexImpot]"/>
      <Footer v-if="boards[sliderIndexImpot].screenType == 'footer'" :eventData="boards[sliderIndexImpot]"/>
      <OneBoard v-if="boards[sliderIndexImpot].screenType == 'oneBoard'" :eventData="boards[sliderIndexImpot]"/>
      <RussiaDay v-if="boards[sliderIndexImpot].screenType == 'russianDay'" :eventData="boards[sliderIndexImpot]"/>
      <Default v-if="boards[sliderIndexImpot].screenType == 'default'" :eventData="boards[sliderIndexImpot]"/>
      
    </div>
  </div>
</template>

<style>
.wrapper{
  overflow:hidden;
  margin:270px;
  color: white;
}

</style>

<route lang="yaml">
meta: 
  layout: home
</route>