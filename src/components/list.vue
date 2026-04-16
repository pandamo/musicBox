<template>
  <div>
    <svg v-if="!isMobile" class="listIcon" @click='toggleShow' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 18h10v2H2zm0-7h14v2H2zm0-7h20v2H2zm17 11.17V9h5v2h-3v7a3 3 0 1 1-2-2.83M18 19a1 1 0 1 0 0-2a1 1 0 0 0 0 2" />
    </svg>
    <div :class='[isMobile ? "mobileList" : "list", { "toggle": toggle }]' @click='toggleShow'>
      <ul class="playList">
        <li
          v-for='song in songList'
          :key='song.id'
          :ref='setSongItemRef(song.id)'
          @click.stop='playThis(song.id)'
          :class='{ playing: songId == song.id }'
        >
          {{ song.name }} <small>{{ artists(song.artist) }}</small>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { nextTick, ref, watch } from 'vue'

const props = defineProps({
  songList: {
    type: Array,
    default: () => []
  },
  songId: {
    type: [String, Number],
    default: ''
  },
  isMobile: {
    type: Boolean,
    default: false
  },
  toggle: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['toggleList', 'changeSong'])
const songItemRefs = ref(new Map())

function artists(artists) {
  if (artists) {
    return ' - ' + artists.map(v => v.name).join(',')
  }
  return ''
}

function toggleShow() {
  emit('toggleList')
}

function playThis(id) {
  emit('changeSong', id)
}

function setSongItemRef(songId) {
  return (element) => {
    if (element) {
      songItemRefs.value.set(songId, element)
    } else {
      songItemRefs.value.delete(songId)
    }
  }
}

function autoScroll() {
  nextTick(() => {
    songItemRefs.value
      .get(props.songId)
      ?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  })
}

watch(() => props.songId, () => {
  autoScroll()
})

watch(() => props.toggle, (val) => {
  if (val) {
    autoScroll()
  }
})
</script>
<style>
.list {
  position: fixed;
  top: 2vh;
  height: 0;
  left: 7vw;
  overflow: hidden;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 1vw;
  width: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
}

.list.toggle {
  width: 20vw;
  height: 70vh;
  padding: 10px;
}




.list li {
  -webkit-user-select: none;
  user-select: none;
  padding: 0;
  margin: 0;
  list-style: none;
}

.list ul {
  display: none;
  height: 100%;
  overflow: auto;
}

.list.toggle ul {
  display: block;
}

.list li,
.mobileList li {
  white-space: nowrap;
  word-break: keep-all;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  padding: 0.3em 1em;
}

.list li:hover,
.list li:active {
  background-color: rgba(0, 0, 0, 0.2);
}

.playing {
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff !important;
}

.mobileList svg {
  display: block;
  margin: 2vw 0 0 52vw;
  transition: margin 0.3s;
}

/* .toggle{width:100vw;left:0}
.toggle svg{margin-left: 38vw !important;transition:margin .5s;background-color: transparent}
.toggle line{opacity:0;transform: rotate(0deg)}
.toggle line:first-child{transform: rotate(45deg);transform-origin:center;transition:all .3s;  transform-box: fill-box;opacity:1}
.toggle line:last-child{transform: rotate(-45deg);transform-origin:center;transition:all .3s;  transform-box: fill-box;opacity:1} */
.mobileList {
  position: fixed;
  width: 100vw;
  left: 0;
  top: 100vh;
  bottom: 0;
  /* transform: translateY(100vh); */
  z-index: 9999;
  overflow: hidden;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0) !important;
  box-shadow: none !important;
  transition: opacity 0.3s ease-in-out;
}

.mobileList ul {
  position: fixed;
  top: 0;
  height: 70vh;
  width: 100vw;
  transform: translateY(100vh);
  overflow: auto;
  background-color: #fff;
  border-radius: 5vw 5vw 0 0;
  left: 0;
  right: 0;
  padding: 5vw 3vw;
  transition: transform 0.5s ease-in;
}

.mobileList.toggle {
  top: 0;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7) !important;
  transition: opacity 0.3s ease-in-out;
}

.mobileList.toggle ul {
  transform: translateY(30vh);
}


.toggle::after {
  display: block;
}

.mobileList li {
  text-shadow: none;
  color: #222;
  padding: 2vw 3vw;
}

.mobileList small {
  color: #b3b3b3;
}

.mobileList .playing {
  background-color: #efefef;
  color: initial !important;
  border-radius: 10vw;
}

.mobileList #upDownArrow {
  display: none;
}



#upDownArrow:hover path {
  stroke: #fff
}




#upDownArrow path {
  transition: all .2s ease-in-out;
}

.expend #upDownArrow path {
  d: path('M70,20 L30,50 L70,80')
}

#upDownArrow {
  width: 20px;
  height: 20px;
  opacity: .3;
}


#upDownArrow:hover {
  opacity: 1;
}

.listIcon {
  position: fixed;
  width: 4vw;
  height: 4vw;
  max-width: 48px;
  max-width: 48px;
  top: 2vh;
  left: 2vw;
  z-index: 999;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.5);
}

.listIcon:hover {
  color: rgba(0, 0, 0, 1);
}
</style>
