import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import logo from "../images/logo.png";
import { Feather } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
const Profil = () => {
  const [checked, setChecked] = React.useState(false);
  const [check, setCheck] = React.useState(false);
  //modal
  const [modalVisible, setModalVisible] = React.useState(false);
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
          <TouchableOpacity>
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
        <Text style={styles.titleText}>Vos informations personnelles</Text>
        <Text style={styles.titleGold}> ___</Text>
      </View>
      {/*** Content ***/}
      <View style={styles.contentWrapper}>
        <View style={styles.infosContainer}>
          <View style={styles.infosheader}>
            <Text style={styles.infoText}>Nom</Text>
            <Feather name="edit" size={18} color={colors.gray} />
          </View>
          <TextInput placeholder="ROLLAND" />
        </View>
        <View style={styles.infosContainer}>
          <View style={styles.infosheader}>
            <Text style={styles.infoText}>Prénom</Text>
            <Feather name="edit" size={18} color={colors.gray} />
          </View>
          <TextInput placeholder="Marie" />
        </View>
        <View style={styles.infosContainer}>
          <View style={styles.infosheader}>
            <Text style={styles.infoText}>Votre adresse</Text>
            <Feather name="edit" size={18} color={colors.gray} />
          </View>
          <TextInput placeholder="25 rue Frédéric Chopin 26000 VALENCE" />
        </View>
        <View style={styles.infosContainer}>
          <View style={styles.infosheader}>
            <Text style={styles.infoText}>Téléphone</Text>
            <Feather name="edit" size={18} color={colors.gray} />
          </View>
          <TextInput placeholder="06 06 06 06 06" />
        </View>
        <View style={styles.infosContainer}>
          <View style={styles.infosheader}>
            <Text style={styles.infoText}>Email</Text>
            <Feather name="edit" size={18} color={colors.gray} />
          </View>
          <TextInput placeholder="votreemail@email.com" />
        </View>
        <View style={styles.infosContainer}>
          <View style={styles.infosheader}>
            <Text style={styles.infoText}>Date de naissance :</Text>
            <Feather name="edit" size={18} color={colors.gray} />
          </View>
          <TextInput placeholder="03/01/1990" />
        </View>
        <View style={styles.infosContainer}>
          <View style={styles.infosheader}>
            <Text style={styles.infoText}>Mot de passe</Text>
            <Feather name="edit" size={18} color={colors.gray} />
          </View>
          <TextInput placeholder="********" />
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
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.btnText}>ENREGISTRER</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/** MODAL */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Vos données sont enregistrées avec succès
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>CONFIRMER</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

export default Profil;

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
    marginBottom: 20,
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
  inputTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  infosheader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
  },
  infosContainer: {
    marginBottom: 10,
  },
  contentWrapper: {
    alignItems: "center",
  },
  agreements: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  textagreement: {
    fontSize: 12,
    color: colors.placeholder,
    textDecorationLine: "underline",
  },
  agreementsContainer: {
    marginTop: 10,
    width: "80%",
    //marginLeft: 32,
    alignSelf: "center",
    marginBottom: 30,
  },
  btn: {
    backgroundColor: colors.primary,
    height: 40,
    width: 160,
    borderRadius: 60,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: colors.white,
    fontSize: 15,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: colors.primary,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 13,
    fontWeight: "700",
  },
});
