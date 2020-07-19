// * IMPORTS --------------------------------------------------------------
import React from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

// #region CONST --------------------------------------------------------
// * STYLES --------------------------------------------------------------
const progressStyles = StyleSheet.create({
  containerStyle: {
    width: "100%",
    padding: 4,
    borderRadius: 35,
    justifyContent: "center",
    marginBottom: 6,
    backgroundColor: "#e2e2e2",
  },
  innerStyle: {
    height: 35,
    borderRadius: 35,
  },
  innerCircle: {
    height: 35,
    borderRadius: 35,
  },
  label: {
    fontSize: 24,
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    alignSelf: "flex-start",
    marginLeft: 14,
  },
});

// * INTERFACE ------------------------------------------------------------
interface ProgressBarProps {
  backgroundColor: string;
  width: string;
  title: string;
}
//#endregion

const ProgressBar = ({ backgroundColor, width, title }: ProgressBarProps) => {
  //#region Screen. Progress innercircle ------------------------------------

  return (
    <View style={[progressStyles.containerStyle]}>
      <Animated.View
        style={[progressStyles.innerStyle, { backgroundColor }, { width }]}
      >
        <View style={[progressStyles.innerCircle]}>
          <Text
            style={{
              marginTop: 8,
              alignSelf: "center",
              fontFamily: "Lato-Black",
            }}
          >
            {width}
          </Text>
        </View>
      </Animated.View>
      <Animated.Text style={progressStyles.label}>
        <Text
          style={{
            fontFamily: "Lato-Italic",
            fontSize: 14,
            color: "white",
          }}
        >
          {" "}
          {title}{" "}
        </Text>
      </Animated.Text>
    </View>
  );
};
//#endregion

export default ProgressBar;
