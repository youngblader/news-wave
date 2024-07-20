import React, {FC} from 'react';
import Animated, {
  FadeIn,
  runOnJS,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import {PressableScaleProps} from './types';

export const PressableScale: FC<PressableScaleProps> = ({
  style,
  children,
  onPress = () => {},
}) => {
  const scaleAnimation = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{scale: scaleAnimation.value}],
  }));

  const tap = Gesture.Tap()
    .maxDuration(10000)
    .onTouchesDown(() => {
      scaleAnimation.value = withTiming(0.94, {
        duration: 200,
        easing: Easing.linear,
      });
    })
    .onTouchesUp(() => {
      if (onPress) {
        runOnJS(onPress)();
      }
    })
    .onFinalize(() => {
      scaleAnimation.value = withTiming(1, {
        duration: 200,
        easing: Easing.linear,
      });
    });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View
        style={[style, animatedStyles]}
        entering={FadeIn.duration(400).delay(400)}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};
