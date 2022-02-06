import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../colors/Colors";
const dimensions = Dimensions.get("window");
const Wid = dimensions.width;
const Hei = Math.round((dimensions.width * 9) / 16);
const Signup = ({ navigation }) => {
  return (
    <ScrollView>
      {/***  Title ***/}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleGold}>___ </Text>
        <Text style={styles.titleText}>Je m'inscris</Text>
        <Text style={styles.titleGold}> ___</Text>
      </View>
      {/***  Form ***/}
      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Prénom</Text>
          <TextInput
            placeholder="Votre Prénom"
            placeholderTextColor={colors.placeholder}
            style={styles.placeholderContainer}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Nom</Text>
          <TextInput
            placeholder="Votre Nom"
            placeholderTextColor={colors.placeholder}
            style={styles.placeholderContainer}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Téléphone</Text>
          <TextInput
            placeholder="_ _ _ _ _ _ _ _ _ _"
            placeholderTextColor={colors.placeholder}
            style={styles.placeholderContainer}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Adresse Postale</Text>
          <TextInput
            placeholder="Entrez votre adresse"
            placeholderTextColor={colors.placeholder}
            style={styles.placeholderContainer}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>CP / Ville</Text>
          <TextInput
            placeholder="26000 VALENCE"
            placeholderTextColor={colors.placeholder}
            style={styles.placeholderContainer}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Téléphone</Text>
          <TextInput
            placeholder="_ _ _ _ _ _ _ _ _ _"
            placeholderTextColor={colors.placeholder}
            style={styles.placeholderContainer}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Date de naissance</Text>
          <TextInput
            placeholder="jj/mm/aaaa"
            placeholderTextColor={colors.placeholder}
            style={styles.placeholderContainer}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CONTINUER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
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
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 80,
    alignItems: "center",
  },
  inputText: {
    textTransform: "uppercase",
    color: colors.primary,
    fontSize: 12,
    padding: 5,
    marginLeft: 32,
  },
  placeholderContainer: {
    height: 43,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    width: "80%",
    alignSelf: "center",
    padding: 5,
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 15,
  },
  formWrapper: {
    marginTop: 50,
    width: "100%",
  },
  button: {
    backgroundColor: colors.primary,
    width: 295,
    height: 43,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 15,
  },
});
