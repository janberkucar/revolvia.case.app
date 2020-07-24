// * IMPORTS --------------------------------------------------------------
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// * File Imports ---------------------------------------------------------
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";
import Tag from "./Tag";

// #region CONST --------------------------------------------------------
// * STYLES --------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 61,
    flex: 1,
  },
  subtitle: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 25,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 4,
  },
  description: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 30,
    color: "#0C0D34",
    textAlign: "center",
  },
  taskcontainer: {
    marginBottom: 8,
  },
  progressContainer: {
    top: 6,
    width: "100%",
  },
});

// * INTERFACE ------------------------------------------------------------
interface SubslideProps {
  subtitle: string;
  tags: string[];
  last?: boolean;
  skills: any;
  onPress: () => void;
}
// #endregion

const description = "Today's Task";

// * BUTTON VARS -----------------------------------------------------------
const Subslide = ({ subtitle, tags, skills, last, onPress }: SubslideProps) => {
  //#region Screen. SUBTITLE DESC BUTTON ------------------------------------
  return (
    <View style={styles.container}>
      <View style={styles.taskcontainer}>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Tag {...{ onPress }} tags={tags} />
      </View>

      <View style={styles.progressContainer}>
        <ProgressBar {...{ skills }} />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <Button
          label={last ? "Quickies In Progress" : "Quickies In Progress"}
          variant={last ? "primary" : "default"}
          {...{ onPress }}
        />
      </View>
    </View>
  );
};
//#endregion

export default Subslide;
