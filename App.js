import React from "react";
import {
  StatusBar,
  StyleSheet, Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Screens/Home";
import Detail from "./Screens/Detail";
import { COLORS } from "./Constants/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack=createNativeStackNavigator()
const App = props => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"/>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
        <Stack.Screen name="Detail" component={Detail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({});
export default App;
