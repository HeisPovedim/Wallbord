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
  <div class="advertisement-content">
    <div class="advertisement-content-text">
      <p class="advertisement-content-text__title">
        {{eventData.msgTitl}}
      </p>
      <p class="advertisement-content-text__basic">
        {{eventData.msgContent}}
      </p>
    </div>
    <img class="advertisement-content-img-footer" src="/img/advertisement/footer.png" alt="footer">
    <img class="advertisement-content-img-logo" src="/img/advertisement/logo.png" alt="footer">
  </div>
</template>

<style lang='scss'>
.advertisement-content {
  font-family: Gotham-Pro-Bold;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.advertisement-content-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(/img/advertisement/balls.png) no-repeat center top;
  background-size: 90%;
  min-height: 100vh;
}
.advertisement-content-text__title {
  font-style: normal;
  font-weight: 23.80vw;
  font-size: 4.76vw;
  text-transform: uppercase;
  color: #1899D3;
  padding-top: 7vw;
}
.advertisement-content-text__basic {
  font-family: Gotham-Pro;
  font-style: normal;
  font-weight: 400;
  font-size: 2.5vw;
  line-height: 135%;
  letter-spacing: -0.01em;
  color: #484848;
  width: 70vw;
  text-align: justify;
  margin-top: 6.54vw;
  padding-bottom: 90px;
}
.advertisement-content-img-footer {
  min-width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.advertisement-content-img-logo {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0px 25px 25px 0px;
  width: 10%;
}
@media screen and (max-width: 900px) {
  .advertisement-content-text__title {
    font-size: 6vw;
  }
  .advertisement-content-text__basic {
    font-size: 4vw;
  }
}
</style>
