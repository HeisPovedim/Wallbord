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
  <div class="backgroundFour-content">
    <div class="backgroundFour-content__logo">
      <img class="" src="/img/bgFour/logo_four.png" alt="logo">
      <p>{{}}</p>
    </div>
  </div>
</template>

<style lang='scss'>
*{
  box-sizing: border-box;
  font-size: 12px;
}
body {
  margin: 0px;
}
.backgroundFour-content {
  background: url(/img/bgFour/bg_four.png) no-repeat center top 15px;
  -webkit-background-size: 100%;
  -o-background-size: 100%;
  -moz-background-size: 100%;
  -ms-background-size: 100%;
  -khtml-background-size: 100%;
  background-size: 100%;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 7%;
}
.backgroundFour-content__logo {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.backgroundFour-content__logo p {
  font-family: Gotham-Pro-Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 2.60vw;
  line-height: 48px;
  color: #484848;
}
.backgroundFour-content__logo img {
  width: clamp(50vw, 90vw, 40vw);
  margin-left: auto;
  margin-right: auto;
  padding-top: 13.54vw;
  padding-bottom: 4.69vw;
}
@media screen and (min-width: 3840px) {
  .backgroundFour-content {
    padding-bottom: 9%;
  }
}
</style>
