import {RouteProp, useRoute as useAppRoute} from '@react-navigation/native';
import {AppStackParamsList} from '../../navigation/types';

export const useRoute = <T extends keyof AppStackParamsList>(_: T) => {
  return useAppRoute<RouteProp<AppStackParamsList, T>>();
};
