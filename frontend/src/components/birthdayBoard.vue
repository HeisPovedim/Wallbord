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
  <div class="birthday-content">
    <div class="birthday-content-text-and-avatar">
      <div class="birthday-content-text">
        <img src="/img/birthdayBoard/logo.png" alt="logo">
        <p class="birthday-content-text__text-title">{{eventData.msgTitl}}</p>
        <p class="birthday-content-text__text-name">{{eventData.empoyee}}</p>
        <p class="birthday-content-text__text-basic">{{eventData.msgContent}}</p>
      </div>
      <div class="birthday-content-veactor">
        <div class="birthday-content-veactor__avatar">
          <img src="/img/birthdayBoard/avatar.jpg" alt="avatar">
        </div>
      </div>
    </div>
    <div class="birthday-content__confetti">
      <img src="/img/birthdayBoard/confetti.png" alt="">
    </div>
  </div>
</template>

<style lang='scss'>
@import '../assets/variable.scss';
@import '../assets/mixins.scss';
@import '../assets/function.scss';

.birthday-content {
  display: flex;
  flex-direction: column;
  position: relative;
}
.birthday-content__confetti {
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
.birthday-content__confetti img {
  min-width: in-percentages(1920px, 1920px);
}
.birthday-content-text-and-avatar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 100vh;
  width: 100vw;
}
.birthday-content-veactor {
  width: 56%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding-top: 8%;
  background: url(/img/birthdayBoard/vector.png) no-repeat;
  background-size: contain;
}
.birthday-content-veactor__avatar {
  width: 75%;
  margin-right: 8%;
  border-radius: 50%;
  box-shadow: 0px 10px 30px rgba(1, 27, 95, 0.6);
  overflow: hidden;
}
.birthday-content-veactor__avatar img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center;
}
.birthday-content-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8.39vw;
  margin-left: 6.77vw;
}
.birthday-content-text img {
  width: 6.15vw;
}
.birthday-content-text__text-title {
  font-family: Gotham-Pro-Bold;
  font-style: normal;
  font-weight: 879px;
  font-size: 4.69vw;
  color: #1899D3;
  margin-top: 4.69vw;
}
.birthday-content-text__text-name {
  font-family: Gotham-Pro-Bold;
  font-style: normal;
  font-weight: 700;
  font-size: 4.17vw;
  line-height: 4.69vw;
  letter-spacing: 0.035em;
  text-transform: uppercase;
  color: #484848;
  margin-top: 2.60vw;
}
.birthday-content-text__text-basic {
  font-family: Gotham-Pro;
  font-style: normal;
  font-weight: 400;
  font-size: 2.92vw;
  line-height: 130%;
  color: #484848;
  margin-top: 3.13vw;
  text-align: justify;
  width: 46.88vw;
}
@media screen and (max-width: 900px) {
  .birthday-content-veactor {
    height: 600px;
  }
}
@media screen and (max-height: 1000px) {
  .birthday-content-veactor__avatar {
    width: 90%;
  }
  .birthday-content-veactor {
    width: 40%;
  }
}
</style>
