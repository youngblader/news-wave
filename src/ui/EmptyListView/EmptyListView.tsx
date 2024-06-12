import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {ArticleDataError} from '../../models/ArticleDataError';
import {EmptyListViewProps} from './types';
import {styles} from './styles';

const EmptyListView: FC<EmptyListViewProps> = ({
  message = ArticleDataError.noData,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.messageText}>{message}</Text>
      </View>
    </View>
  );
};

export default EmptyListView;
