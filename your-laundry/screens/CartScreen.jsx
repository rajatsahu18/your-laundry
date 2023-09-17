import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  cleanCart,
  decrementQuantity,
  incrementQuantity,
} from "../CartReducer";
import { decrementQty, incrementQty } from "../ProductReducer";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { styles } from "./styles/cartStyles";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const route = useRoute();
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();
  const userUid = auth.currentUser.uid;
  const dispatch = useDispatch();
  const placeOrder = async () => {
    navigation.navigate("Order");
    dispatch(cleanCart());
    await setDoc(
      doc(db, "users", `${userUid}`),
      {
        orders: { ...cart },
        pickUpDetails: route.params,
      },
      {
        merge: true,
      }
    );
  };
  return (
    <>
      <ScrollView style={styles.cartScroll}>
        {total === 0 ? (
          <View style={styles.cartEmptyView}>
            <Text style={styles.cartText}>Your cart is empty</Text>
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
              <Text>Your Bucket</Text>
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
              <Text style={styles.billingText}>Billing Details</Text>
              <View style={styles.billingCard}>
                <View style={styles.billingCardView}>
                  <Text style={styles.itemTotalText}>Item Total</Text>
                  <Text style={styles.total}>₹ {total}</Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginVertical: 8,
                  }}
                >
                  <Text style={styles.deliveryFeeText}>Delivery Fee</Text>
                  <Text style={styles.deliveryFee}>FREE</Text>
                </View>

                {total > 100 ? (
                  <View style={styles.freeDeliveryView}>
                    <Text style={styles.freeDeliveryText}>
                      Free Delivery on Your order
                    </Text>
                  </View>
                ) : (
                  ""
                )}

                <View style={styles.timeDateCard} />

                <View style={styles.timeDateCardView}>
                  <Text style={styles.dateText}>Selected Date</Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "400",
                      color: "#088F8F",
                    }}
                  >
                    {route.params.pickUpDate.toLocaleDateString()}
                  </Text>
                </View>

                <View style={styles.daysView}>
                  <Text style={styles.noOfDaysText}>No of Days</Text>

                  <Text style={styles.noOfDays}>{route.params.no_Of_days}</Text>
                </View>

                <View style={styles.timeView}>
                  <Text style={styles.timeText}>Pick Up Time</Text>

                  <Text style={styles.selectedTime}>
                    {route.params.selectedTime}
                  </Text>
                </View>
                <View style={styles.line} />

                <View style={styles.payView}>
                  <Text style={styles.pay}>To Pay</Text>
                  <Text style={styles.totalPay}>₹ {total}</Text>
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
            <Text style={styles.proceed}>Place Order</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CartScreen;
