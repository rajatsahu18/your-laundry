import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeScroll: { backgroundColor: "#E7E9EB", flex: 1, marginTop: 35 },
  locationAndProfile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  location: { fontSize: 18, fontWeight: "600" },
  profileImagePress: { marginLeft: "auto", marginRight: 7 },
  profileImage: { width: 40, height: 40, borderRadius: 20 },
  searchBar: {
    padding: 10,
    margin: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.8,
    borderColor: "#C0C0C0",
    borderRadius: 7,
  },
  totalButton: {
    backgroundColor: "#007AFF",
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
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
});
