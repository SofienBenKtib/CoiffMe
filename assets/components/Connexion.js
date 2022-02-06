import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  ImageBackground,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../colors/Colors";
import logo from "../images/logo.png";
import { useFonts, OpenSans_300Light } from "@expo-google-fonts/open-sans";
import background from "../images/background.png";
import { Ionicons } from "@expo/vector-icons";
import coiffeurs from "../data/Coiffeurs";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import MainContainer from "../navigation/MainContainer";
import Signup from "./Signup";
const dimensions = Dimensions.get("window");
const imageWidth = dimensions.width;
const imageHeight = Math.round((dimensions.width * 9) / 16);
const Connexion = ({ navigation }) => {
  {
    /** 
  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
  });
*/
  }
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
      <View style={styles.header}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.txt}>
          "Reservez votre instant beauté à domicile ou au bureau..."
        </Text>
      </View>
      <View style={styles.imageBgWrapper}>
        <ImageBackground
          source={background}
          style={{
            height: dimensions.width,
            width: dimensions.width,
            opacity: 0.8,
          }}
        />
        <View style={styles.DarkOverlay}></View>
        {/*** Title ***/}
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>___ </Text>
          <Text style={styles.title}>Trouver votre professionnel</Text>
          <Text style={styles.title}> ___</Text>
        </View>
        {/*** Search Bar ***/}
        <View style={styles.searchBarWrapper}>
          <TextInput
            placeholder="Saisissez votre adresse..."
            placeholderTextColor={colors.black}
            style={styles.searchBar}
            textAlign="left"
          />
          <Ionicons
            name="search"
            size={20}
            color="black"
            style={{ position: "absolute", right: 14 }}
          />
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
        <View style={styles.bottomTextWrapper}>
          <Text style={styles.bottomText}>Grille tarifaire</Text>
        </View>
      </View>
      {/*** Login form ***/}
      <View style={styles.loginWrapper}>
        <View style={styles.loginInput}>
          <Ionicons
            name="person-outline"
            size={12}
            color={colors.primary}
            style={{ padding: 5 }}
          />
          <TextInput
            placeholder="IDENTIFIANT"
            placeholderTextColor={colors.primary}
          />
        </View>
        <View style={styles.loginInput}>
          <Ionicons
            name="md-lock-closed-outline"
            size={12}
            color={colors.primary}
            style={{ padding: 5 }}
          />
          <TextInput
            placeholder="MOT DE PASSE"
            placeholderTextColor={colors.primary}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.loginButtonWrapper}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate("BtmTab")}
          >
            <Text style={styles.loginText}>SE CONNECTER</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.links}>
          <TouchableOpacity>
            <Text style={styles.textLink}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textLink}>Devenir partenaire</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("BtmTab")}>
            <Text style={styles.textLink}>S'inscrire</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Connexion;

const styles = StyleSheet.create({
  logo: {
    height: 120,
    width: 120,
    marginTop: 60,
  },
  header: {
    alignContent: "center",
    alignItems: "center",
    flex: 1,
  },
  txt: {
    marginTop: 21,
    fontSize: 13,
    fontStyle: "italic",
    color: colors.dark,
    textAlign: "center",
    //fontFamily: "OpenSans_300Light",
  },
  imageBgWrapper: {
    marginTop: 21,
  },
  DarkOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    height: dimensions.width - 5,
    backgroundColor: "#000",
    opacity: 0.2,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 50,
    marginTop: 15,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    margin: 1,
    fontWeight: "600",
  },
  searchBarWrapper: {
    backgroundColor: colors.white,
    opacity: 0.7,
    borderRadius: 5,
    width: 295,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    marginTop: 55,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: colors.white,
    padding: 10,
  },
  searchBar: {},
  ItemImage: {
    height: 110,
    width: 230,
  },
  cardWrapper: {
    borderRadius: 5,
    flexDirection: "row",
    overflow: "hidden",
    shadowColor: colors.textDark,
    height: 188,
    width: 230,
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
    position: "absolute",
    marginTop: 100,
  },
  bottomText: {
    fontSize: 15,
    textAlign: "center",
    color: colors.white,
  },
  bottomTextWrapper: {
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 12,
  },
  loginInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    height: 45,
    width: 295,
    alignSelf: "center",
    padding: 5,
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: colors.primary,
    height: 45,
    width: 295,
    alignSelf: "center",
    margin: 24,
    borderRadius: 5,
    justifyContent: "center",
  },
  loginText: {
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
  },
  links: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "relative",
    bottom: 15,
    right: 10,
  },
  textLink: {
    fontSize: 9,
    color: colors.primary,
  },
});
