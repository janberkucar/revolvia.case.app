import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MyStatus, Profile } from "./src/Status";
import { LoadAssets } from "./src/components";
import { Routes } from "./src/components/Navigation";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const fonts = {
  "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  "Lato-Black": require("./assets/fonts/Lato-Black.ttf"),
  "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
  "Lato-Italic": require("./assets/fonts/Lato-Italic.ttf"),
};

const styles = StyleSheet.create({
  avatarContainer: {
    shadowColor: "#151734",
    shadowRadius: 32,
    shadowOpacity: 0.4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 25,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

const StatusStack = createStackNavigator<Routes>();
const StatusNavigator = () => {
  return (
    <StatusStack.Navigator>
      <StatusStack.Screen
        name="MyStatus"
        component={MyStatus}
        options={({ navigation, route }) => ({
          headerRight: (props) => (
            <TouchableOpacity
              {...props}
              style={styles.avatarContainer}
              onPress={() => navigation.navigate("Profile")}
            >
              <Image
                source={require("./assets/avatar.jpg")}
                style={styles.avatar}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <StatusStack.Screen name="Profile" component={Profile} />
    </StatusStack.Navigator>
  );
};

export default function App() {
  return (
    <LoadAssets {...{ fonts }}>
      <StatusNavigator />
    </LoadAssets>
  );
}
