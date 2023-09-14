import { StyleSheet, Text, View, SafeAreaView, Button, Pressable } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles/orderStyles";

const OrderScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView>
        <LottieView
          source={require("../assets/thumbs.json")}
          style={{
            height: 360,
            width: 300,
            alignSelf: "center",
            marginTop: 40,
            justifyContent: "center",
          }}
          autoPlay
          loop={false}
          speed={0.7}
        />

        <Text
          style={styles.orderText}
        >
          Your order has been placed
        </Text>

        <LottieView
          source={require("../assets/sparkle.json")}
          style={{
            height: 300,
            position: "absolute",
            top: 100,
            width: 300,
            alignSelf: "center",
          }}
          autoPlay
          loop={false}
          speed={0.7}
        />
      </SafeAreaView>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text style={styles.backToHome}>
          Back to home
        </Text>
      </Pressable>
    </>
  );
};

export default OrderScreen;