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
  <div class="achievements-content">
    <div class="achievements-content-bg">
      <div class="achievements-content-board-head">
        <div class="achievements-content-board-head-elements">
          <div class="achievements-content-board-head-elements__logo">
            <img src="/img/achievements/logo.png" alt="logo">
            <p>digital skynet</p>
          </div>
          <div class="achievements-content-board-head-elements__close">
            <img src="/img/achievements/close.png" alt="close">
          </div>
        </div>
      </div>
      <div class="achievements-content-board-body">
        <div class="achievements-content-board-body-main">
          <div class="achievements-content-board-body-img">
            <img src="/img/achievements/avatar.png" alt="avatar">
          </div>
          <div class="achievements-content-board-body-info">
            <div class="achievements-content-board-body-info-text">
              <p class="achievements-content-board-body-info-text__receiving">
                {{eventData.msgTitl}}:
              </p>
              <p class="achievements-content-board-body-info-text__name">
                {{eventData.empoyee}}
              </p>
            </div>
            <button class="achievements-content-board-body-info__button">
              <img src="/img/achievements/check-mark.png" alt="check-mark">
              <p>{{eventData.msgContent}}</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body, html {
  width: 100%;
  height: 100%;
}
body {
  background: url(/img/achievements/bg-top.png) no-repeat top right, url(/img/achievements/bg-bottom.png) no-repeat bottom right;
  background-size: contain ;
}
.achievements-content-bg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
}
.achievements-content{
  max-width: max-content;
  margin-left: auto;
  margin-right: auto;
}

/* Begin style achievements-content-board-head */
.achievements-content-board-head {
  display: flex;
  justify-content: center;
  background: #4CBEFE;
  border-top: 5px solid #50B6F0;
  border-left: 5px solid #50B6F0;
  border-right: 5px solid #50B6F0;
  border-radius: 20px 20px 0px 0px;
}
.achievements-content-board-head-elements {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 4.89vw;
  margin-right: 3.125vw;
  margin-top: 1.5vw;
}
.achievements-content-board-head-elements__logo {
  display: flex;
  align-items: center;
  padding-bottom: 1vw;
}
.achievements-content-board-head-elements__logo img {
  width: 6.30vw;
  height: auto;
}
.achievements-content-board-head-elements__logo p {
  font-family: Gotham-Pro-Bold;
  font-style: normal;
  font-weight: 900;
  font-size: 4.16vw;
  text-transform: capitalize;
  color: #FFFFFF;
  padding-left: 43px;
}
.achievements-content-board-head-elements__close img {
  width: 2vw;
}
/* End style achievements-content-board-head */

/* Begin style achievements-content-board-body */
.achievements-content-board-body {
  padding: 1.5625vw 3vw;
  background: #F7FCFF;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-left: 5px solid #50B6F0;
  border-right: 5px solid #50B6F0;
  border-bottom: 5px solid #50B6F0;
}
.achievements-content-board-body {
  display: flex;
  justify-content: center;
  border-radius: 0px 0px 20px 20px;
}
.achievements-content-board-body-main {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}
.achievements-content-board-body-img {
  margin-right: 1.5px;
}
.achievements-content-board-body-img img {
  width: 19.84375vw;
  height: 100%;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
}
.achievements-content-board-body-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 3.44vw;
}
.achievements-content-board-body-info-text {
  display: flex;
  flex-direction: column;
}
.achievements-content-board-body-info-text__receiving {
  font-family: Gotham-Pro;
  font-weight: 400;
  font-size: 2.083vw;
  color: #272727;
}
.achievements-content-board-body-info-text__name {
  font-family: Gotham-Pro-Bold;
  font-weight: 700;
  font-size:  3.33vw;
  text-transform: capitalize;
  color: #4C7EFE;
}
.achievements-content-board-body-info__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 37.55vw;
  height: 8.44vw;
  margin-top: 1.56vw;
  padding: 2.5vw 4.2vw;
  background: #FFFFFF;
  box-shadow: 5px 10px 30px rgba(16, 141, 198, 0.25);
  border-radius: 200px;
}
.achievements-content-board-body-info__button img {
  width: 5.41vw;
  margin-right: 1vw;
}
.achievements-content-board-body-info__button p {
  font-family: Gotham-Pro;
  margin-left: 1vw;
  font-weight: 400;
  font-size: 2.35vw;
  text-transform: capitalize;
  color: #484848;
}
/* End style achievements-content-board-body */

@media screen and (max-width: 600px) {
  .achievements-content-board-body-main {
    flex-direction: column;
  }
  .achievements-content-board-head-elements__logo {
    margin-right: 20px;
  }
  .achievements-content-board-head {
  border-top: 3px solid #50B6F0;
  border-left: 3px solid #50B6F0;
  border-right: 3px solid #50B6F0;
  }
  .achievements-content-board-body {
  border-bottom: 3px solid #50B6F0;
  border-left: 3px solid #50B6F0;
  border-right: 3px solid #50B6F0;
  }
  .achievements-content-board-body-info-text {
    align-items: center;
  }
  .achievements-content-board-body-info {
    margin-left: 0;
    margin-top: 2vw;
  }
  .achievements-content-board-body-img img {
    width: 40vw;
  }
  .achievements-content {
    max-width: 90%;
  }
}
</style>
