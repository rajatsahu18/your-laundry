import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
  },

  authCard: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  loadingView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flex: 1,
  },
  loadingText: { marginRight: 10 },
  loginAndSignupText: { fontSize: 20, color: "#662d91", fontWeight: "bold" },

  loginAndSignupContainer: { marginTop: 50 },

  inputFieldsView: { flexDirection: "row", alignItems: "center" },
  inputFields: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginLeft: 13,
    width: 300,
    marginVertical: 10,
  },
  loginAndSignupButton: {
    width: 200,
    backgroundColor: "#318CE7",
    padding: 15,
    borderRadius: 7,
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  loginAndSignupText: { fontSize: 18, textAlign: "center", color: "white" },

  loginAndSignupSwitch: {
    textAlign: "center",
    fontSize: 17,
    color: "gray",
    fontWeight: "500",
  },
});
