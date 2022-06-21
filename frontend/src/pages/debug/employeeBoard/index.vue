<script setup lang="ts">
// @ts-ignore
import employeeBoard from '../../../components/employeeBoard.vue'

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
screen.msgContent = 'Желает здорово отдохнуть и набраться сил в отпуске'
screen.empoyee = 'Милане Тимофеевной'
</script>

<template>
  <!-- eslint-disable-next-line vue/attribute-hyphenation -->
  <employeeBoard :eventData="screen" />
</template>
