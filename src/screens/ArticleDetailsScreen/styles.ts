import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
  },
  scrollViewContainer: {
    paddingBottom: 40,
  },
  articlePreview: {
    height: 229,
    width: '100%',
  },
  articleBody: {
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '500',
  },
  articleTitle: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 18,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  topOffset: {
    marginTop: 15,
  },
  text: {
    fontSize: 13,
    lineHeight: 20,
    color: colors.gray,
    fontWeight: '500',
  },
  articleCategory: {
    padding: 5,
    backgroundColor: colors.mainBlue,
    borderRadius: 4,
    opacity: 0.7,
  },
  articleCategoryText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  articleCreatorDateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  separator: {
    marginRight: 10,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
  },
});
