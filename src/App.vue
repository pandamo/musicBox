<template>
  <div id="app">

    <transition name='fade'>
      <loadingCover v-if='!inited && isMobile'></loadingCover>
    </transition>

    <!-- 左边播放列表 -->
    <list :sondList='sondList' :songId='curSongId' @changeSong='playSong' :isMobile='isMobile' :toggle='toggle' @toggleList='toggleList' />

    <!-- 右边播放器 -->

    <!-- 唱片-->
    <player :songInfo='curSongInfo' :cdStyle='cdStyle' :playing='playing' @swipeCd='goPlay' />

    <!-- 唱片样式切换 -->
    <changeRecordStyleBtn :cdStyle='cdStyle' @changeFromBtn='changeStyle' v-if='!isMobile' />

    <!-- 控制按钮 -->
    <controller :songId='curSongId' :url='curSongInfo.url' :isMobile='isMobile' @play="goPlay" :playWay='playWay' @canNotPlay='popToast' @toggleList='toggleList' />

    <svgBtn icoName='keyIcon' class='keyTips' @click='popToast("→：播下一首<br> ←：播上一首<br>↑ ：增加音量<br>↓ ：减少音量")' v-if='!isMobile' />

    <small class="author" v-if='!isMobile'>
      QQ: 1562714
      <br>weChat: Pandamo
      <br>pandamo@gmail.com
    </small>
    <small v-else style='position: fixed;  top: 2vw;  right: 2vw;  text-align: right;'>30CM.COM<br>MUSICBOX</small>

    <!--  toast -->
    <toast :msg='toastMessage' />
  </div>
</template>
<script setup>
import { computed, defineAsyncComponent, onBeforeUnmount, ref } from 'vue'
import songs from './assets/js/songList.js'
import loadingCover from './components/loadingCover.vue'
import list from './components/list.vue'
import changeRecordStyleBtn from './components/changeRecordStyleBtn.vue'
import controller from './components/controller.vue'
import toast from './components/toast.vue'
import svgBtn from './components/svgBtn.vue'

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
const player = isMobile ? defineAsyncComponent(() => import('./components/recordPlayerMobile.vue')) : defineAsyncComponent(() => import('./components/recordPlayer.vue'))
const createDefaultPlayWay = () => ({
  randomPlay: 0,
  normalPlay: 1,
  repeatOne: 0
})

const sondList = ref(songs)
const normalPlayList = ref([])
const randomPlayList = ref([])
const curSongIndex = ref(0)
const curSongId = ref('')
const cdStyle = ref(localStorage.getItem('cdStyle') ? JSON.parse(localStorage.getItem('cdStyle')) : true)
const playWay = ref(isMobile ? createDefaultPlayWay() : localStorage.getItem('payWay') ? JSON.parse(localStorage.getItem('payWay')) : createDefaultPlayWay())
const playing = ref(undefined)
const toastMessage = ref('')
const toggle = ref(false)
const inited = ref(false)
let toastTimer = null

const curSongInfo = computed(() => {
  return sondList.value.find(song => song.id === curSongId.value) || {}
})

const activePlayList = computed(() => {
  return playWay.value.randomPlay ? randomPlayList.value : normalPlayList.value
})

function toggleList() {
  toggle.value = !toggle.value
}

function getSongIndex(songId) {
  return sondList.value.findIndex(song => song.id === songId)
}

function syncCurrentSongIndex(songId = curSongId.value) {
  const songIndex = getSongIndex(songId)
  const playlistIndex = activePlayList.value.indexOf(songIndex)
  curSongIndex.value = playlistIndex >= 0 ? playlistIndex : 0
}

function updateCurrentSongByIndex() {
  const songIndex = activePlayList.value[curSongIndex.value] ?? 0
  curSongId.value = sondList.value[songIndex]?.id || ''
}

function playSong(songid) {
  curSongId.value = songid
  syncCurrentSongIndex(songid)
  playing.value = true
}

function goPlay(action) {
  switch (action) {
    case 'play':
      playing.value = true
      break
    case 'pause':
      playing.value = false
      break
    case 'next':
      curSongIndex.value = (curSongIndex.value + 1) % activePlayList.value.length
      updateCurrentSongByIndex()
      playing.value = true
      break
    case 'prev':
      curSongIndex.value = (curSongIndex.value - 1 + activePlayList.value.length) % activePlayList.value.length
      updateCurrentSongByIndex()
      playing.value = true
      break
    case 'randomPlay':
      playWay.value.randomPlay = 0
      playWay.value.normalPlay = 1
      playWay.value.repeatOne = 0
      syncCurrentSongIndex()
      break
    case 'normalPlay':
      playWay.value.randomPlay = 0
      playWay.value.normalPlay = 0
      playWay.value.repeatOne = 1
      break
    case 'repeatOne':
      playWay.value.repeatOne = 0
      playWay.value.randomPlay = 1
      playWay.value.normalPlay = 0
      createRandomList()
      syncCurrentSongIndex()
      break
  }
  savePlayWay()
}

function changeStyle() {
  cdStyle.value = !cdStyle.value
  localStorage.setItem('cdStyle', cdStyle.value)
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
  curSongIndex.value = 0
  updateCurrentSongByIndex()
}

function getLocalData() {
  if (localStorage.getItem('payWay')) {
    playWay.value = JSON.parse(localStorage.getItem('payWay'))
  }
  createPlayList(sondList.value.length)
  if (playWay.value.randomPlay) {
    syncCurrentSongIndex()
  }
  inited.value = true
}

function savePlayWay() {
  localStorage.setItem('payWay', JSON.stringify(playWay.value))
}

function popToast(message) {
  toastMessage.value = message
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => {
    toastMessage.value = ''
  }, 2000)
}

getLocalData()

onBeforeUnmount(() => {
  clearTimeout(toastTimer)
})
</script>

<style src='./assets/css/musicbox163.css'></style>
