import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 35,
    backgroundColor: "#E7E9EB",
  },
  companyName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  companyStarted: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },
  companyDetails: {
    marginBottom: 20,
  },
  detailsHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detailsText: {
    fontSize: 16,
    color: "#555",
  },
  teamMembers: {
    marginBottom: 20,
  },
  teamHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  member: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  memberImage: {
    width: 90,
    height: 90,
    marginRight: 30,
  },
  memberDetails: {
    marginTop: 15,
    marginLeft: 15,
  },
  memberName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  memberDesignation: {
    fontSize: 14,
    color: "#888",
  },
});
