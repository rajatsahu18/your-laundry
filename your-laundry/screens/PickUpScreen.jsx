import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import HorizontalDatepicker from "@awrminkhodaei/react-native-horizontal-datepicker";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { TEXT, deliveryTime, times } from "../utils/constant";
import { styles } from "./styles/pickUpStyles";

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState("");

  const navigation = useNavigation();
  const date = new Date();

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    const { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.subregion}, ${item.region} ${item.country}, ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };

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
          {TEXT.ENTER_ADDRESS}
        </Text>
        <TextInput
          style={styles.addressTextInput}
          multiline
          value={displayCurrentAddress}
        />

        <Text style={styles.pickUpDate}>
          {TEXT.SELECTED_DATE}
        </Text>
        <HorizontalDatepicker
          mode="gregorian"
          startDate={new Date()}
          endDate={new Date(date.getFullYear(), date.getMonth() + 1, 1)}
          onSelectedDateChange={(date) => setSelectedDate(date)}
          selectedItemWidth={170}
          unselectedItemWidth={38}
          itemHeight={38}
          itemRadius={10}
          selectedItemTextStyle={styles.selectedItemTextStyle}
          unselectedItemTextStyle={styles.selectedItemTextStyle}
          selectedItemBackgroundColor="#007AFF"
          unselectedItemBackgroundColor="#ececec"
          flatListContainerStyle={styles.flatListContainerStyle}
        />

        <Text style={styles.pickUpTimeText}>
          {TEXT.SELECTED_TIME}
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times?.map((item, i) => (
            <TouchableOpacity
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
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.deliveryDateText}>
          {TEXT.DELIVERY_DATE}
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime?.map((item, i) => (
            <TouchableOpacity
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
            </TouchableOpacity>
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? null : (
        <TouchableOpacity
          style={styles.totalButton}
          onPress={proceedToCart}
        >
          <View>
            <Text style={styles.totalItemAndPrice}>
              {cart.length} items | ₹ {total}
            </Text>
          </View>

          <View>
            <Text style={styles.proceed}>
              {TEXT.PROCEED_TO_CART}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default PickUpScreen;