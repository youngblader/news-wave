import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const screenHeight = height;
export const screenWidth = width;

export const colors = {
  primary: '#2ABAFF',
  gray: '#909090',
  lightGray: '#EEEEEE',
  black: '#000000',
  white: '#FFFFFF',
  red: '#FE3B30',
  backgroundBlue: '#F9FCFE',
};

export const hitSlop = {
  top: 12,
  bottom: 12,
  left: 12,
  right: 12,
};
