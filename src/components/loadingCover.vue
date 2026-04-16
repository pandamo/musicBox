<template>
 <div class='loadingCover'>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
      <g fill="none" stroke="#fff" stroke-width="1.5">
        <circle cx="16" cy="16" r="14" />
        <circle cx="16" cy="16" r="4" />
      </g>
        <path d="M13 5a11.4 11.4 0 0 1 11.2 2.9m-1.8 1.8a9 9 0 0 0-8.8-2.4m.7 2.4a6.5 6.5 0 0 1 6.3 1.7M19 27a11.4 11.4 0 0 1-11.2-2.9m1.8-1.8a9 9 0 0 0 8.8 2.4m-.7-2.4a6.5 6.5 0 0 1-6.3-1.7" fill="none" stroke="#fff" stroke-linecap="round" />
      </svg>
 </div>
</template>
<style>
.loadingCover{
  background-color: #000;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loadingCover svg{
  width: 50vw;
  margin-top: -5vh;
  animation:upAndDown 2s infinite ease-in-out;
}
.loadingCover svg path{
  transform-origin: center;
  animation:roll 2s infinite linear;
}

@keyframes upAndDown {
  50% {
    transform: translateY(5vh);
  }
}
@-webkit-keyframes upAndDown {
  50% {
    -webkit-transform:translateY(5vh);
  }
}
</style>
