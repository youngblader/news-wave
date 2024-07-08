import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#D9EFF9',
    height: 50,
    paddingRight: 16,
    borderRadius: 10,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    opacity: 0.5,
  },
  searchBarIcon: {
    width: 20,
    height: 20,
  },
  searchBar: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    fontWeight: '500',
    color: colors.black,
  },
});
