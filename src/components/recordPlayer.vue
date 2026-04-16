<template>
  <div v-if='songInfo'>
    <div :class="[{ 'cdStyle': cdStyle }, { 'vinylStyle': !cdStyle }]">
      <div :class="['blurCoverBack', { 'loaded': !loaded }]" :style="playerBack"></div>
      <svg v-if="!cdStyle" id="vinylIndicator" :class="indicatorPlaying ? 'playing' : ''" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" width="150" height="600" viewBox="0 0 150 600">
        <filter id="vinylIndicator_e">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <path fill="#161616" d="M102.21 0v392.26c-1.62 21.37-6.47 44.26-17.94 64.12l-33.65 58.29-41.18 71.32 13.82 7.98 74.83-129.6q2.18-3.78 4.11-7.63a149 149 0 0 0 15.94-67.12l.02-.09V0z" />
        <defs>
          <path id="vinylIndicator_a" d="M102.21 0v392.26c-1.62 21.37-6.47 44.26-17.94 64.12l-33.65 58.29-41.18 71.32 13.82 7.98 74.83-129.6q2.18-3.78 4.11-7.63a149 149 0 0 0 15.94-67.12l.02-.09V0z" />
        </defs>
        <clipPath id="vinylIndicator_b">
          <use xlink:href="#vinylIndicator_a" overflow="visible" />
        </clipPath>
        <g clip-path="url(#vinylIndicator_b)">
          <defs>
            <path id="vinylIndicator_c" d="M93.23 0v392.26c-1.62 21.37-6.47 44.26-17.94 64.12l-33.65 58.29L.46 585.99l13.82 7.98 74.83-129.6q2.17-3.78 4.11-7.63a149 149 0 0 0 15.94-67.12l.02-.09V0z" />
          </defs>
          <clipPath id="vinylIndicator_d">
            <use xlink:href="#vinylIndicator_c" overflow="visible" />
          </clipPath>
          <g clip-path="url(#vinylIndicator_d)" filter="url(#vinylIndicator_e)" opacity=".2">
            <path fill="#fff" d="M93.23 0v392.26c-1.62 21.37-6.47 44.26-17.94 64.12l-33.65 58.29L.46 585.99l13.82 7.98 74.83-129.6q2.17-3.78 4.11-7.63a149 149 0 0 0 15.94-67.12l.02-.09V0z" />
          </g>
        </g>
        <linearGradient id="vinylIndicator_f" x1="15.22" x2="40.16" y1="563.7" y2="578.1" gradientUnits="userSpaceOnUse">
          <stop offset="0" style="stop-color:#141414" />
          <stop offset=".38" style="stop-color:#323232" />
          <stop offset=".52" style="stop-color:#323232" />
          <stop offset="1" style="stop-color:#141414" />
        </linearGradient>
        <path fill="url(#vinylIndicator_f)" d="m3.03 582.41 25.81 14.9 22.3-38.61-25.82-14.91z" />
        <linearGradient id="vinylIndicator_g" x1="40.86" x2="13.31" y1="578.5" y2="562.6" gradientUnits="userSpaceOnUse">
          <stop offset="0" style="stop-color:#141414" />
          <stop offset=".39" style="stop-color:#303030" />
          <stop offset=".49" style="stop-color:#464646" />
          <stop offset="1" style="stop-color:#141414" />
        </linearGradient>
        <path fill="url(#vinylIndicator_g)" d="m25.32 543.79 25.81 14.9-22.29 38.61-25.81-14.9zm-.36-1.36-.5.87-22.3 38.61-.5.87.87.5 25.81 14.9.87.5.5-.87L52 559.2l.5-.87-.87-.5-25.81-14.9z" />
        <circle cx="26.75" cy="547.99" r="1.75" fill="#2b2b2b" />
        <circle cx="47.59" cy="559.52" r="1.75" fill="#2b2b2b" />
        <circle cx="6.84" cy="581.18" r="1.75" fill="#2b2b2b" />
        <circle cx="27.68" cy="592.71" r="1.75" fill="#2b2b2b" />
        <radialGradient id="vinylIndicator_h" cx="109.98" cy="63.37" r="35.92" gradientUnits="userSpaceOnUse">
          <stop offset="0" style="stop-color:#1e1e1e" />
          <stop offset=".73" style="stop-color:#000" />
          <stop offset="1" style="stop-color:#000" />
        </radialGradient>
        <linearGradient id="vinylIndicator_i" x1="72.07" x2="147.9" y1="63.37" y2="63.37" gradientUnits="userSpaceOnUse">
          <stop offset=".01" style="stop-color:#333" />
          <stop offset=".1" style="stop-color:#000" />
          <stop offset=".2" style="stop-color:#1a1a1a" />
          <stop offset=".31" style="stop-color:#4d4d4d" />
          <stop offset=".56" style="stop-color:#1a1a1a" />
          <stop offset=".68" style="stop-color:#4d4d4d" />
          <stop offset=".94" style="stop-color:#000" />
          <stop offset="1" style="stop-color:#333" />
        </linearGradient>
        <circle cx="109.98" cy="63.37" r="35.92" fill="url(#vinylIndicator_h)" stroke="url(#vinylIndicator_i)" stroke-miterlimit="10" stroke-width="4" />
      </svg>
      <div :class="['cdBox', { 'cdSlideIn': loaded }]" @animationend="handleCdAnimationEnd">
        <div class="vinylBack" v-if='!cdStyle'></div>
        <div :class="[{ 'cdShadow': loaded }, { 'pause': !playing }]"></div>
        <div class="cdLlight" :class="!playing ? 'pause' : ''"></div>
        <img :src='cover' :class="['cd', { 'pause': !playing }]" />
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

const playerBack = ref({
  backgroundImage: ''
})
const loaded = ref(false)
const songSrc = ref('')
const cover = ref('')
const indicatorPlaying = ref(false)
const waitingForDrop = ref(false)

const artists = computed(() => {
  if (props.songInfo.artist) {
    return props.songInfo.artist.map(v => v.name).join(',')
  }
  return ''
})

function syncIndicatorState() {
  indicatorPlaying.value = !!props.playing && !waitingForDrop.value
}

function handleCdAnimationEnd(event) {
  if (event.animationName !== 'slideDown') {
    return
  }
  waitingForDrop.value = false
  syncIndicatorState()
}

function initRecodPlayer(songInfo) {
  if (!songInfo?.cover) {
    return
  }
  console.log('songInfo: ', songInfo)
  loaded.value = false
  waitingForDrop.value = true
  indicatorPlaying.value = false
  const img = new Image()
  const src = songInfo.cover + '?param=800y800'
  img.src = src
  songSrc.value = songInfo.url ? songInfo.url : '//music.163.com/song/media/outer/url?id=' + songInfo.id + '.mp3'
  img.onload = () => {
    setTimeout(() => {
      playerBack.value.backgroundImage = `url('${src}')`
      cover.value = src
      loaded.value = true
    }, 20)
  }
}

watch(() => props.songInfo, (value) => {
  initRecodPlayer(value)
}, { immediate: true })

watch(() => props.playing, () => {
  syncIndicatorState()
})
</script>
<style>
#vinylIndicator {
  position: absolute;
  left: 50%;
  z-index: 9;
  margin-left: 330px;
  top: 35px;
  transition: transform .6s ease-in-out;
  transform-origin: 75% 11%;
}

#vinylIndicator.playing {
  transform: rotate(20deg);
  background: none;
}
</style>
