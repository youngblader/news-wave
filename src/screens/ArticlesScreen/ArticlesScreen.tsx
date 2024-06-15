import React, {FC} from 'react';
import {View} from 'react-native';

import {Header} from '../../components';
import {ArticleCategoriesList} from '../../modules';

import {styles} from './styles';

const ArticlesScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ArticleCategoriesList />
    </View>
  );
};

export default ArticlesScreen;
