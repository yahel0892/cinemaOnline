import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text, SafeAreaView, ImageBackground, StyleSheet, View } from 'react-native';
import Login from './src/components/Login';

const image = { uri: "https://images.unsplash.com/photo-1614345066511-5118d7ff5088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE2NDM0OTc0&ixlib=rb-1.2.1&q=80&w=2000&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-creditg" };

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 0.8,
  },
  image: {
    width: 420,
    height: 800,
    //flex: 5.5,
    //justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

const App = () => {
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Cinema</Text>
      <Login/>
    </ImageBackground>

    </View>
  
  );
};

export default App;