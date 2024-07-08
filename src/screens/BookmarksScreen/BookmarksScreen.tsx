import React, {FC} from 'react';
import {View} from 'react-native';

import {Header} from '../../ui';
import {ArticlesList} from '../../components';

import {useBookmarks} from '.';
import {styles} from './styles';

const BookmarksScreen: FC = () => {
  const {articles, navigateArticleDetails} = useBookmarks();

  return (
    <View style={styles.container}>
      <Header />

      <ArticlesList
        data={articles}
        isLoading={false}
        onPress={navigateArticleDetails}
      />
    </View>
  );
};

export default BookmarksScreen;
