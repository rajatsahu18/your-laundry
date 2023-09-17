import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    ActivityIndicator
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import React, { useEffect, useState } from "react";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../firebase";
import { styles } from "./styles/authStyle";

  const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [loading,setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
  
    useEffect(() => {
      setLoading(true);
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if(!authUser){
          setLoading(false);
        }
        if(authUser){
          navigation.replace("Home");
        }
      });
  
      return unsubscribe;
    },[])
    
    const login = () => {
      signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
        const user = userCredential.user;
        console.log('userssss', user)
      })
    }
  
    return (
      <SafeAreaView
        style={styles.container}
      >
        {loading ? (
          <View style={styles.loadingView}>
            <Text style={styles.loadingText}>Loading</Text>
            <ActivityIndicator size="large" color={"red"}/>
          </View>
        ) : (
          <KeyboardAvoidingView>
          <View
            style={styles.authCard}
          >
            <Text style={styles.loginAndSignupText}>
              Sign In
            </Text>
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
              <Text style={styles.loginAndSignupText}>
                Login
              </Text>
            </TouchableOpacity>
  
            <TouchableOpacity onPress={() => navigation.navigate("Register")} style={{ marginTop: 20 }}>
              <Text
                style={styles.loginAndSignupSwitch}
              >
                Don't have a account? Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
        )}
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;