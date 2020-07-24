// * IMPORTS --------------------------------------------------------------
import React from "react";
import { Value, set, useCode } from "react-native-reanimated";
import { timing } from "react-native-redash";
import { StyleSheet, View, Text } from "react-native";

// * File Imports ---------------------------------------------------------
import CircularProgress from "./CircularProgress";
import { COLOR_BG, COLOR_FG, RADIUS, STROKE_WIDTH } from "./Constants";

// #region CONST --------------------------------------------------------
// * STYLES --------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  percentageText: {
    zIndex: 3,
    textAlignVertical: "center",
    alignSelf: "center",
    fontFamily: "Lato-Bold",
    fontSize: 65,
    color: "black",
  },
  symbolText: {
    zIndex: 2,
    fontFamily: "SFProText-Bold",
    marginTop: -10,
    fontSize: 14,
  },
});

// * INTERFACE ------------------------------------------------------------
interface CircleProgProps {
  percentage: number;
}
//#endregion

const CircleProg = ({ percentage }: CircleProgProps) => {
  const progress = new Value(0);
  useCode(() => set(progress, timing({ duration: 3000 })), [progress]);
  //#region Screen. CircProg - Innercircle  -------------------------------

  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <Text style={styles.percentageText}>{percentage}</Text>
        <Text style={styles.symbolText}> % </Text>
      </View>
      <View style={styles.overlay}>
        <CircularProgress
          bg={COLOR_BG}
          fg={COLOR_FG}
          {...{ progress }}
          {...{ percentage }}
        />
      </View>

      <View style={styles.overlay}>
        <View
          style={{
            width: RADIUS * 2 - STROKE_WIDTH,
            height: RADIUS * 2 - STROKE_WIDTH,
            borderRadius: RADIUS - STROKE_WIDTH / 2,
            backgroundColor: COLOR_BG,
          }}
        />
      </View>
    </View>
  );
};
//#endregion
export default CircleProg;
