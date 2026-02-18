import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function App(): JSX.Element {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <View style={styles.profile}>
        <Image
          source={require("../assets/images/putri.jpeg")}
          style={styles.image}
        />
        <Text style={styles.name}>putri</Text>
        <Text style={styles.name}>(00000103649)</Text>
      </View>

      <View style={styles.profile}>
        <Image
          source={require("../assets/images/Gibran.jpeg")}
          style={styles.image}
        />
        <Text style={styles.name}>Gibran </Text>
        <Text style={styles.name}>(00000067869)</Text>
      </View>

      <View style={styles.profile}>
        <Image
          source={require("../assets/images/Rizki.jpeg")}
          style={styles.image}
        />
        <Text style={styles.name}>Rizki</Text>
        <Text style={styles.name}>(00000085695)</Text>
      </View>


      <View style={styles.profile}>
        <Image
          source={require("../assets/images/tony.jpeg")}
          style={styles.image}
        />
        <Text style={styles.name}>Tony</Text>
        <Text style={styles.name}>(00000108455)</Text>
      </View>


      <View style={styles.profile}>
        <Image
          source={require("../assets/images/student1.png")}
          style={styles.image}
        />
        <Text style={styles.name}>Budi </Text>
        <Text style={styles.name}>(00000108695)</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
 container: {
  alignItems: "center",
  paddingVertical: 20,
  paddingTop: 40,
 },
profile: {
   marginBottom: 30,
   alignItems: "center",
  },
  image: {
    width: 300,
    height: 450,
  },
  name: {
   marginTop: 10,
   fontSize: 18,
   fontWeight: "bold",
  },
});
