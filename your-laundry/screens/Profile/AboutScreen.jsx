import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../styles/aboutStyles";
import { TEXT, about } from "../../utils/constant";

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.companyName}>{TEXT.YOUR_LAUNDRY}</Text>
      <Text style={styles.companyStarted}>{TEXT.FOUNDED}</Text>

      <View style={styles.companyDetails}>
        <Text style={styles.detailsText}>{TEXT.COMPANY_DESCRIPTION}</Text>
      </View>

      <View style={styles.teamMembers}>
        <Text style={styles.teamHeading}>{TEXT.OUR_TEAM}</Text>
        {about?.map((member) => (
          <View style={styles.member}>
            <Image
              source={{
                uri: member.image,
              }}
              style={styles.memberImage}
            />
            <FontAwesome name={member.icon} size={24} color="#fd5c63" />
            <View style={styles.memberDetails}>
              <Text style={styles.memberName}>{member.name}</Text>
              <Text style={styles.memberDesignation}>{member.position}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AboutScreen;
