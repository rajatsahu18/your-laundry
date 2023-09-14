import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { services } from "../utils/constant";
import { styles } from "./servicesStyle";

const Services = () => {
  return (
    <View style={styles.servicesView}>
      <Text style={styles.servicesAvailable}>Services Available</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {services?.map((service, index) => (
          <Pressable style={styles.servicesPressable} key={index}>
            <Image
              source={{ uri: service.image }}
              style={styles.servicesImage}
            />

            <Text style={styles.servicesName}>{service.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Services;