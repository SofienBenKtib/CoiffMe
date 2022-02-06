import {
  StyleSheet,
  Text,
  View,
  ScrollVie,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import colors from "../colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import logo from "../images/logo.png";
import MessagesData from "../data/MessagesData";
import { Entypo } from "@expo/vector-icons";
const dimensions = Dimensions.get("window");
const Wid = dimensions.width;
const MessagesPro = ({ navigation }) => {
  return (
    <View>
      {/*** Icons ***/}
      <View style={styles.headerImages}>
        <Image source={logo} style={{ height: 35, width: 35, left: 25 }} />
        <View style={styles.iconsWrapper}>
          <TouchableOpacity>
            <View style={styles.iconCircle}>
              <Ionicons
                name="mail-outline"
                size={22}
                color={colors.white}
                style={{
                  alignSelf: "center",
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/*** Title ***/}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleGold}>__________ </Text>
        <Text style={styles.titleText}>Messages</Text>
        <Text style={styles.titleGold}> __________</Text>
      </View>
      {/*** Messages ***/}
      <ScrollView style={styles.messagesWrapper}>
        {MessagesData.map((item) => (
          <TouchableOpacity
            style={[
              styles.messageWrapper,
              {
                backgroundColor: item.seen
                  ? colors.white
                  : "rgba(251, 154, 13, 0.4)",
              },
            ]}
          >
            <View style={styles.imageContainer}>
              <Image source={logo} style={styles.itemLogo} />
            </View>
            <View style={{ marginLeft: 20 }}>
              <View style={styles.messageHeader}>
                <View>
                  <Text style={styles.itemTitle}>{item.title}</Text>
                </View>
                <View style={{ position: "relative", right: 0 }}>
                  <Text style={styles.itemTime}>{item.time}</Text>
                </View>
              </View>
              <View style={styles.itemContent}>
                <Text style={styles.itemContentText}>{item.content}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/*** Filter ***/}
      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.mix}>
          <Entypo name="sound-mix" size={16} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessagesPro;

const styles = StyleSheet.create({
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    alignItems: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.dark,
    marginLeft: 5,
    marginRight: 5,
  },
  titleGold: {
    color: colors.primary,
    fontWeight: "bold",
  },
  iconCircle: {
    borderWidth: 1,
    borderColor: colors.primary,
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: colors.primary,
  },
  headerImages: {
    marginTop: 35,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  iconsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    display: "flex",
    marginLeft: 190,
  },
  messageWrapper: {
    marginTop: 5,
    alignContent: "center",
    justifyContent: "center",
    height: 80,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.lightGray,
    width: Wid,
    flexDirection: "row",
    alignItems: "center",
  },
  messageHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 262,
    alignSelf: "center",
  },
  itemTime: {
    fontSize: 9,
    color: colors.darkGray,
  },
  itemTitle: {
    fontSize: 12,
    color: colors.dark,
    fontWeight: "bold",
  },
  itemContentText: {
    fontSize: 8,
    textAlign: "left",
  },
  itemContent: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    width: 262,
    alignContent: "center",
    alignSelf: "center",
  },
  itemLogo: {
    height: 40,
    width: 40,
    borderRadius: 45,
  },
  imageContainer: {
    marginLeft: 15,
    justifyContent: "center",
  },
  filterContainer: {
    height: 80,
  },
  mix: {
    height: 53,
    width: 65,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
  },
  filterContainer: {
    marginRight: 10,
    padding: 5,
    alignItems: "flex-end",
  },
});
