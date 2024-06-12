import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    height: 40,
    justifyContent: 'flex-start',
    paddingRight: 16,
    borderRadius: 40,
    paddingHorizontal: 16,
    marginHorizontal: 16,
  },
  searchBarIcon: {
    width: 17,
    height: 17,
  },
  searchBar: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    fontWeight: '500',
  },
});
