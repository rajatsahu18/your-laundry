import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E7E9EB",
    flex: 1,
    marginTop: 35,
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
  },
});
