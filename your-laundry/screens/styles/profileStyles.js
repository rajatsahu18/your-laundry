import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileView: { flex: 1, marginTop: 35, backgroundColor: "#E7E9EB" },

  profileCard: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 14,
  },

  profileName: {
    fontSize: 30,
    fontWeight: "bold",
  },

  profileIdAndPhone: {
    fontSize: 15,
    marginTop: 5,
  },

  profileImage: { width: 80, height: 80, borderRadius: 40 },

  profileSections: {
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 8,
    flexDirection: "column",
    marginTop: 10,
    marginRight: 14,
    marginLeft: 14,
  },

  sectionItems: {
    flexDirection: "row",
    margin: 10,
  },
  sectionName: {
    marginLeft: 20,
    borderColor: "#C0C0C0",
  },

  profilePress: { marginVertical: 10 },
});
