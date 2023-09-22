import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cartScroll: { marginTop: 35 },
    cartEmptyView: { justifyContent: "center", alignItems: "center" },
    cartText: { marginTop: 40 },
    cartHeader: {
      padding: 10,
      flexDirection: "row",
      alignItems: "center",
    },
    cartItems: {
      backgroundColor: "white",
      borderRadius: 12,
      marginLeft: 10,
      marginRight: 10,
      padding: 14,
    },
    cartItemsView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 12,
    },
    itemName: { width: 100, fontSize: 16, fontWeight: "500" },
    quantityPressable: {
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingVertical: 5,
      alignItems: "center",
      borderColor: "#BEBEBE",
      borderWidth: 0.5,
      borderRadius: 10,
    },
    quantity: {
      fontSize: 19,
      color: "#007AFF",
      paddingHorizontal: 8,
      fontWeight: "600",
    },
    quantitySign: {
      fontSize: 20,
      color: "#007AFF",
      paddingHorizontal: 6,
      fontWeight: "600",
    },
    quantityAndPrice: { fontSize: 16, fontWeight: "500" },
  
    billingView: { marginHorizontal: 10 },
    billingText: { fontSize: 16, fontWeight: "bold", marginTop: 30 },
  billingCard: {
    backgroundColor: "white",
    borderRadius: 7,
    padding: 10,
    marginTop: 15,
  },
  
  billingCardView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  
  deliveryFeeText: { fontSize: 18, fontWeight: "400", color: "gray" },
  deliveryFee: {
    fontSize: 18,
    fontWeight: "400",
    color: "#007AFF",
  },
  freeDeliveryView: { flexDirection: "row", alignItems: "center" },
  freeDeliveryText: { fontSize: 18, fontWeight: "500", color: "gray" },
  itemTotalText: { fontSize: 18, fontWeight: "400", color: "gray" },
  
  timeDateCard: {
    borderColor: "gray",
    height: 1,
    borderWidth: 0.5,
    marginTop: 10,
  },
  
  dateText: { fontSize: 18, fontWeight: "500", color: "gray" },
  
  timeDateCardView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  
  daysView :{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  
  noOfDaysText: { fontSize: 18, fontWeight: "500", color: "gray" },
  noOfDays: {
    fontSize: 18,
    fontWeight: "400",
    color: "#007AFF",
  },
  
  timeView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  
  timeText: { fontSize: 18, fontWeight: "500", color: "gray" },
  
  selectedTime: {
    fontSize: 18,
    fontWeight: "400",
    color: "#007AFF",
  },
  
  line: {
    borderColor: "gray",
    height: 1,
    borderWidth: 0.5,
    marginTop: 10,
  },
  
  payView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  
  pay: { fontSize: 18, fontWeight: "bold" },
  
  totalPay: { fontSize: 18, fontWeight: "bold" },
  
  total: { fontSize: 18, fontWeight: "400" },
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
  