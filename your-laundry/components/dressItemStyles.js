import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    productCard: {
      backgroundColor: "#F8F8F8",
      borderRadius: 8,
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: 14,
    },
    productImage: { width: 70, height: 70 },
    productName: {
      width: 83,
      fontSize: 17,
      fontWeight: "500",
      marginBottom: 7,
    },
    productPrice: { width: 60, color: "gray", fontSize: 15 },
    quantityButton: {
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 5,
    },
    quantityPressable: {
      width: 26,
      height: 26,
      borderRadius: 13,
      borderColor: "#BEBEBE",
      backgroundColor: "#E0E0E0",
      justifyContent: "center",
      alignContent: "center",
    },
    quantitySign: {
      fontSize: 20,
      color: "#007AFF",
      paddingHorizontal: 6,
      fontWeight: "600",
      textAlign: "center",
    },
    totalQuantity: {
      fontSize: 19,
      color: "#007AFF",
      paddingHorizontal: 8,
      fontWeight: "600",
    },
    addButtonPress: {
      width: 80,
    },
    addButton: {
      borderColor: "gray",
      borderRadius: 4,
      borderWidth: 0.8,
      marginVertical: 10,
      color: "#007AFF",
      textAlign: "center",
      padding: 5,
      fontSize: 17,
      fontWeight: "bold",
    },
  });