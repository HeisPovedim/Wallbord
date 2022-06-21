<script setup lang="ts">
// @ts-ignore
import articleBoard from '../../../components/articleBoard.vue'

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
screen.msgTitl = 'LEGO и Epic Games договорились о создании метавселенной для детей'
screen.msgContent = 'LEGO Group и Epic Games рассказали, что заключили договор о долгосрочном партнерстве.'
</script>

<template>
  <!-- eslint-disable-next-line vue/attribute-hyphenation -->
  <articleBoard :eventData="screen" />
</template>
