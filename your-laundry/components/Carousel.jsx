import { View } from 'react-native'
import React from 'react'
import { SliderBox } from "react-native-image-slider-box";
import { carouselImages } from '../utils/constant';

const Carousel = () => {
    
  return (
    <View>
      <SliderBox
        images={carouselImages}
        autoPlay
        circleLoop
        dotColor="#13274F"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
        }}
      />
    </View>
  )
}

export default Carousel