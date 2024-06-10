import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {UserI} from '../../interfaces';
import {PostCard} from './postCard';
import styles from './styles';

export const PostCardList = () => {
  const [posts, setPosts] = useState<UserI[]>([]);

  const setUsersData = useCallback(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  useEffect(() => {
    setUsersData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
