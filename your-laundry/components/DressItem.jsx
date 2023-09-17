import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";
import { styles } from "./dressItemStyles";

const DressItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const addItemToCart = () => {
    dispatch(addToCart(item)); // cart
    dispatch(incrementQty(item)); // product
  };
  return (
    <View>
      <TouchableOpacity style={styles.productCard}>
        <View>
          <Image style={styles.productImage} source={{ uri: item.image }} />
        </View>

        <View>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>₹ {item.price}</Text>
        </View>

        {cart?.some((c) => c.id === item.id) ? (
          <TouchableOpacity style={styles.quantityButton}>
            <TouchableOpacity
              onPress={() => {
                dispatch(decrementQuantity(item)); // cart
                dispatch(decrementQty(item)); // product
              }}
              style={styles.quantityPressable}
            >
              <Text style={styles.quantitySign}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.totalQuantity}>{item.quantity}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                dispatch(incrementQuantity(item)); // cart
                dispatch(incrementQty(item)); //product
              }}
              style={styles.quantityPressable}
            >
              <Text style={styles.quantitySign}>+</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={addItemToCart} style={styles.addButtonPress}>
            <Text style={styles.addButton}>Add</Text>
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DressItem;
