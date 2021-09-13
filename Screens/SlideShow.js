import {FlatListSlider} from 'react-native-flatlist-slider';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Dimensions,
  PixelRatio,
  SafeAreaView,
} from 'react-native';
import Preview from './ImageView';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function SlideShow(){

  const images = [
    {
      image:
        'https://images.unsplash.com/photo-1536238202089-6ce355328a96?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZGFpcnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=400&q=60',
      desc: 'Taste the goodness of Dairy Power',
    },
    {
      image:
        'https://images.unsplash.com/photo-1579705745811-a32bef7856a3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhbnN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=400&q=80',
      desc:
        'Eat Right and Light. These pulses For You.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhdGlvbmVyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=400&q=80',
      desc:
        'Your office, our stationery: perfect fit!',
    },
    {
      image:
        'https://images.unsplash.com/photo-1578157783804-ac9f4405ec63?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fA%3D%3D&w=400&q=80',
      desc:
        'For a good life, have a good bite…',
    },
    {
      image:
        'https://i.imgur.com/vmrMEci.jpg',
      desc:
        'The best snack, just a click away!',
    },
   ]

   return (
     <SafeAreaView>
    <FlatListSlider
    data={images}
    width={0}
    timer={5000}
    component={<Preview />}
    onPress={item => alert(JSON.stringify(item))}
    indicatorContainerStyle={{opacity: 0}}
    contentContainerStyle={{paddingHorizontal: 0}}
  />

 {/* <FlatListSlider
    data={images}
    height={240}
    timer={5000}
    onPress={item => alert(JSON.stringify(item))}
    contentContainerStyle={{paddingHorizontal: 0}}
    indicatorContainerStyle={{position:'absolute', bottom: 20}}
    // indicatorActiveColor={'#8e44ad'}
    // indicatorInActiveColor={'#ffffff'}
    // indicatorActiveWidth={30}
    animation
  /> */}

</SafeAreaView>
  
   )

}

export default SlideShow;