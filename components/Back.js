import React from "react";
import Press from "./Press";
import { View } from "react-native";
import { router } from "expo-router";

const Back = ({children}) => {
  return (
    <View>
      <Press
        onPress={() => router.back()}
        style={{
          // backgroundColor: '#F6F6F6',
          width: 32,
          height: 32,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
          marginTop: 24,
        }}
      >
        {children}
      </Press>
    </View>
  );
};

export default Back;
