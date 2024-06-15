import React, {FC} from 'react';
import {View} from 'react-native';

import {Header} from '../../components';
import {BookmarksArticlesList} from '../../modules';

import {styles} from './styles';

const BookmarksScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <BookmarksArticlesList />
    </View>
  );
};

export default BookmarksScreen;
