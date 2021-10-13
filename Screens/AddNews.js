import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableNativeFeedback, TextInput } from "react-native";
import { COLORS, FONTS, SIZES } from "../Constants/theme";
import { IconButton } from "react-native-paper";
import axios from "axios";

const AddNews = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const setData = () => {
    axios
      .post("http://192.168.100.10/project/public/api/article", {
        "title": title,
        "description": description,
        "category": "1",
        })
      .then((response) => {
        alert("Success")
      })
      .catch((err) => {
        alert(err)
      });
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconButton
            icon="keyboard-backspace"
            color={COLORS.black}
            size={30}
            onPress={() => props.navigation.goBack()}
          />
          <Text style={[FONTS.h3, { color: "black" }]}>
            Create Post
          </Text>
        </View>
        <TouchableNativeFeedback onPress={setData}>
          <View style={styles.postBtn}>
            <Text style={styles.postTxt}>Post</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.contentContainer}>
        <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.textBox} placeholder={"Title"} />
        <TextInput
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="What's on your mind?"
          placeholderTextColor="grey"
          numberOfLines={900}
          multiline={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    height: 55,
    width: "100%",
    borderBottomColor: COLORS.darkgray,
    borderBottomWidth: 0.5,
    flexDirection: "row",
    paddingVertical: SIZES.padding,
    justifyContent: "space-between",
  },
  postBtn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
    width: 70,
    marginEnd: SIZES.padding * 1.3,
  },
  postTxt: {
    color: COLORS.white,
    ...FONTS.body4,
    fontWeight: "bold",
  },
  contentContainer: {
    padding: SIZES.padding * 2,
  },
  textArea: {
    height: 500,
    ...FONTS.h2,
    textAlignVertical: "top",
    marginTop: SIZES.padding,
  },
  textBox: {
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: SIZES.radius,
    padding: SIZES.padding,
  },
});

export default AddNews;
