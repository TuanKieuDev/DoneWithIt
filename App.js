import React from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import {
  StyleSheet,
  StatusBar,
  Platform,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";


export default function App() {
  const { landscape } = useDeviceOrientation();
  return (

    <WelcomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
