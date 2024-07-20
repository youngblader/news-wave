import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    backgroundColor: colors.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  backButtonIcon: {
    width: 24,
    height: 24,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  logoTitle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
  },
});
