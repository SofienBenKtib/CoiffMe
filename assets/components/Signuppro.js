import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import colors from "../colors/Colors";
import { Checkbox } from "react-native-paper";
//import * as Linking from "expo-linking";
const Signuppro = () => {
  const [checked, setChecked] = React.useState(false);
  const [check, setCheck] = React.useState(false);
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
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            placeholder="contact@votreemail.com"
            placeholderTextColor={colors.placeholder}
            style={styles.placeholderContainer}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Votre mot de passe</Text>
          <TextInput
            placeholder="*******"
            placeholderTextColor={colors.placeholder}
            style={styles.placeholderContainer}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputText}>Confirmer votre mot de passe</Text>
          <TextInput
            placeholder="*******"
            placeholderTextColor={colors.placeholder}
            style={styles.placeholderContainer}
          />
        </View>
        <View style={styles.agreementsContainer}>
          <View style={styles.agreements}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
              color={colors.primary}
            />
            <TouchableOpacity>
              <Text style={styles.textagreement}>
                J'accepte les Conditions d'Utilisation de l'application CoiffMe.
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.agreements}>
            <Checkbox
              status={check ? "checked" : "unchecked"}
              onPress={() => {
                setCheck(!check);
              }}
              color={colors.primary}
            />
            <TouchableOpacity>
              <Text style={styles.textagreement}>
                J'accepte les Politique de protection des données personnelles
                de l'application CoiffMe.
              </Text>
            </TouchableOpacity>
          </View>
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

export default Signuppro;

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
  textagreement: {
    fontSize: 12,
    color: colors.placeholder,
    textDecorationLine: "underline",
  },
  agreements: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  agreementsContainer: {
    marginTop: 30,
    width: "70%",
    marginLeft: 32,
  },
});
