<template>
    <div class = "Boards">
        <p>{{priority}}</p>
        <p>Содержание очень важного текста: {{msgContent}}</p>

    </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

 interface Event {
    screenType?: string,
    priority?: number,
    importance?: number,
    repetition?: number,
    showPeriod?: number,
    empoyee?: string,
    eventDate?: string,
    photo?: string,
    msgTitl?: string,
    msgContent?: string
}

    const props = defineProps<Event>();
    
    const {priority, msgContent} = toRefs(props);
</script>


<style>

</style>