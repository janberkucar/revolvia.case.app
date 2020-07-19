// * IMPORTS --------------------------------------------------------------
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// * File Imports ---------------------------------------------------------
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";

// #region CONST --------------------------------------------------------
// * STYLES --------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
    flex: 1,
  },
  subtitle: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 30,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 6,
  },
  description: {
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 25,
    color: "#0C0D34",
    textAlign: "center",
  },
});

const progress = [
  {
    backgroundColor: "#ff3b30",
    width: "65%",
    title: "skill1",
  },
  {
    backgroundColor: "#5ac8fa",
    width: "90%",
    title: "skill2",
  },
  {
    backgroundColor: "#49d361",
    width: "40%",
    title: "skill3",
  },
];

// * INTERFACE ------------------------------------------------------------
interface SubslideProps {
  subtitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}
// #endregion

// * BUTTON VARS -----------------------------------------------------------
const Subslide = ({ subtitle, description, last, onPress }: SubslideProps) => {
  //#region Screen. SUBTITLE DESC BUTTON ------------------------------------
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      {progress.map(({ backgroundColor, width, title }, index) => (
        <ProgressBar
          key={index}
          {...{ backgroundColor }}
          {...{ width }}
          {...{ title }}
        />
      ))}

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
