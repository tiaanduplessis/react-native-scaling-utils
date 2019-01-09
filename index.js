import { Dimensions, PixelRatio, Platform } from 'react-native' // eslint-disable-line import/no-unresolved,max-len

let { height: screenHeight, width: screenWidth } = Dimensions.get('window')

const DEFAULT_FACTOR = 1
const DEFAULT_IOS_WIDTH = 320

Dimensions.addEventListener('change', updateDimensions)

function removeDimensionsListener() {
  Dimensions.removeEventListener('change', updateDimensions)
}

function updateDimensions(newDimensions) {
  const { width, height } = newDimensions.window
  screenHeight = height
  screenWidth = width
}

function getScale(percentage, base, factor = DEFAULT_FACTOR) {
  percentage = (typeof percentage === 'string' ? Number(percentage) : percentage) / 100
  return PixelRatio.roundToNearestPixel(base * percentage) * factor
}

const scale = {
  font(size) {
    // getFontScale android only
    if (Platform.OS === 'ios') {
      return (screenWidth / DEFAULT_IOS_WIDTH) * size
    }

    return PixelRatio.getFontScale() * size
  },

  width(percentage, factor) {
    return getScale(percentage, screenWidth, factor)
  },

  height(percentage, factor) {
    return getScale(percentage, screenHeight, factor)
  },
}

function isPortrait() {
  return screenHeight > screenWidth
}

function isLandscape() {
  return !isPortrait()
}

export default {
  screenHeight,
  screenWidth,
  scale,
  isPortrait,
  isLandscape,
  removeDimensionsListener,
}
