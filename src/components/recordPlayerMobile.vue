<template>
  <div v-show='songInfo' class="mobilePLayer">
    <div class="cdStyle">
      <div :class="['blurCoverBack', { 'loaded': !loaded }]" :style="playerBack"></div>
      <div class="cdBox" :style='moveStyle' @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'>
        <div class="cdLlight"></div>
        <div :class="[{ 'cdShadow': loaded }, { 'pause': !playing || touching }]"></div>
        <img :src='cover' :class="[{ 'cd': loaded }, { 'pause': !playing || touching }]" id='cd' />
      </div>
    </div>
    <div class="songInfo">
      <div>{{ songInfo.name }}</div>
      <div><span>{{ artists }}</span></div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  songInfo: {
    type: Object,
    default: () => ({})
  },
  cdStyle: {
    type: Boolean,
    default: false
  },
  playing: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['swipeCd'])

const playerBack = ref({
  backgroundImage: ''
})
const loaded = ref(false)
const touchStartX = ref(0)
const endX = ref(0)
const touching = ref(false)
const touchAction = ref('')
const opacity = ref(1)
const cover = ref('')

const artists = computed(() => {
  if (props.songInfo.artist) {
    return props.songInfo.artist.map(v => v.name).join(',')
  }
  return ''
})

const moveStyle = computed(() => {
  if (touching.value) {
    return {
      transform: 'translateX(' + endX.value + 'px)',
      opacity: opacity.value
    }
  }
  if (loaded.value) {
    return {
      transform: 'translateX(0px)',
      'transition-duration': '.8s',
      opacity: 1
    }
  }
  return undefined
})

function initRecodPlayer(songInfo) {
  if (!songInfo?.cover) {
    loaded.value = false
    cover.value = ''
    playerBack.value.backgroundImage = ''
    return
  }
  loaded.value = false
  const img = new Image()
  const src = songInfo.cover + '?param=400y400'
  img.src = src
  img.onload = () => {
    loaded.value = true
    setTimeout(() => {
      playerBack.value.backgroundImage = `url('${src}')`
      cover.value = src
    }, 20)
  }
  img.onerror = () => {
    playerBack.value.backgroundImage = ''
    cover.value = ''
    loaded.value = true
  }
}

function touchStart(e) {
  touchStartX.value = e.touches[0].clientX
  opacity.value = 1
}

function touchMove(e) {
  touching.value = true
  endX.value = e.touches[0].clientX - touchStartX.value
  const nextOpacity = 1 - Math.abs(endX.value / 300)
  opacity.value = nextOpacity > 0 ? Math.abs(nextOpacity).toFixed(2) : 0

  if (endX.value > 120) {
    touchAction.value = 'prev'
  } else if (endX.value < -120) {
    touchAction.value = 'next'
  } else {
    touchAction.value = ''
  }
}

function touchEnd() {
  touching.value = false
  endX.value = 0
  if (touchAction.value) {
    play(touchAction.value)
  }
}

function play(action) {
  emit('swipeCd', action)
  touchAction.value = ''
}

watch(() => props.songInfo, (value) => {
  console.log('songInfo: ', value)
  initRecodPlayer(value)
}, { immediate: true })
</script>

<style scoped>
.mobilePLayer .cdBox {
  width: 100vw;
  height: 100vw;
  border-radius: 50%;
  top: 5vh;
  box-shadow: -2vw -1vw 5vw rgba(0, 0, 0, .3);
}

.cdStyle {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.cd,
.cdShadow,
.cdLlight,
.cdShadow {
  width: 100vw;
  height: 100vw;
  border-radius: 50vw;
  min-width: inherit;
  min-height: inherit;
  mask: radial-gradient(transparent, transparent 14vw, rgba(255, 255, 255, 0.4) 14.1vw, #000 14.2vw);
}

/* .vinylBack,.vinylStyle .cdLlight,.cdShadow{width: 120vw;height: 120vw;}
.vinylStyle .cd{width: 55vw;height: 55vw;min-width: inherit;min-height: inherit}
.vinylStyle .cdLlight{min-width: inherit;min-height: inherit} */
.songInfo {
  top: 122vw;
}

.cdStyle .cd {
  padding: .5vw;
  mask: radial-gradient(transparent,
      transparent 16vw,
      rgba(255, 255, 255, 0.4) 16.1vw,
      #000 16.2vw) !important;

}

.cdLlight {
  mask: radial-gradient(transparent,
      transparent 7vw,
      rgba(255, 255, 255, 0.4) 7.1vw,
      #000 7.2vw) !important;
  -webkit-mask: radial-gradient(transparent,
      transparent 7vw,
      rgba(255, 255, 255, 0.4) 7.1vw,
      #000 7.2vw) !important;
}

.cdBox::after {
  width: 14vw;
  height: 14vw;
  border-width: 7vw;
}
</style>
