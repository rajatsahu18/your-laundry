import { StyleSheet } from "react-native";
// import HomeScreen from './screens/HomeScreen';
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import StackNavigator from "./StackNavigation";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <StackNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7E9EB",
  },
});
