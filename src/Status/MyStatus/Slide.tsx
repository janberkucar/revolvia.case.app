// * IMPORTS --------------------------------------------------------------
import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// * File Imports ---------------------------------------------------------
import CircleProg from "../../CircularProgress/CirleProg";

// * EXPORTS --------------------------------------------------------------
const { width, height } = Dimensions.get("window");
export const SLIDE_HEIGHT = 0.4 * height;

// #region CONST --------------------------------------------------------
// * STYLES --------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    width,
  },

  titleContainer: {
    marginTop: 20,
    height: 60,
    justifyContent: "center",
  },

  title: {
    fontSize: 26,
    fontFamily: "SFProText-Bold",
    color: "white",
    textAlign: "center",
    lineHeight: 80,
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: width * 0.13,
    marginRight: width * 0.13,
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    flexDirection: "row",
  },
});

// * INTERFACE ------------------------------------------------------------
interface SlideProps {
  title: string;
  percent: number;
  right?: boolean;
  rank: string;
  points: number;
}
// #endregion
// * TITLE VARS -----------------------------------------------------------
const Slide = ({ title, right, percent, rank, points }: SlideProps) => {
  const transform = [
    { translateY: (SLIDE_HEIGHT - 100) / 2 },
    { translateX: right ? width / 2 - 30 : -width / 2 + 30 },
    { rotate: right ? "-90deg" : "90deg" },
  ];

  //#region Screen. TITLE CONT > TITLE ------------------------------------
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, { transform }]}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.underlay}>
        <View style={styles.circle}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons
              name="md-star"
              size={20}
              color="#fbc800"
              style={{ margin: 5 }}
            />

            <Text
              style={{
                fontSize: 14,
                fontFamily: "SFProText-Regular",
                color: "white",
              }}
            >
              {points}
            </Text>
          </View>

          <CircleProg percentage={percent} />

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "flex-end",
            }}
          >
            <Ionicons
              name="md-trophy"
              size={20}
              color="#fbc800"
              style={{ margin: 4 }}
            />

            <Text
              style={{
                fontSize: 14,
                fontFamily: "SFProText-Regular",
                color: "white",
              }}
            >
              {rank}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
//#endregion
export default Slide;
