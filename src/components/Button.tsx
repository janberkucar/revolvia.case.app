// * IMPORTS --------------------------------------------------------------
import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// #region CONST --------------------------------------------------------
const { width } = Dimensions.get("window");

// * STYLES --------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
    height: 35,
    width: width * 0.61,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Lato-Black",
  },
});

// * INTERFACE ------------------------------------------------------------
interface ButtonProps {
  variant: "default" | "primary";
  label: string;
  onPress: () => void;
}
//#endregion

// * BUTTON VARS -----------------------------------------------------------
const Button = ({ variant, label, onPress }: ButtonProps) => {
  const backgroundColor =
    variant === "primary" ? "#5654d3" : "rgba(12, 13, 52, 0.05)";
  const color = variant === "primary" ? "white" : "#0C0D34";

  //#region Screen. BUTTON TEXT ------------------------------------------
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text style={[styles.label, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};
//#endregion

// ! DEFAULT PROPS. ------------------------------------------------------
Button.defaultProps = { variant: "default" };

export default Button;
