<script setup lang="ts">
// @ts-ignore
import advertisementBoard from '../../../components/advertisementBoard.vue'

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
  msgName?: string
}

const screen: Event = {}
screen.screenType = 'achievementsBoardFive'
screen.priority = 0
screen.msgTitl = 'Внимание'
screen.msgContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium felis venenatis, phasellus faucibus odio neque sed. A tortor nisi, convallis consectetur id mi donec nibh posuere. Fames nulla sed posuere ut. Proin magna neque sagittis sed eget augue neque.'
</script>

<template>
  <advertisementBoard :eventData="screen" />
</template>
