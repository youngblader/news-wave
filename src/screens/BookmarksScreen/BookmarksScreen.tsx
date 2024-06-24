import React, {FC} from 'react';
import {View} from 'react-native';

import {ArticlesList, Header} from '../../components';
import {useBookmarks} from '.';

import {styles} from './styles';

const BookmarksScreen: FC = () => {
  const {articles, presentArticleDetailsScreen} = useBookmarks();

  return (
    <View style={styles.container}>
      <Header />

      <ArticlesList
        data={articles}
        isLoading={false}
        onPress={presentArticleDetailsScreen}
      />
    </View>
  );
};

export default BookmarksScreen;
