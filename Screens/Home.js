import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import axios from "axios";
import Feeds from "../Components/Feeds";
import { Appbar, Badge, IconButton } from "react-native-paper";
import { COLORS, FONTS, SIZES } from "../Constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";
import Search from "./Search";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AddNews from "./AddNews";
import Friends from "./Friends";
import Profile from "./Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LottieView from "lottie-react-native";

const Tab = createBottomTabNavigator();


const Main = props => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://192.168.100.10/project/public/api/article")
      .then((response) => setData(response.data.data))
      .catch((error => alert(error)));
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LottieView style={styles.logo} source={require("../assests/animation/logo.json")} autoPlay loop />
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={[FONTS.body2, { color: COLORS.black }]}>New Feeds</Text>
        </View>
        <IconButton
          icon="message-text-outline"
          color={COLORS.black}
          size={30}
          onPress={() => console.log("Pressed")}
        />
      </View>
      <FlatList showsVerticalScrollIndicator={false} data={data} keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                  <Feeds id={item.id} data={item} />
                )} />
    </View>
  );
};

const Home = props => {
  return (
    <Tab.Navigator tabBarOptions={{
      keyboardHidesTabBar: true,
    }} screenOptions={{
      tabBarShowLabel: false,
    }}>
      <Tab.Screen options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <Ionicons color={COLORS.primary} size={25} name={focused ? "home" : "home-outline"} />
        ),
      }} name="Main" component={Main} />
      <Tab.Screen options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <Ionicons color={COLORS.primary} size={25} name={focused ? "search" : "search-outline"} />
        ),
      }} name="Search" component={Search} />
      <Tab.Screen options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons color={COLORS.primary} size={25}
                                  name={focused ? "plus-circle" : "plus-circle-outline"} />
        ),
      }} name="AddNews" component={AddNews} />
      <Tab.Screen options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons color={COLORS.primary} size={25}
                                  name={focused ? "message-text" : "message-text-outline"} />
        ),
      }} name="Friends" component={Friends} />
      <Tab.Screen options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <Ionicons color={COLORS.primary} size={25} name={focused ? "people-circle" : "people-circle-outline"} />
        ),
      }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    height: "7%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.padding,
    borderBottomWidth: 0.3,
    borderBottomColor: COLORS.darkgray,
    justifyContent: "space-evenly",
  },
  logo: {
    width: 60,
    height: 50,
  },
});
export default Home;
