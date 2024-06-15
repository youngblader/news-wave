import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  newsImage: {
    width: 137,
    height: 140,
  },
  bottomCategoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topicCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuIcon: {
    height: 24,
    width: 24,
  },
  categoryText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.mainBlue,
  },
  grayCircle: {
    marginHorizontal: 10,
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: colors.gray,
  },
  text: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.gray,
    fontWeight: '500',
  },
  newsTextTitle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
  },
});
