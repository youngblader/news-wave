import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  flexContainer: {
    flex: 1,
  },
  flatlistInsets: {
    flexGrow: 1,
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  separator: {
    width: 10,
  },
});
