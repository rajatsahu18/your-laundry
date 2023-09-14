import { StyleSheet, Text, View,SafeAreaView,Pressable } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles/profileStyles';

const ProfileScreen = () => {
    const user = auth.currentUser;
    const navigation = useNavigation();
    const signOutUser = () => {
        signOut(auth).then(() => {
            navigation.replace("Login");
        }).catch(err => {
            console.log(err);
        })
    }
  return (
    <SafeAreaView style={styles.profileView}>
      <Pressable style={styles.profilePress}>
        <Text>Welcome {user.email}</Text>
      </Pressable>

      <Pressable onPress={signOutUser}>
          <Text>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default ProfileScreen