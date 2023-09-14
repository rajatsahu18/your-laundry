import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { deliveryTime, times } from "../utils/constant";
import { onChangeText } from "deprecated-react-native-prop-types/DeprecatedTextInputPropTypes";
import { styles } from "./styles/pickUpStyles";

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);

  const navigation = useNavigation();
  const date = new Date();
  const proceedToCart = () => {
    if (!selectedDate || !selectedTime || !delivery) {
      Alert.alert(
        "Empty or invalid",
        "Please select all the fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    if (selectedDate && selectedTime && delivery) {
      navigation.replace("Cart", {
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        no_Of_days: delivery,
      });
    }
  };

  return (
    <>
      <SafeAreaView>
        <Text style={styles.addressText}>
          Enter Address
        </Text>
        <TextInput
          style={styles.addressTextInput}
          multiline
        />

        <Text style={styles.pickUpDate}>
          Pick Up Date
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date()}
          endDate={new Date(date.getFullYear(), date.getMonth() + 1, 1)}
          // initialSelectedDate={new Date("2020-08-22")}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#222831"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />

        <Text style={styles.pickUpTimeText}>
          Select Time
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times?.map((item, i) => (
            <Pressable
              key={i}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>
        <Text style={styles.deliveryDateText}>
          Delivery Date
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime?.map((item, i) => (
            <Pressable
              onPress={() => setDelivery(item.name)}
              key={i}
              style={
                delivery.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "red",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
              
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? null : (
        <Pressable
          style={styles.totalButton}
          onPress={proceedToCart}
        >
          <View>
            <Text style={styles.totalItemAndPrice}>
              {cart.length} items | $ {total}
            </Text>
          </View>

          <Pressable>
            <Text style={styles.proceed}>
              Proceed to Cart
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default PickUpScreen;
