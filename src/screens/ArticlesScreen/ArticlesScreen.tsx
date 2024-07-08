import React, {FC} from 'react';
import {FlatList, View} from 'react-native';

import {Header} from '../../ui';
import {ArticlesList, ArticleCategoryItem} from '../../components';
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
    navigateArticleDetails,
  } = useArticles();

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.container}>
        <View>
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
            onPress={navigateArticleDetails}
          />
        </View>
      </View>
    </View>
  );
};

const renderItemSeparator: FC = () => <View style={styles.separator} />;

export default ArticlesScreen;
