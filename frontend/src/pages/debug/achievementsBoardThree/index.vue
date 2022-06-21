<script setup lang="ts">
// @ts-ignore
import achievementsBoardThree from '../../../components/achievementsBoardThree.vue'

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
screen.priority = 3
screen.msgLogo = 'Digital Skynet'
screen.msgTitl = 'Получена ачивка'
screen.msgContent = 'Живчик'
screen.empoyee = 'Милана Тимофеевна'
</script>

<template>
  <!-- eslint-disable-next-line vue/attribute-hyphenation -->
  <achievementsBoardThree :eventData="screen" />
</template>
