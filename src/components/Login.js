import React from "react";
import { SafeAreaView, StyleSheet, TextInput, View, Button } from "react-native";

const Login = () => {
  const [text, onChangeText] = React.useState(null);
  //const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="correo electrónico"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="contraeña"
       // keyboardType="numeric"
      />
    </SafeAreaView>
    <Button title="Submit" onPress={() => null} />

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#FFFFFF"

  },
  container: {
    paddingTop: 150,
  },
  btnContainer: {
    backgroundColor: "white",
    margin: 20
  }
});

export default Login;