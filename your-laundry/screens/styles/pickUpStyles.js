import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    addressText: { fontSize: 16, fontWeight: "500", marginHorizontal: 10, marginTop: 40 },
    addressTextInput: {
      padding: 10,
      borderColor: "gray",
      borderWidth: 0.7,
      paddingVertical: 10,
      borderRadius: 9,
      margin: 10,
      lineHeight: 20,
      fontSize: 15
    },
    pickUpDate: { fontSize: 16, fontWeight: "500", marginHorizontal: 10 },
    pickUpTimeText: { fontSize: 16, fontWeight: "500", marginHorizontal: 10 },
    deliveryDateText: { fontSize: 16, fontWeight: "500", marginHorizontal: 10 },
    totalButton: {
      backgroundColor: "#007AFF",
      marginTop: "auto",
      padding: 15,
      marginBottom: 15,
      margin: 15,
      borderRadius: 7,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    totalItemAndPrice: { fontSize: 17, fontWeight: "600", color: "white" },
    proceed: { fontSize: 17, fontWeight: "600", color: "white" },
  });