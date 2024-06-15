import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  flatlistInsets: {
    flexGrow: 1,
    paddingBottom: 40,
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  separator: {
    marginTop: 30,
    marginBottom: 20,
    height: 1,
    backgroundColor: colors.lightGray,
  },
  listEmptyContainer: {
    flex: 1,
    alignItems: 'center',
  },
  loader: {
    flex: 1,
  },
});
