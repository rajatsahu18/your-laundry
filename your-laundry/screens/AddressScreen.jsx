import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const AddressScreen = () => {

  useEffect(() => {
    getCurrentLocation();
  }, []);
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState("");

  const getCurrentLocation = async () => {
    // let { status } = await Location.requestForegroundPermissionsAsync();

    const { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;
      console.log(coords);

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log(response);

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.subregion}, ${item.region} ${item.country}, ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <Text>{displayCurrentAddress}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    alignContent: "center",
    justifyContent: "center",
  },
});
