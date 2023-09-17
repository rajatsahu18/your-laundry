import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
// import { styles } from './styles/profileStyles';

const ProfileScreen = () => {
  const user = auth.currentUser;
  // console.log('user', user)
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
          <Text style={styles.profileName}>Rajat</Text>
          <Text style={styles.profileIdAndPhone}>{user.email}</Text>
          <Text style={styles.profileIdAndPhone}>{user.phoneNumber}</Text>
        </View>
        <View>
          <Image
            style={styles.profileImage}
            source={{
              uri: "https://lh3.googleusercontent.com/a/ACg8ocKN7GKpxEa0ziIUSMxYCrVG6laVF1xCGtNgctFGQh1aGA=s288-c-no",
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
          <Text style={styles.sectionName}>Your Orders</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileSections}>
        <TouchableOpacity
          style={styles.sectionItems}
          onPress={() => navigation.navigate("About")}
        >
          <AntDesign name="infocirlceo" size={20} color="grey" />
          <Text style={styles.sectionName}>About</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileSections}>
        <TouchableOpacity
          style={styles.sectionItems}
          onPress={() => navigation.navigate("Address")}
        >
          <FontAwesome name="address-card-o" size={20} color="grey" />
          <Text style={styles.sectionName}>Address</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.profileSections}>
        <TouchableOpacity style={styles.sectionItems} onPress={signOutUser}>
          <AntDesign name="logout" size={20} color="grey" />
          <Text style={styles.sectionName}>Log Out</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  profileView: { flex: 1, marginTop: 50 },

  profileCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 14,
  },

  profileName: {
    fontSize: 30,
    fontWeight: "bold",
  },

  profileIdAndPhone: {
    fontSize: 15,
    marginTop: 5,
  },

  profileImage: { width: 80, height: 80, borderRadius: 40 },

  profileSections: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 8,
    flexDirection: "column",
    marginTop: 10,
    marginRight: 14,
    marginLeft: 14,
  },

  sectionItems: {
    flexDirection: "row",
    margin: 10,
  },
  sectionName: {
    marginLeft: 20,
    borderColor: "#C0C0C0",
  },

  profilePress: { marginVertical: 10 },
});
