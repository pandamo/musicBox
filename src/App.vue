<template>
  <div id="app">

    <transition name='fade'>
      <loadingCover v-if='!inited && isMobile'></loadingCover>
    </transition>

    <list :songList='songList' :songId='currentSongId' @changeSong='playSong' :isMobile='isMobile' :toggle='toggle' @toggleList='toggleList' />

    <player :songInfo='currentSongInfo' :cdStyle='cdStyle' :playing='playing' @swipeCd='goPlay' />

    <changeRecordStyleBtn :cdStyle='cdStyle' @changeFromBtn='changeStyle' v-if='!isMobile' />

    <controller
      :songId='currentSongId'
      :url='currentSongInfo.url'
      :isMobile='isMobile'
      :playMode='playMode'
      @togglePlay='togglePlay'
      @next='goPlay("next")'
      @prev='goPlay("prev")'
      @cyclePlayMode='cyclePlayMode'
      @playingChange='updatePlayingState'
      @canNotPlay='popToast'
      @toggleList='toggleList'
    />

    <svgBtn icoName='keyIcon' class='keyTips' @click='popToast("→：播下一首<br> ←：播上一首<br>↑ ：增加音量<br>↓ ：减少音量")' v-if='!isMobile' />

    <small class="author" v-if='!isMobile'>
      QQ: 1562714
      <br>weChat: Pandamo
      <br>pandamo@gmail.com
    </small>
    <small v-else style='position: fixed;  top: 2vw;  right: 2vw;  text-align: right;'>30CM.COM<br>MUSICBOX</small>

    <toast :msg='toastMessage' />
  </div>
</template>
<script setup>
import { computed, defineAsyncComponent, ref } from 'vue'
import songs from './assets/js/songList.js'
import loadingCover from './components/loadingCover.vue'
import list from './components/list.vue'
import changeRecordStyleBtn from './components/changeRecordStyleBtn.vue'
import controller from './components/controller.vue'
import toast from './components/toast.vue'
import svgBtn from './components/svgBtn.vue'
import { PLAY_MODES, STORAGE_KEYS, isMobileDevice } from './constants/app.js'

const isMobile = isMobileDevice()
const player = isMobile
  ? defineAsyncComponent(() => import('./components/recordPlayerMobile.vue'))
  : defineAsyncComponent(() => import('./components/recordPlayer.vue'))

const songList = ref(songs)
const normalPlayList = ref([])
const randomPlayList = ref([])
const currentSongIndex = ref(0)
const currentSongId = ref('')
const cdStyle = ref(getStoredCdStyle())
const playMode = ref(getStoredPlayMode())
const playing = ref(false)
const toastMessage = ref('')
const toggle = ref(false)
const inited = ref(false)

const songMap = computed(() => {
  const map = new Map()
  songList.value.forEach((song) => {
    map.set(song.id, song)
  })
  return map
})

const songIndexMap = computed(() => {
  const map = new Map()
  songList.value.forEach((song, index) => {
    map.set(song.id, index)
  })
  return map
})

const currentSongInfo = computed(() => songMap.value.get(currentSongId.value) || {})

const activePlayList = computed(() => {
  return playMode.value === PLAY_MODES.RANDOM ? randomPlayList.value : normalPlayList.value
})

function getStoredCdStyle() {
  const storedCdStyle = localStorage.getItem(STORAGE_KEYS.CD_STYLE)
  return storedCdStyle ? JSON.parse(storedCdStyle) : true
}

function normalizeLegacyPlayMode(legacyPlayMode) {
  if (!legacyPlayMode || typeof legacyPlayMode !== 'object') {
    return PLAY_MODES.NORMAL
  }
  if (legacyPlayMode.randomPlay) {
    return PLAY_MODES.RANDOM
  }
  if (legacyPlayMode.repeatOne) {
    return PLAY_MODES.REPEAT_ONE
  }
  return PLAY_MODES.NORMAL
}

function getStoredPlayMode() {
  const storedPlayMode = localStorage.getItem(STORAGE_KEYS.PLAY_MODE)
  if (storedPlayMode && Object.values(PLAY_MODES).includes(storedPlayMode)) {
    return storedPlayMode
  }

  const legacyPlayMode = localStorage.getItem(STORAGE_KEYS.PLAY_MODE_LEGACY)
  return normalizeLegacyPlayMode(legacyPlayMode ? JSON.parse(legacyPlayMode) : null)
}

function toggleList() {
  toggle.value = !toggle.value
}

function getSongIndex(songId) {
  return songIndexMap.value.get(songId) ?? -1
}

function syncCurrentSongIndex(songId = currentSongId.value) {
  const songIndex = getSongIndex(songId)
  const playListIndex = activePlayList.value.indexOf(songIndex)
  currentSongIndex.value = playListIndex >= 0 ? playListIndex : 0
}

function updateCurrentSongByIndex() {
  const songIndex = activePlayList.value[currentSongIndex.value] ?? 0
  currentSongId.value = songList.value[songIndex]?.id || ''
}

function playSong(songId) {
  currentSongId.value = songId
  syncCurrentSongIndex(songId)
  playing.value = true
}

function updatePlayingState(nextPlaying) {
  playing.value = nextPlaying
}

function togglePlay() {
  playing.value = !playing.value
}

function goPlay(action) {
  switch (action) {
    case 'next':
      currentSongIndex.value = (currentSongIndex.value + 1) % activePlayList.value.length
      updateCurrentSongByIndex()
      playing.value = true
      break
    case 'prev':
      currentSongIndex.value = (currentSongIndex.value - 1 + activePlayList.value.length) % activePlayList.value.length
      updateCurrentSongByIndex()
      playing.value = true
      break
  }
}

function cyclePlayMode() {
  if (playMode.value === PLAY_MODES.NORMAL) {
    playMode.value = PLAY_MODES.REPEAT_ONE
  } else if (playMode.value === PLAY_MODES.REPEAT_ONE) {
    playMode.value = PLAY_MODES.RANDOM
    createRandomList()
    syncCurrentSongIndex()
  } else {
    playMode.value = PLAY_MODES.NORMAL
    syncCurrentSongIndex()
  }
  savePlayMode()
}

function changeStyle() {
  cdStyle.value = !cdStyle.value
  localStorage.setItem(STORAGE_KEYS.CD_STYLE, JSON.stringify(cdStyle.value))
}

function shuffle(arr) {
  const randomArray = [...arr]
  for (let index = randomArray.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[randomArray[index], randomArray[randomIndex]] = [randomArray[randomIndex], randomArray[index]]
  }
  return randomArray
}

function createRandomList() {
  randomPlayList.value = shuffle(normalPlayList.value)
}

function createPlayList(length) {
  normalPlayList.value = Array.from({ length }, (_, index) => index)
  createRandomList()
  currentSongIndex.value = 0
  updateCurrentSongByIndex()
}

function initializeApp() {
  createPlayList(songList.value.length)
  if (playMode.value === PLAY_MODES.RANDOM) {
    syncCurrentSongIndex()
  }
  inited.value = true
}

function savePlayMode() {
  localStorage.setItem(STORAGE_KEYS.PLAY_MODE, playMode.value)
}

function popToast(message) {
  toastMessage.value = message
}

initializeApp()
</script>

<style src='./assets/css/musicbox163.css'></style>
