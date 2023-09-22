import { Text, TouchableOpacity, View, Image } from "react-native";
import React from "react";
import { styles } from "../styles/allOrdersStyle";

const AllOrdersScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Order History</Text>
      </View>

      <TouchableOpacity style={styles.orderCard}>
        <View style={styles.orderCardTop}>
          <View>
            <Text style={styles.orderId}>Order Id: react</Text>
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
            <Text style={styles.orderId}>Pickup date: 22/22/2222</Text>
          </View>
          <View>
            <Text style={styles.orderId}>Pickup time: ;</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AllOrdersScreen;