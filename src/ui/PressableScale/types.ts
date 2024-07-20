import {ViewStyle} from 'react-native';

export type PressableScaleProps = {
  style?: ViewStyle;
  onPress?: () => void;
  children?: React.ReactNode;
};
