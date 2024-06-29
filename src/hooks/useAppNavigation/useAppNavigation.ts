import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamsList} from '../../navigation/types';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamsList>>();
};
