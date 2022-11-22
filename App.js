import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Image
          source={require("./assets/logo.jpeg")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>Interstellar</Text>
        <View style={styles.info}>
          <Text style={styles.detailsFilm}>2014</Text>
          <Text style={styles.detailsFilm}>PG-13</Text>
          <Text style={styles.detailsFilm}>2h 49min</Text>
          <Text style={styles.detailsFilm}>Adventure, Drama, Sci-Fi</Text>
        </View>
        <View style={styles.containerFilm}>
          <Image
            source={require("./assets/film.jpg")}
            style={styles.filmPicture}
            resizeMode="contain"
          />
          <View style={styles.film}>
            <Text style={styles.descriptionFilm}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival
            </Text>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={() => {
                alert("Add to watchlist !");
              }}
            >
              <Text style={styles.btnText}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.notes}>
          <View style={styles.notesDiv}>
            <Text>
              <AntDesign name="star" size={24} color="yellow" />
            </Text>
            <Text style={{ color: "white" }}>8.6/10</Text>
            <Text style={{ color: "white" }}>1.1M</Text>
          </View>
          <View style={styles.notesDiv}>
            <Text>
              <AntDesign name="staro" size={24} color="white" />
            </Text>
            <Text style={{ color: "white" }}>RATE THIS</Text>
            <Text></Text>
          </View>
          <View style={styles.notesDiv}>
            <Text
              style={{
                color: "white",
                backgroundColor: "#65C552",
                width: 20,
              }}
            >
              74
            </Text>
            <Text style={{ color: "white" }}>Metascore</Text>
            <Text style={{ color: "white" }}>46 critic reviews</Text>
          </View>
        </View>
      </View>
      <View style={styles.actorsInfo}>
        <View style={styles.titleActors}>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Top Billed Cast
          </Text>
          <Text style={{ color: "#0E78A9" }}>SEE ALL</Text>
        </View>
      </View>

      <ScrollView horizontal={true}>
        <View style={styles.divActor}>
          <Image
            source={require("./assets/mackenzie.jpg")}
            style={styles.actorPicture}
            resizeMode="contain"
          />
          <Text
            style={{ color: "white", width: 100 }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            Matthew McConaughey
          </Text>
          <Text style={{ color: "white" }}>Cooper</Text>
        </View>
        <View style={styles.divActor}>
          <Image
            source={require("./assets/anne.jpg")}
            style={styles.actorPicture}
            resizeMode="contain"
          />
          <Text style={{ color: "white" }}>Anne Hathaway </Text>
          <Text style={{ color: "white" }}>Brand</Text>
        </View>
        <View style={styles.divActor}>
          <Image
            source={require("./assets/jessica.jpg")}
            style={styles.actorPicture}
            resizeMode="contain"
          />
          <Text style={{ color: "white" }}>Jessica Chastaing </Text>
          <Text style={{ color: "white" }}>Murph</Text>
        </View>
        <View style={styles.divActor}>
          <Image
            source={require("./assets/matthew.jpg")}
            style={styles.actorPicture}
            resizeMode="contain"
          />
          <Text style={{ color: "white" }}>Matthew </Text>
          <Text style={{ color: "white" }}>Matt</Text>
        </View>
      </ScrollView>
      <View>
        <Text style={styles.director}>Director</Text>
        <Text style={styles.director}>Christopher Nolan</Text>
      </View>
      <View style={styles.writerContainer}>
        <Text style={styles.director}>Writers</Text>
        <Text style={styles.director}>
          Jonathan Nolan (written by) and Christopher Nolan (written by)
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    backgroundColor: "#191919",
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },
  container: {
    backgroundColor: "#393939",
    paddingLeft: 10,
  },
  logo: {
    height: 60,
    width: 60,
  },
  containerInfo: {
    backgroundColor: "black",
    paddingLeft: 10,
    paddingTop: 10,
    backgroundColor: "#212121",
  },
  title: {
    color: "white",
    fontSize: 20,
    marginBottom: 10,
  },
  info: {
    flexDirection: "row",
  },
  detailsFilm: {
    color: "white",
    fontSize: 12,
    marginRight: 10,
  },
  containerFilm: {
    flexDirection: "row",
    marginTop: 20,
  },
  filmPicture: {
    height: 200,
    width: 150,
    flex: 1,
  },
  film: {
    flex: 1,
  },
  descriptionFilm: {
    color: "white",
    marginBottom: 10,
  },
  btn: {
    backgroundColor: "#0277BD",

    alignItems: "center",

    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    height: 30,
    lineHeight: 30,
  },
  notes: {
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
  notesDiv: {
    flex: 1,
    alignItems: "center",
    borderWidth: 0.25,
    // borderColor: "red",
  },
  actorsInfo: {
    marginTop: 10,
    backgroundColor: "#212121",
  },
  titleActors: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  scrollContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  divActor: {
    alignItems: "center",
    justifyContent: "center",
  },
  actorPicture: {
    height: 200,
    width: 150,
  },
  director: {
    color: "white",
  },
  writerContainer: {
    marginTop: 10,
  },
});
