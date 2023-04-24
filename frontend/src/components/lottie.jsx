import React from 'react'
import Lottie from 'react-lottie-player';
import animation from '../resources/animation.json';

export default function MyLottieAnimation(props) {
  return <Lottie animationData={animation} {...props} />;
}
