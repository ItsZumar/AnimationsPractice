import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import axios from 'axios';
import {Product} from '../interfaces';
import {Colors} from '../theme';

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderProduct = ({item}: {item: Product}) => (
    <View style={styles.itemContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={{uri: item.images[0]}} style={styles.image} />
        <View>
          <Text style={styles.itemTitle}>{item.category}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
      </View>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 10,
    backgroundColor: Colors.BACKGROUND_COLOR,
    marginBottom: 10,
    borderRadius: 10,
    // borderBottomWidth: 1,
    // borderBottomColor: '#ccc',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    color: '#000',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
