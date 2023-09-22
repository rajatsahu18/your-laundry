import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PickUpScreen from "./screens/PickUpScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";
import AboutScreen from "./screens/Profile/AboutScreen";
import AllOrders from "./screens/Profile/AllOrdersScreen";
import AddressScreen from "./screens/Profile/AddressScreen";
import ContactScreen from "./screens/Profile/ContactScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PickUp"
          component={PickUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Order"
          component={OrderScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Address"
          component={AddressScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AllOrders"
          component={AllOrders}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
