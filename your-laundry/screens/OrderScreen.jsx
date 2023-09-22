import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { TEXT } from '../utils/constant';

const OrderPlacedPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="fadeInDown"
        style={styles.title}
      >
        {TEXT.ORDER_PLACED}
      </Animatable.Text>
      
      <Animatable.View
        animation="bounceIn"
        style={styles.successIcon}
      >
        <Text>✔️</Text>
      </Animatable.View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>{TEXT.BACK_HOME}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  successIcon: {
    fontSize: 64,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default OrderPlacedPage;
