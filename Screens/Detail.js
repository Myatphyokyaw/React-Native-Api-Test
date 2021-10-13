import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Detail = props => {
  const [isExit,setIsExit] = useState(false);
  useEffect(()=>{
    if(props.route.params.data.feature_img===null){
      setIsExit(false)
    }else {
      setIsExit(true)
    }
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>
        {props.route.params.data.title}
      </Text>
      <Text style={styles.timeTxt}><MaterialCommunityIcons name="calendar-month-outline"/>  {props.route.params.data.created_time}</Text>
      <Image style={isExit ? styles.photo : styles.noPhoto} source={{ uri: props.route.params.data.feature_img }} />
      <Text style={styles.desTxt}>
        {props.route.params.data.description}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    padding:15,
    flex:1,
    backgroundColor:'#fff'
  },

  headerTxt:{
    color:'#000',
    fontSize:20,
    marginVertical:10,
    fontWeight:"bold"
  },
  photo: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginVertical:25,
    borderRadius:10
  },
  noPhoto:{
    width: "100%",
    height: 0,
    resizeMode: "cover",
  },
  desTxt:{
    color:'#000',
    fontSize:15
  },
  timeTxt:{
    marginVertical:10
  }
});
export default Detail;
