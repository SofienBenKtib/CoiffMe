import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainContainer from "../navigation/MainContainer";
import MainStack from "../navigation/MainStack";
const Layout = () => {
  return (
    <View style={styles.container}>
      <MainStack />
      <MainContainer />
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "center",
    flexDirection: "column",
  },
});
