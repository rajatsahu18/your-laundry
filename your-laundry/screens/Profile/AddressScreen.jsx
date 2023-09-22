import { Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../styles/addressStyle";

const AddressScreen = () => {
  useEffect(() => {
    getCurrentLocation();
  }, []);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState("");

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
  return (
    <View style={styles.container}>
      <Text style={styles.addressBook}>Address Book</Text>
      <TouchableOpacity style={styles.details}>
        <FontAwesome name="home" size={24} color="#fd5c63" />
        <Text style={styles.text}>{displayCurrentAddress}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressScreen;