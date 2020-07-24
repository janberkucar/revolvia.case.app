// * IMPORTS --------------------------------------------------------------
import React from "react";
import { Text, StyleSheet, Dimensions, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// #region CONST --------------------------------------------------------
const { width } = Dimensions.get("window");

// * STYLES --------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    width: width * 0.61,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  tagContainer: {
    borderRadius: 75,
    height: 16,
    backgroundColor: "#e2e2e2",
    justifyContent: "center",
    margin: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  tagTitle: {
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Lato-Italic",
  },
});
// * INTERFACE ------------------------------------------------------------
interface TagProps {
  onPress: () => void;
  tags: string[];
}
// #endregion

// * TAG VARS -------------------------------------------------------------
const Tag = ({ onPress, tags }: TagProps) => {
  //#region Screen. TAG > Touchable ---------------------------------------
  return (
    <View style={styles.container}>
      {tags.map((_, index) => (
        <TouchableOpacity style={styles.tagContainer} {...{ onPress }}>
          <Text style={styles.tagTitle}> {_} </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Tag;
