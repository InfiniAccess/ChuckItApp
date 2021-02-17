import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Screen from "./app/components/Screen";


import WelcomeScreen from './app/screens/WelcomeScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { Button, Image } from 'react-native';
import ImageInput from './app/components/ImageInput';

export default function App() {
  const [imageUri, setImageUri] = useState();

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) alert('You need to enable permission to access the library.');
  };

  useEffect(() => {
    requestPermission();
  }, [])
  

  return (
    <Screen>
      <ImageInput imageUri={imageUri}
      onChangeImage={uri => setImageUri(uri)}/>
    </Screen>
  );
}
