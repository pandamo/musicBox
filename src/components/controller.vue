<template>
  <div :class="['controller', { 'mobileControll': isMobile }]">
    <audio ref="audioPlayer" :src="songSrc" :autoplay="autoplay" controls="" style='display:none'></audio>
    <svgBtn :icoName='playModeIcon' @goPlay='cyclePlayMode' class='smallIcon' />
    <svgBtn icoName='prev' @goPlay='playPrevious' />

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class='bigIcon' @click='togglePlay'>
      <path v-show='!playing' fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12v24l18-12-18-12z" />
      <path v-show='playing' fill="none" stroke="#fff" stroke-width="3" d="M18 14 v20 M30 14 v20" stroke-linecap="round" stroke-linejoin="round" />
      <circle cx="24" cy="24" r="22" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" opacity=".3" />
      <circle ref="progressCircle" cx="24" cy="24" r="22" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" style="transform:rotate(-90deg);transform-origin:center" stroke-dasharray='0 140' stroke-dashoffset='0' />
    </svg>
    <svgBtn icoName='next' @goPlay='playNext' />
    <svgBtn icoName='listIcon' class='smallIcon' @goPlay='toggleList' v-if='isMobile' />
    <div class="volumeBar">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class='speakerIcon' @click='toggleMute'>
        <path fill='#fff' d="M3.503 7.688H1.518a.5.5 0 0 0-.5.5v7.623a.5.5 0 0 0 .5.5h1.985a.5.5 0 0 0 .5-.5V8.188a.5.5 0 0 0-.5-.5zm9.121-3.067a.497.497 0 0 0-.477-.036L5.602 7.534a.5.5 0 0 0-.294.456v8.02c0 .196.115.375.294.456l6.545 2.949a.498.498 0 0 0 .706-.456V5.041a.499.499 0 0 0-.229-.42z" />
        <g fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round">
          <path d="M14.549 9.806c.562.562.907 1.338.907 2.194 0 .858-.346 1.634-.907 2.194" v-show='speakerIconVolume[0]' />
          <path d="M16.703 7.65a6.137 6.137 0 0 1 1.8 4.349c0 1.7-.688 3.235-1.8 4.351" v-show='speakerIconVolume[1]' />
          <path d="M18.856 18.503C20.52 16.84 21.548 14.54 21.548 12s-1.028-4.839-2.692-6.503" v-show='speakerIconVolume[2]' />
        </g>
      </svg>
      <input type="range" min='0' max='1' step='.01' v-model='volume' />
    </div>
  </div>
</template>
<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import svgBtn from './svgBtn.vue'
import { PLAY_MODES, STORAGE_KEYS, isMobileDevice } from '../constants/app.js'

const props = defineProps({
  songId: {
    type: [String, Number],
    default: ''
  },
  playMode: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: ''
  },
  isMobile: {
    type: Boolean,
    default: undefined
  }
})

const emit = defineEmits(['togglePlay', 'next', 'prev', 'cyclePlayMode', 'playingChange', 'canNotPlay', 'toggleList'])

const savedVolume = parseFloat(localStorage.getItem(STORAGE_KEYS.VOLUME))
const initialVolume = Number.isNaN(savedVolume) ? 0.5 : savedVolume

const autoplay = true
const songSrc = ref('')
const playing = ref(false)
const volume = ref(initialVolume)
const volumeTmp = ref(initialVolume)
const percent = ref(0)
const progressTimer = ref(null)
const audioPlayer = ref(null)
const progressCircle = ref(null)
let keyboardListener = null
let endedListener = null
let playingListener = null
let pauseListener = null
let errorTimer = null

const playModeIcon = computed(() => {
  if (props.playMode === PLAY_MODES.REPEAT_ONE) {
    return 'repeatOne'
  }
  if (props.playMode === PLAY_MODES.RANDOM) {
    return 'randomPlay'
  }
  return 'normalPlay'
})

const speakerIconVolume = computed(() => {
  return [
    parseFloat(volume.value) > 0,
    parseFloat(volume.value) > 0.33,
    parseFloat(volume.value) > 0.66
  ]
})

function getSongSrc(songId = props.songId) {
  if (props.url) {
    return props.url
  }
  return String(songId).indexOf('.mp3') > 0
    ? songId
    : '//music.163.com/song/media/outer/url?id=' + songId + '.mp3'
}

function togglePlay() {
  if (audioPlayer.value?.paused) {
    audioPlayer.value.play()
  } else {
    audioPlayer.value?.pause()
  }
  emit('togglePlay')
}

function playPrevious() {
  percent.value = 0
  emit('prev')
}

function playNext() {
  percent.value = 0
  emit('next')
}

function cyclePlayMode() {
  emit('cyclePlayMode')
}

function toggleList() {
  emit('toggleList')
}

function clearErrorTimer() {
  clearTimeout(errorTimer)
  errorTimer = null
}

function audioError() {
  emit('canNotPlay', '歌曲加载失败，自动播放下一首')
  clearErrorTimer()
  errorTimer = setTimeout(() => {
    emit('next')
  }, 2000)
}

function toggleMute() {
  volume.value = volume.value ? 0 : parseFloat(volumeTmp.value)
}

function showProgress() {
  if (!progressCircle.value) {
    return
  }

  const perimeter = Math.PI * 2 * 22
  progressCircle.value.setAttribute(
    'stroke-dasharray',
    `${parseFloat(perimeter * percent.value).toFixed(2)} ${parseFloat(perimeter * (1 - percent.value)).toFixed(2)}`
  )
  progressCircle.value.setAttribute('stroke-width', percent.value === 0 ? '0' : '2')
}

function clearProgressTimer() {
  clearInterval(progressTimer.value)
  progressTimer.value = null
}

function startProgressTimer() {
  clearProgressTimer()
  progressTimer.value = setInterval(() => {
    if (!audioPlayer.value || !audioPlayer.value.duration) {
      return
    }
    percent.value = parseFloat(
      (audioPlayer.value.currentTime / audioPlayer.value.duration).toFixed(2)
    )
  }, 500)
}

function syncSongSrc(songId = props.songId) {
  songSrc.value = getSongSrc(songId)
}

function bindAudioEvents() {
  if (!audioPlayer.value) {
    return
  }

  endedListener = () => {
    if (props.playMode === PLAY_MODES.REPEAT_ONE) {
      audioPlayer.value.play()
    } else {
      emit('next')
    }
  }
  playingListener = () => {
    startProgressTimer()
    playing.value = true
    emit('playingChange', true)
  }
  pauseListener = () => {
    clearProgressTimer()
    playing.value = false
    emit('playingChange', false)
  }

  audioPlayer.value.addEventListener('ended', endedListener)
  audioPlayer.value.addEventListener('playing', playingListener)
  audioPlayer.value.addEventListener('pause', pauseListener)
}

function unbindAudioEvents() {
  if (!audioPlayer.value) {
    return
  }
  if (endedListener) {
    audioPlayer.value.removeEventListener('ended', endedListener)
  }
  if (playingListener) {
    audioPlayer.value.removeEventListener('playing', playingListener)
  }
  if (pauseListener) {
    audioPlayer.value.removeEventListener('pause', pauseListener)
  }
}

function bindKeyboardEvents() {
  const shouldBindKeyboard = !(props.isMobile ?? isMobileDevice())
  if (!shouldBindKeyboard) {
    return
  }

  keyboardListener = (e) => {
    switch (e.keyCode) {
      case 32:
        togglePlay()
        break
      case 39:
        playNext()
        break
      case 37:
        playPrevious()
        break
      case 38:
        volume.value =
          parseFloat(volume.value) > 0.9
            ? 1
            : Number((parseFloat(volume.value) + 0.1).toFixed(2))
        break
      case 40:
        volume.value =
          parseFloat(volume.value) < 0.1
            ? 0
            : Number((parseFloat(volume.value) - 0.1).toFixed(2))
        break
    }
  }

  document.addEventListener('keyup', keyboardListener)
}

function unbindKeyboardEvents() {
  if (keyboardListener) {
    document.removeEventListener('keyup', keyboardListener)
  }
}

watch(() => props.songId, (val) => {
  syncSongSrc(val)
  clearErrorTimer()

  errorTimer = setTimeout(() => {
    if (audioPlayer.value?.error) {
      audioError()
    }
  }, 1500)
})

watch(() => props.url, () => {
  syncSongSrc()
})

watch(volume, (val) => {
  if (!audioPlayer.value) {
    return
  }
  audioPlayer.value.volume = val
  if (val !== 0) {
    volumeTmp.value = val
  }
  localStorage.setItem(STORAGE_KEYS.VOLUME, val)
})

watch(percent, () => {
  showProgress()
})

onMounted(() => {
  syncSongSrc()
  if (audioPlayer.value) {
    audioPlayer.value.volume = volume.value
  }
  bindAudioEvents()
  bindKeyboardEvents()
  showProgress()
})

onBeforeUnmount(() => {
  clearProgressTimer()
  clearErrorTimer()
  unbindAudioEvents()
  unbindKeyboardEvents()
})
</script>
<style>
.controller {
  position: absolute;
  z-index: 999;
  bottom: 60px;
  width: 60%;
  left: 20%;
  height: 60px;
  margin-left: -23px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.controller svg {
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  cursor: pointer;
  margin: 0 60px;
  opacity: 0.5;
  border-radius: 50%;
  filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.5));
  transition: all 0.6s;
}

.controller svg.bigIcon {
  width: 64px;
  height: 64px;
  flex: 0 0 64px;
}

.controller svg:active,
.controller svg:hover {
  opacity: 0.8;
  transition: all 0.6s;
}

.controller input {
  flex: 0 0 100px;
  width: 100px;
  position: relative;
  margin-left: -100px;
}

.smallIcon {
  margin: 0 !important;
}

.volumeBar {
  flex: 0;
  position: relative;
  opacity: 0.5;
  transition: opacity 0.6s;
}

.volumeBar:hover {
  opacity: 1;
  transition: opacity 0.6s;
}

.volumeBar .speakerIcon {
  opacity: 0.5;
  position: absolute;
  margin-top: -11px;
  margin-left: -25px;
  width: 24px;
  height: 24px;
}

.controller input[type="range"] {
  cursor: pointer;
  -webkit-appearance: none;
  appearance: none;
  padding: 0;
  background: transparent;
  font: inherit;
  font-size: 0;
  position: absolute;
  margin-top: -2px;
  margin-left: 0 !important;
}

::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  background-color: #fff;
  border-radius: 50%;
  margin-top: -4px;
}

::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  appearance: none;
  box-sizing: border-box;
  border: none;
  width: 100px;
  height: 6px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.5);
}

.mobileControll {
  width: 100vw;
  left: 0;
  bottom: 6vh;
  height: 20vw;
  margin: 0;
  padding: 0 4vw;
}

/* .mobileControll .smallIcon, */
.mobileControll .volumeBar {
  display: none;
}

.mobileControll path {
  transition: all 0.3s;
}

.mobileControll svg {
  height: 12vw;
  margin: 0;
  width: 12vw;
  flex: 0 0 12vw;
}

.mobileControll .smallIcon {
  flex: 0 0 8vw;
  width: 8vw;
  height: 8vw;
}

.mobileControll .bigIcon {
  height: 15vw;
  flex: 0 0 15vw;
  border-width: 0.5vw;
}
</style>
