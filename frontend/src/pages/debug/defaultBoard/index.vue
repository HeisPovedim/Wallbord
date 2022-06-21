<script setup lang="ts">
// @ts-ignore
import defaultBoard from '../../../components/defaultBoard.vue'

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
screen.priority = 2
screen.msgContent = 'Большой путь начинается здесь'
</script>

<template>
  <!-- eslint-disable-next-line vue/attribute-hyphenation -->
  <defaultBoard :eventData="screen" />
</template>
