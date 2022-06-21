<script setup lang="ts">
// @ts-ignore
import russiaDayBoard from '../../../components/russiaDayBoard.vue'

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
screen.priority = 1
screen.msgTitl = 'Поздравляем с днем россии'
screen.msgContent = 'Желаем всем счастливого будущего, светлых надежд и исполнения желаний'
</script>

<template>
  <!-- eslint-disable-next-line vue/attribute-hyphenation -->
  <russiaDayBoard :eventData="screen" />
</template>
