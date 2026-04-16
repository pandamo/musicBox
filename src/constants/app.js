export const MOBILE_REGEXP = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i

export const PLAY_MODES = {
  NORMAL: 'normal',
  REPEAT_ONE: 'repeat-one',
  RANDOM: 'random'
}

export const STORAGE_KEYS = {
  CD_STYLE: 'cdStyle',
  PLAY_MODE: 'playMode',
  PLAY_MODE_LEGACY: 'payWay',
  VOLUME: 'volume'
}

export function isMobileDevice(userAgent = navigator.userAgent) {
  return MOBILE_REGEXP.test(userAgent)
}
