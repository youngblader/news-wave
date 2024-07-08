import {RouteProp, useRoute} from '@react-navigation/native';
import {AppStackParamsList} from '../../types';

export const useAppRoute = <T extends keyof AppStackParamsList>(_: T) => {
  return useRoute<RouteProp<AppStackParamsList, T>>();
};
