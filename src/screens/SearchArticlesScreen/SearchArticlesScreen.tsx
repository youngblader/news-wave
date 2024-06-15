import React, {FC} from 'react';
import {View} from 'react-native';

import {Header} from '../../components';
import {SearchArticlesResults} from '../../modules';

import {styles} from './styles';

const SearchArticlesScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchArticlesResults />
    </View>
  );
};

export default SearchArticlesScreen;
