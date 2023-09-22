import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    padding: 10,
    backgroundColor: "#E7E9EB",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  details: {
    flexDirection: "column",
    marginVertical: 5,
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 8,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: "gray",
  },
  subheading: {
    fontSize: 18,
    color: "#000",
  },
});
