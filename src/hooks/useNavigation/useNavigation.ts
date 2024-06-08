import {
  NavigationProp,
  useNavigation as useAppNavigation,
} from '@react-navigation/native';
import {RootStackParamsList} from '../../navigation/types';

export const useNavigation = () => {
  return useAppNavigation<NavigationProp<RootStackParamsList>>();
};
