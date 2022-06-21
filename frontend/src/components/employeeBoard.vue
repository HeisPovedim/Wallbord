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
  <div class="employee-content">
    <img src="../../public/img/employee/logo.png" alt="logo">
    <p class="employee-content__text-logo">digital skynet</p>
    <div class="employee-content-text">
      <p class="employee-content-text__title">{{eventData.msgContent}}</p>
      <p class="employee-content-text__name">{{eventData.empoyee}}</p>
      <p class="employee-content-text__other">Ждем обратно!</p>
    </div>
  </div>
</template>

<style>
.employee-content {
  background: url('/img/employee/undraw.png') no-repeat top right;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
  -moz-background-size: 100%;
  -ms-background-size: 100%;
  -khtml-background-size: 100%;
  background-size: 53%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 4.95vw 0 0 4vw;
}
.employee-content img {
  width: 7%;
}
.employee-content__text-logo {
  font-family: Gotham-Pro-Bold;
  font-size: 5.21vw;
  text-transform: uppercase;
  padding: 3.13vw 0 2.86vw 0;
  color: #484848;
}
.employee-content-text__title {
  font-family: Gotham-Pro;
  width: 35.21vw;
  font-size: 2.34vw;
  color: #484848;
}
.employee-content-text__name {
  font-family: Gotham-Pro-Bold;
  width: 32.08vw;
  line-height: 100%;
  font-size: 4.17vw;
  letter-spacing: 0.035em;
  padding: 5.21vw 0 8.59vw 0;
  color: #1899D3;
}
.employee-content-text__other {
  font-family: Gotham-Pro;
  font-size: 1.56vw;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}
</style>
