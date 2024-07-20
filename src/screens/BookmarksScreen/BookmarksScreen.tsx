import React, {FC} from 'react';
import {View} from 'react-native';

import {ArticlesList} from '../../components';

import {useBookmarks} from '.';
import {styles} from './styles';

const BookmarksScreen: FC = () => {
  const {articles} = useBookmarks();

  return (
    <View style={styles.container}>
      <ArticlesList data={articles} isLoading={false} />
    </View>
  );
};

export default BookmarksScreen;
