import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { styles } from "./styles/authStyle";
import LocationLoadingIndicator from "../utils/LocationLoadingIndicator";
import { TEXT } from "../utils/constant";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        setLoading(false);
      }
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loadingView}>
          <LocationLoadingIndicator />
        </View>
      ) : (
        <KeyboardAvoidingView>
          <View style={styles.authCard}>
            <Text style={styles.loginAndSignupText}>{TEXT.LOGIN}</Text>
          </View>
          <View style={styles.loginAndSignupContainer}>
            <View style={styles.inputFieldsView}>
              <MaterialCommunityIcons
                name="email-outline"
                size={24}
                color="black"
              />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholderTextColor="black"
                style={styles.inputFields}
              />
            </View>

            <View style={styles.inputFieldsView}>
              <Ionicons name="key-outline" size={24} color="black" />
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.inputFields}
              />
            </View>

            <TouchableOpacity
              onPress={login}
              style={styles.loginAndSignupButton}
            >
              <Text style={styles.loginAndSignupText}>{TEXT.LOGIN}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={{ marginTop: 20 }}
            >
              <Text style={styles.loginAndSignupSwitch}>
                {TEXT.DONT_HAVE_ACCOUNT}
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;