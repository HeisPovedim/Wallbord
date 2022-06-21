<script setup lang="ts">
import { toRefs } from 'vue'

interface Event {
  screenType?: string
  priority?: number
  importance?: number
  repetition?: number
  showPeriod?: number
  empoyee?: string
  eventDate?: string
  photo?: string
  msgLogo?: string
  msgTitl?: string
  msgContent?: string
}

const props = defineProps<{eventData: Event}>()
const { eventData } = toRefs(props)
</script>

<template>
  <div class="russia-day-content">
    <div class="russia-day-content-text">
      <img src="/img/russiaDay/logo.png" alt="logo">
      <p class="russia-day-content-text__title">{{eventData.msgTitl}}</p>
      <p class="russia-day-content-text__basic">{{eventData.msgContent}}</p>
    </div>
  </div>
</template>

<style>
.russia-day-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  min-height: 100%;
  position: absolute;
  background: url(/img/russiaDay/bg.png) no-repeat left top;
  background-size: 80%;
}
.russia-day-content-text {
  display: flex;
  padding: 5% 0 0 23%;
  margin: 10px;
  flex-direction: column;
}
.russia-day-content-text img {
  max-width: 6vw;
}
.russia-day-content-text__title {
  padding-top: 3.64vw;
  padding-bottom: 3.64vw;
  width: 48vw;
  font-family: Gotham-Pro-Bold;
  font-weight: 700;
  font-size: 5.20vw;
  line-height: 6.20vw;
  text-transform: uppercase;
  background: linear-gradient(119.36deg, #21B9FE 7.05%, #1A4CFE 85.01%, #1922FE 96.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.russia-day-content-text__basic {
  width: 54.53vw;
  font-family: Gotham-Pro;
  font-style: normal;
  font-weight: 400;
  font-size: 2.60vw;
  line-height: 3.54vw;
  text-align: justify;
  color: #3E3E3E;
}
</style>
