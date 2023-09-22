import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "../styles/contactStyle";

const ContactScreen = () => {
  const phoneNumber = "7607205292";
  const email = "sahurajat78@gmail.com";
  const github = "https://github.com/rajatsahu18";
  const linkedin = "https://www.linkedin.com/in/rajat-sahu-102791147/";

  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Contact Information</Text>
      </View>
      <TouchableOpacity style={styles.details} onPress={() => openLink(`tel:${phoneNumber}`)}>
        <Text style={styles.subheading}>Call customer care between 10:00 AM to 07:00 PM</Text>

        <View style={styles.item}>
          <FontAwesome name="phone" size={24} color="#4EA94B" />
          <Text style={styles.text}>{phoneNumber}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.details} onPress={() => openLink(`mailto:${email}`)}>
        <Text style={styles.subheading}>If you any query related to your order kindly drop a mail here.</Text>

        <View style={styles.item}>
          <FontAwesome name="envelope" size={24} color="#D14836" />
          <Text style={styles.text}>{email}</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.details} onPress={() => openLink(github)}>
        <Text style={styles.subheading}>To see more such products kindly visit my GitHub profile</Text>

        <View style={styles.item}>
          <FontAwesome name="github" size={24} color="#000" />
          <Text style={styles.text}>GitHub</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.details} onPress={() => openLink(linkedin)}>
        <Text style={styles.subheading}>To know more about me kindly visit my LinkedIn profile</Text>

        <View style={styles.item}>
          <FontAwesome name="linkedin" size={24} color="#0077B5" />
          <Text style={styles.text}>LinkedIn</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ContactScreen;