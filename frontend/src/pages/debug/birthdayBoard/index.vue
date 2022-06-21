<script setup lang="ts">
// @ts-ignore
import birthdayBoard from '../../../components/birthdayBoard.vue'

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
screen.msgTitl = 'С Днем Рождения!'
screen.msgContent = 'Успехов в работе, удачи по жизни, счастья в каждом новом дне, улыбок и гармонии дома!'
screen.empoyee = 'Глеб Никонов'
</script>

<template>
  <!-- eslint-disable-next-line vue/attribute-hyphenation -->
  <birthdayBoard :eventData="screen" />
</template>
