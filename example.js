import {
    screenHeight, 
    screenWidth,
    scale,
    isPortrait,
    isLandscape,
    removeDimensionsListener
} from 'react-native-scaling-utils'

console.log(screenHeight)
console.log(screenWidth)
console.log(scale.font(10))
console.log(scale.height(10)) // 10%
console.log(scale.width(50)) // 50%
console.log(isPortrait) 
console.log(isLandscape)
removeDimensionsListener()
