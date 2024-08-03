import React from "react";
import { View, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const Back = ({ children }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          // backgroundColor: '#F6F6F6',
          // width: 32,
          // height: 32,
          // alignItems: "center",
          // justifyContent: "center",
          // borderRadius: 100,
          // marginTop: 24,
        }}
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};

export default Back;
