<script setup lang="ts">
// @ts-ignore
import achievementsBoardOne from '../../../components/achievementsBoardOne.vue'

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
screen.msgLogo = 'Digital Skynet'
screen.msgTitl = 'Получена ачивка'
screen.msgContent = 'Успешный PR/MR'
screen.empoyee = 'Милана Тимофеевна'
</script>

<template>
  <!-- eslint-disable-next-line vue/attribute-hyphenation -->
  <achievementsBoardOne :eventData="screen" />
</template>
