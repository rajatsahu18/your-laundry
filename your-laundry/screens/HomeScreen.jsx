import {
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItem from "../components/DressItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/ProductReducer";
import { useNavigation } from "@react-navigation/native";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { styles } from "./styles/homeStyles";
import LocationLoadingIndicator from "../utils/LocationLoadingIndicator";

const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const [items, setItems] = useState([]);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);
  const navigation = useNavigation();
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Fetching your location"
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    checkIfLocationEnabled();
    getCurrentLocation();
    setLoading(false)
  }, []);
  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
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
    } else {
      setLocationServicesEnabled(enabled);
    }
  };
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission denied",
        "allow the app to use the location services",
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

    const { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.postalCode}`;
        setDisplayCurrentAddress(address);
      }
    }
  };
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (product.length > 0) return;

    const fetchProducts = async () => {
      const colRef = collection(db, "types");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      items?.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);

  return loading ? (
    <View style={styles.loadingView}>
      <LocationLoadingIndicator />
    </View>
  ) : (
    <>
      <ScrollView style={styles.homeScroll}>
        <View style={styles.locationAndProfile}>
          {/* Location*/}

          <MaterialIcons name="location-on" size={30} color="#fd5c63" />
          <View>
            <Text style={styles.location}>Home</Text>
            <Text>{displayCurrentAddress}</Text>
          </View>

          {/* Profile */}

          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={styles.profileImagePress}
          >
            <Image
              style={styles.profileImage}
              source={{
                uri: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput placeholder="Search for items or More" />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>

        {/* Image Carousel */}
        <Carousel />

        {/* Services Component */}
        <Services />

        {/* Render all the Products */}
        {product?.map((item, index) => (
          <DressItem item={item} key={index} />
        ))}
      </ScrollView>

      {total === 0 ? null : (
        <TouchableOpacity
          style={styles.totalButton}
          onPress={() => navigation.navigate("PickUp")}
        >
          <View>
            <Text style={styles.totalItemAndPrice}>
              {cart?.length} items | ₹ {total}
            </Text>
          </View>

          <View>
            <Text style={styles.proceed}>Proceed to pickup</Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default HomeScreen;
