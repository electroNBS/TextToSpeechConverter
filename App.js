import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from "react-native";
import * as Speech from "expo-speech";
import { RFValue } from "react-native-responsive-fontsize";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>TEXT TO SPEECH CONVERTER</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/download.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>
            Enter a word and click on the button to listen to its speech!
          </Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder={"Enter a word"}
          placeholderTextColor="darkgreen"
          onChangeText={(text) => {
            this.setState({
              text: text,
            });
          }}
        />
        <TouchableOpacity
          onPress={() => {
            {
              this.state.text
                ? Speech.speak(this.state.text)
                : alert("Input is Empty!");
            }
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>CLICK HERE TO HEAR SPEECH!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightblue",
    padding: 10,
    alignItems: "space-around",
  },
  header: {
    backgroundColor: "dodgerblue",
    marginTop: -3,
    marginBottom: 30,
    marginLeft: -10,
    marginRight: -10,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "royalblue",
    padding: 5,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  labelContainer: {
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    color: "navy",
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 50,
    textAlign: "center",
    color: "blue",
    fontSize: 20,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowColor: "black",
    shadowOpacity: 0.4,
  },
  button: {
    backgroundColor: "dodgerblue",
    marginBottom: 10,
    textAlign: "center",
    borderRadius: 100,
    borderWidth: "3px",
    padding: 5,
    marginRight: 20,
    marginLeft: 20,
    borderColor: "royalblue",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontFamily: "cursive",
  },
});
