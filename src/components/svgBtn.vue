<template>
  <svg viewBox="0 0 48 48" v-if='icoName' @click='emitClick'>
    <g v-html="svgCode"></g>
  </svg>
</template>
<script setup>
import { computed } from 'vue'
import { icons } from './icons.js'

const props = defineProps({
  icoName: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['goPlay', 'click'])

const svgCode = computed(() => icons[props.icoName])

function emitClick(event) {
  emit('goPlay', props.icoName)
  emit('click', event)
}
</script>
<style>
.keyTips {
  position: absolute;
  top: 100px;
  right: 23px;
  width: 56px;
  height: 56px;
  z-index: 999;
  cursor: pointer;
  opacity: .4;
  transition: opacity .6s;
}

.keyTips:hover {
  opacity: 1;
}
</style>
