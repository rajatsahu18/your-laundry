import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  cleanCart,
  decrementQuantity,
  incrementQuantity,
} from "../redux/CartReducer";
import { decrementQty, incrementQty } from "../redux/ProductReducer";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { styles } from "./styles/cartStyles";
import { TEXT } from "../utils/constant";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const route = useRoute();
  const deliveryCharge = 20
  const itemTotal = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const total = itemTotal + deliveryCharge;
  const navigation = useNavigation();
  const userUid = auth.currentUser.uid;
  const dispatch = useDispatch();

  const placeOrder = async () => {
    navigation.navigate("Order");
    dispatch(cleanCart());
    await setDoc(doc(db, "users", `${userUid}`), {
      orders: { ...cart },
      pickUpDetails: route.params,
    });
  };

  return (
    <>
      <ScrollView style={styles.cartScroll}>
        {total === 0 ? (
          <View style={styles.cartEmptyView}>
            <Text style={styles.cartText}>{TEXT.EMPTY_CART}</Text>
          </View>
        ) : (
          <>
            <View style={styles.cartHeader}>
              <Ionicons
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={24}
                color="black"
              />
              <Text>{TEXT.YOUR_BUCKET}</Text>
            </View>

            <TouchableOpacity style={styles.cartItems}>
              {cart?.map((item, index) => (
                <View style={styles.cartItemsView} key={index}>
                  <Text style={styles.itemName}>{item.name}</Text>

                  {/* - + button */}
                  <TouchableOpacity style={styles.quantityPressable}>
                    <TouchableOpacity
                      onPress={() => {
                        dispatch(decrementQuantity(item)); // cart
                        dispatch(decrementQty(item)); // product
                      }}
                    >
                      <Text style={styles.quantitySign}>-</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Text style={styles.quantity}>{item.quantity}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => {
                        dispatch(incrementQuantity(item)); // cart
                        dispatch(incrementQty(item)); //product
                      }}
                    >
                      <Text style={styles.quantitySign}>+</Text>
                    </TouchableOpacity>
                  </TouchableOpacity>

                  <Text style={styles.quantityAndPrice}>
                    ₹ {item.price * item.quantity}
                  </Text>
                </View>
              ))}
            </TouchableOpacity>

            <View style={styles.billingView}>
              <Text style={styles.billingText}>{TEXT.BILLING_ADDRESS}</Text>
              <View style={styles.billingCard}>
                <View style={styles.billingCardView}>
                  <Text style={styles.itemTotalText}>{TEXT.ITEM_TOTAL}</Text>
                  <Text style={styles.total}>₹ {itemTotal}</Text>
                </View>

                {itemTotal >= 100 ? (
                  <View style={styles.freeDeliveryView}>
                    <Text style={styles.freeDeliveryText}>
                      {TEXT.FREE_DELIVERY_TEXT}
                    </Text>
                  </View>
                ) : (
                  <View style={styles.billingCardView}>
                    <Text style={styles.itemTotalText}>{TEXT.DELIVERY_CHARGES}</Text>
                    <Text style={styles.total}>₹ {deliveryCharge}</Text>
                  </View>
                )}

                <View style={styles.timeDateCard} />

                <View style={styles.timeDateCardView}>
                  <Text style={styles.dateText}>{TEXT.SELECTED_DATE}</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#007AFF",
                    }}
                  >
                    {route.params.pickUpDate.toLocaleDateString()}
                  </Text>
                </View>

                <View style={styles.daysView}>
                  <Text style={styles.noOfDaysText}>{TEXT.NO_OF_DAYS}</Text>

                  <Text style={styles.noOfDays}>{route.params.no_Of_days}</Text>
                </View>

                <View style={styles.timeView}>
                  <Text style={styles.timeText}>{TEXT.SELECTED_TIME}</Text>

                  <Text style={styles.selectedTime}>
                    {route.params.selectedTime}
                  </Text>
                </View>
                <View style={styles.line} />

                <View style={styles.payView}>
                  <Text style={styles.pay}>{TEXT.TO_PAY}</Text>
                  {itemTotal >= 100 ? <Text style={styles.totalPay}> ₹ {itemTotal}</Text> : <Text style={styles.totalPay}> ₹ {total}</Text>}
                </View>
              </View>
            </View>
          </>
        )}
      </ScrollView>

      {total === 0 ? null : (
        <TouchableOpacity style={styles.totalButton} onPress={placeOrder}>
          <View>
            <Text style={styles.totalItemAndPrice}>
              {cart.length} items | ₹ {total}
            </Text>
          </View>

          <View>
            <Text style={styles.proceed}>{TEXT.PLACE_ORDER}</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CartScreen;
