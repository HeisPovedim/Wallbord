<script setup lang="ts">
// @ts-ignore
import achievementsBoardFive from '../../../components/achievementsBoardFive.vue'

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

const screen: Event = {}
screen.screenType = 'achievementsBoardFive'
screen.priority = 3
screen.msgTitl = 'Получена ачивка'
screen.msgContent = 'Ранняя пташка'
screen.empoyee = 'Милана Тимофеевна'

</script>

<template>
  <!-- eslint-disable-next-line vue/attribute-hyphenation -->
  <achievementsBoardFive :eventData="screen" />
</template>
