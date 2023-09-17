import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";

const AllOrdersScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Order History</Text>
      </View>

      <TouchableOpacity style={styles.orderCard}>
        <View style={styles.orderCardTop}>
          <View>
            <Text style={styles.orderId}>
              Order Id: nF2Vjwv9HeMilsLcNurtOeRlGIZ2
            </Text>
          </View>
          <View>
          <Image
              source={{
                uri: "https://lh3.googleusercontent.com/a/ACg8ocKN7GKpxEa0ziIUSMxYCrVG6laVF1xCGtNgctFGQh1aGA=s288-c-no",
              }}
            />
          </View>
        </View>

        <View style={styles.orderCardSection}>
          <View>
            <Text style={styles.orderId}>
              Order date: 22/22/2222
            </Text>
          </View>
          <View>
          <Text style={styles.orderId}>
              Order time: 02:00 PM
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AllOrdersScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7E9EB",
    flex: 1,
    marginTop: 50,
  },
  heading: {
    fontSize: 20,
    marginLeft: 15,
    marginTop: 15,
  },
  orderCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  orderCardSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  orderId: {
    fontSize: 10,
    color: "gray",
  },
  orderDateTime: {
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-evenly",
  },
});
