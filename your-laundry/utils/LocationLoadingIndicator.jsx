import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TEXT } from "./constant";

const LocationLoadingIndicator = () => {
  const jumpValue = useRef(new Animated.Value(0)).current;

  const jump = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(jumpValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(jumpValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  useEffect(() => {
    jump();
  }, []);

  const jumpInterpolate = jumpValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateY: jumpInterpolate }] }}>
        <MaterialIcons name="location-pin" size={32} color="#fd5c63" />
      </Animated.View>
      <Text style={styles.text}>{TEXT.FETCHING_LOCATION}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: "#333",
  },
});

export default LocationLoadingIndicator;
