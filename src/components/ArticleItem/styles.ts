import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: colors.backgroundBlue,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  newsImage: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: '100%',
    height: 160,
    borderRadius: 8,
    backgroundColor: colors.gray,
  },
  bottomCategoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 13,
  },
  dateContainer: {
    alignSelf: 'flex-end',
  },
  categoryText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.white,
  },
  text: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.gray,
    fontWeight: '500',
  },
  categoryContainer: {
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  creator: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.gray,
    fontWeight: '500',
    maxWidth: 220,
  },
  creatorContainer: {
    alignContent: 'center',
    alignSelf: 'flex-start',
  },
  newsTextTitle: {
    marginTop: 12,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
  },
});
