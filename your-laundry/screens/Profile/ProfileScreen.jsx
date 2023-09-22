import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/profileStyles";
import { TEXT } from "../../utils/constant";

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={styles.profileView}>
      <View style={styles.profileCard}>
        <View>
          <Text style={styles.profileName}>{TEXT.WELCOME}</Text>
          <Text style={styles.profileIdAndPhone}>{user.email}</Text>
        </View>
        <View>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg",
            }}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.profileSections}>
        <TouchableOpacity
          style={styles.sectionItems}
          onPress={() => navigation.navigate("AllOrders")}
        >
          <Ionicons name="shirt-outline" size={20} color="grey" />
          <Text style={styles.sectionName}>{TEXT.YOUR_ORDERS}</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileSections}>
        <TouchableOpacity
          style={styles.sectionItems}
          onPress={() => navigation.navigate("About")}
        >
          <AntDesign name="infocirlceo" size={20} color="grey" />
          <Text style={styles.sectionName}>{TEXT.ABOUT}</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileSections}>
        <TouchableOpacity
          style={styles.sectionItems}
          onPress={() => navigation.navigate("Contact")}
        >
          <AntDesign name="phone" size={20} color="grey" />
          <Text style={styles.sectionName}>{TEXT.CONTACT}</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileSections}>
        <TouchableOpacity
          style={styles.sectionItems}
          onPress={() => navigation.navigate("Address")}
        >
          <FontAwesome name="address-card-o" size={20} color="grey" />
          <Text style={styles.sectionName}>{TEXT.ADDRESS}</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileSections}>
        <TouchableOpacity style={styles.sectionItems} onPress={signOutUser}>
          <AntDesign name="logout" size={20} color="grey" />
          <Text style={styles.sectionName}>{TEXT.LOGOUT}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;