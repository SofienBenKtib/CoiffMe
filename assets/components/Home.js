import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import logo from "../images/logo.png";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import coiffeurs from "../data/Coiffeurs";
import MainContainer from "../navigation/MainContainer";
import MainStack from "../navigation/MainStack";
const Home = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  //    *****   DATE & TIME FUNCTIONS   *****

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let ftime =
      "Hours : " +
      tempDate.getHours() +
      " | Minutes : " +
      tempDate.getMinutes();

    setText(fDate + "\n" + ftime);
    console.log(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  const renderCoiffeurItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity style={styles.cardWrapper}>
          <View>
            <Image source={item.image} style={styles.ItemImage} />
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <View style={styles.starsWrapper}>
                <Ionicons name="star" size={10} color={colors.primary} />
                <Ionicons name="star" size={10} color={colors.primary} />
                <Ionicons name="star" size={10} color={colors.primary} />
                <Ionicons name="star" size={10} color={colors.primary} />
              </View>
              <Text style={styles.avis}>{item.navis}</Text>
            </View>
            <View
              style={{
                backgroundColor: colors.white,
                borderBottomRightRadius: 5,
                borderBottomLeftRadius: 5,
              }}
            >
              <Text style={styles.contentText}>
                {" "}
                Vous avez envie de changer votre coupe et vous voulez éclaircir
                vos mèches ? Je suis à votre service pour sublimer votre beauté
                (…)
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView>
      {/*** Icons ***/}
      <View style={styles.headerImages}>
        <Image source={logo} style={{ height: 35, width: 35, left: 25 }} />
        <View style={styles.iconsWrapper}>
          <TouchableOpacity>
            <View style={styles.iconCircle}>
              <Ionicons
                name="heart-outline"
                size={22}
                color={colors.primary}
                style={{
                  alignSelf: "center",
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
            <View style={styles.iconCircle}>
              <Ionicons
                name="mail-outline"
                size={22}
                color={colors.primary}
                style={{
                  alignSelf: "center",
                }}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconCircle}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color={colors.primary}
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
        <Text style={styles.titleGold}>___ </Text>
        <Text style={styles.titleText}>Trouvez votre professionnel</Text>
        <Text style={styles.titleGold}> ___</Text>
      </View>
      {/*** Search and filter ***/}
      <View style={styles.searchFilterWrapper}>
        <View style={styles.adressBar}>
          <TextInput
            placeholderTextColor={colors.primary}
            placeholder="Saisissez votre adresse"
            style={{
              height: 53,
              width: 310,
              borderWidth: 1,
              borderColor: colors.primary,
              borderRadius: 50,
              padding: 15,
            }}
          />
          <MaterialIcons
            name="my-location"
            size={20}
            color={colors.primary}
            style={{ position: "absolute", right: 0, padding: 15 }}
          />
        </View>
        <View style={styles.filters}>
          <TouchableOpacity
            style={styles.when}
            onPress={() => showMode("Date")}
          >
            <Text style={styles.whenText}>Quand ? </Text>
            <AntDesign name="calendar" size={16} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.when}
            onPress={() => showMode("time")}
          >
            <Text style={styles.whenText}>Horaires</Text>
            <Ionicons
              name="md-chevron-down-outline"
              size={16}
              color={colors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.mix}>
            <Entypo name="sound-mix" size={16} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {/*** Title ***/}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleGold}>___ </Text>
        <Text style={styles.titleText}>Coiffure Hommes</Text>
        <Text style={styles.titleGold}> ___</Text>
      </View>
      {/*** Cards ***/}
      <View style={styles.cardsWrapper}>
        <FlatList
          data={coiffeurs}
          renderItem={renderCoiffeurItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/*** Title ***/}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleGold}>___ </Text>
        <Text style={styles.titleText}>Coiffure Femmes</Text>
        <Text style={styles.titleGold}> ___</Text>
      </View>
      {/*** Cards ***/}
      <View style={styles.cardsWrapper}>
        <FlatList
          data={coiffeurs}
          renderItem={renderCoiffeurItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/*** Title ***/}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleGold}>___ </Text>
        <Text style={styles.titleText}>Coiffure Enfants</Text>
        <Text style={styles.titleGold}> ___</Text>
      </View>
      {/*** Cards ***/}
      <View style={styles.cardsWrapper}>
        <FlatList
          data={coiffeurs}
          renderItem={renderCoiffeurItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  iconsWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    display: "flex",
    marginLeft: 190,
  },
  iconCircle: {
    borderWidth: 1,
    borderColor: colors.primary,
    height: 30,
    width: 30,
    borderRadius: 30,
    justifyContent: "center",
    marginRight: 10,
  },
  headerImages: {
    marginTop: 35,
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
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
  searchFilterWrapper: {
    alignSelf: "center",
    marginTop: 15,
    alignContent: "center",
    justifyContent: "center",
  },
  adressBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  when: {
    flexDirection: "row",
    height: 53,
    width: 100,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 7,
  },
  whenText: {
    fontSize: 14,
    color: colors.primary,
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  cardWrapper: {
    borderRadius: 5,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: colors.textDark,
    height: 180,
    width: 220,
    margin: 10,
  },
  itemTitle: {
    fontSize: 15,
    padding: 8,
    fontWeight: "700",
  },
  itemHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  starsWrapper: {
    flexDirection: "row",
    paddingLeft: 4,
    marginLeft: 33,
  },
  avis: {
    color: colors.darkGray,
    fontSize: 10,
    marginLeft: 3,
  },
  contentText: {
    fontSize: 10,
    color: colors.darkGray,
    textAlign: "left",
    padding: 3,
  },
  cardsWrapper: {
    // position: "absolute",
    marginTop: 10,
  },
  ItemImage: {
    height: 110,
    width: 230,
  },
});
