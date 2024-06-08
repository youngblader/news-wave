import {RouteProp, useRoute as useAppRoute} from '@react-navigation/native';
import {NavigationScreens} from '../../navigation/types';

export const useRoute = (key: keyof NavigationScreens) => {
  return useAppRoute<RouteProp<NavigationScreens, typeof key>>();
};
