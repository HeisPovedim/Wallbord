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
  <div class="article-content">
    <div class="article">
      <div class="article__text">
        <div class="article__text_title">
          <p>
            <span>{{eventData.msgTitl.slice(0, 4)}}</span> {{eventData.msgTitl.slice(5, 6)}} <span>{{eventData.msgTitl.slice(7, 18)}}</span> {{eventData.msgTitl.slice(19)}}
          </p>
        </div>
        <div class="article__text_content">
          <p>{{eventData.msgContent}}</p>
        </div>
      </div>
      <div class="article__img">
        <img src="/img/article/article_img.png" alt="article-img">
      </div>
      <div class="article-bottom-info-content">
        <div class="article-bottom-info">
          <img class="article-bottom-info__vector" src="/img/article/vector.png" alt="">
          <div class="article-bottom-info-qrCode">
            <p>Читайте об<br> этом на Хабр</p>
            <div class="article-bottom-info-qrCode__img-qrCode">
              <img src="/img/article/qrCode_img.png" alt="qrCode">
            </div>
          </div>
          <img class="article-bottom-info__logo" src="/img/article/logo.png" alt="logo">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../assets/variable.scss';
@import '../assets/mixins.scss';
@import '../assets/function.scss';

.article-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
.article{
  display: flex;
  justify-content: space-between;
  position: relative;
  min-height: 100vh;
}
.article__text {
  margin-top: 6.77vw;
  margin-left: 3.65vw;
  margin-right: 3.54vw;
}
.article__text_title p {
  font-family: 'Gotham Pro';
  text-align: justify;
  font-style: normal;
  font-weight: 700;
  font-size: 3.13vw;
  line-height: 4.69vw;
  color: #484848;
}
.article__text_title p span {
  font-size: 3.13vw;
  color: #1899D3;
}
.article__text_content {
  padding-top: 5.20vw;
}
.article__text_content p {
  text-align: justify;
  font-family: 'Gotham Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 3.13vw;
  line-height: 3.54vw;
  color: #484848;
}
.article__img img {
  min-width: 42.3vw;
  padding-left: 3.54vw;
}
.article-bottom-info-content {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
.article-bottom-info {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  padding-bottom: 1.56vw;
}
.article-bottom-info__vector {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 35%;
  float: right;
}
.article-bottom-info-qrCode {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top: 20px;
}
.article-bottom-info-qrCode p {
  margin-right: 3.64vw;
  font-style: normal;
  font-weight: 700;
  font-size: 2.08vw;
  line-height: 3.125vw;
  color: #1899D3;
}
.article-bottom-info-qrCode_text {
  margin-right: 70px;
  max-width: 287px;
  max-height: 118px;
}
.article-bottom-info-qrCode__img-qrCode img {
  width: 14vw;
  margin-right: 10vw;
}
.article-bottom-info__logo {
  width: 20%;
  display: flex;
  justify-content: flex-end;
  padding-top: 20px;
  padding-right: 50px;
}
</style>
