import React from "react";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  SafeAreaView,
  Alert,
  TouchableHighlight,
  Button,
  Platform,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewScreen from "./app/screens/ViewScreen";

export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    // //protect content overflow
    // <SafeAreaView style={styles.container}>
    //   {/* <Text
    //   numberOfLines={1} //limit the line of content
    //   >
    //     Hello Macbook Pro
    //   </Text> */}
    //   {/* <TouchableHighlight onPress={()=>console.log("Image tapped")}>
    //     <Button
    //       color= "orange"
    //       title="Click Me"
    //       // onPress={()=>Alert.alert("My title","Clicked",[
    //       //   {text:"yes", onPress: ()=> console.log("Yes")},
    //       //   {text:"no", onPress: ()=> console.log("No")}
    //       // ])}
    //       onPress={()=>
    //         Alert.prompt("My title", "My message", text=>console.log(text)) //only works on IOS
    //       }
    //     />
    //   </TouchableHighlight> */}

    //   {/* <View style={styles.container}>
    //     <View style={{
    //       backgroundColor:'dodgerblue',
    //       width: '100%',
    //       height: landscape?'100%':'30%', //use to rotate device
    //     }}>

    //     </View>
    //   </View> */}
    //   <View
    //     style={{
    //       backgroundColor: '#fff',
    //       flex: 1,
    //       flexDirection: 'row',//horizontal
    //       justifyContent: 'center',//main
    //       alignItems:'center',
    //     }}
    //   >
    //     {/* <View
    //       style={{
    //         backgroundColor: "gold",
    //         //flexBasis: 100, //width or height
    //         //flexGrow: 1,//occupy all the rest space
    //         //flexShrink: 1,
    //         width: 100,
    //         height: 100,
    //         left: 20,
    //         top: 20,
    //         position: 'absolute', // doesn't effected by container style, by default it's relative
    //       }}
    //     /> */}
    //     <View
    //       style={{
    //         backgroundColor: "tomato",
    //         width: 100,
    //         height: 100,
    //       }}
    //     />
    //     <View
    //       style={{
    //         backgroundColor: "dodgerblue",
    //         width: 100,
    //         height: 100,
    //       }}
    //     />
    //     <View
    //       style={{
    //         backgroundColor: "gray",
    //         width: 100,
    //         height: 100,
    //       }}
    //     />

    //   </View>
    // </SafeAreaView  >
    <ViewScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
