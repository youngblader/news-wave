import React, {FC} from 'react';
import {FlatList, View} from 'react-native';

import {ArticleCategoryItem} from '../../ui';
import {ArticlesList, Header} from '../../components';
import {useArticles} from '.';

import {styles} from './styles';

const ArticlesScreen: FC = () => {
  const {
    ref,
    data,
    isLoading,
    categories,
    selectedArticle,
    onArticlePress,
    presentArticleDetailsScreen,
  } = useArticles();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.container}>
        <View style={styles.content}>
          <FlatList
            data={categories}
            ref={ref}
            horizontal={true}
            style={styles.list}
            contentContainerStyle={styles.flatlistInsets}
            renderItem={({item, index}) => {
              return (
                <ArticleCategoryItem
                  category={item}
                  isSelectedItem={selectedArticle === item}
                  onPress={() => onArticlePress(item, index)}
                />
              );
            }}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={renderItemSeparator}
            keyExtractor={item => item}
          />
        </View>

        <View style={styles.flexContainer}>
          <ArticlesList
            isLoading={isLoading}
            data={data?.results || []}
            onPress={presentArticleDetailsScreen}
          />
        </View>
      </View>
    </View>
  );
};

const renderItemSeparator: FC = () => <View style={styles.separator} />;

export default ArticlesScreen;
