// * IMPORTS --------------------------------------------------------------
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  lessThan,
  multiply,
} from "react-native-reanimated";
import { transformOrigin } from "react-native-redash";

// * File Imports ---------------------------------------------------------
import HalfCircle from "./HalfCircle";
import { PI, RADIUS } from "./Constants";

// #region CONST --------------------------------------------------------
// * INTERFACE ------------------------------------------------------------
interface CircularProgressProps {
  progress: Animated.Node<number>;
  percentage: number;
  bg: string;
  fg: string;
}
//#endregion

// * CIRCLE VARS ----------------------------------------------------------
const CircularProgress = ({
  progress,
  bg,
  fg,
  percentage,
}: CircularProgressProps) => {
  const theta = multiply(progress, 2 * PI - 2);
  const opacity = lessThan(theta, PI);
  const rotate = interpolate(theta, {
    inputRange: [PI, 2 * PI],
    outputRange: [0, PI],
    extrapolate: Extrapolate.CLAMP,
  });

  //#region Screen. HALF VIEW > TEXT > HALF VIEW --------------------------
  return (
    <>
      <View style={{ zIndex: 1 }}>
        <HalfCircle color={fg} />
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            transform: transformOrigin(
              { x: 0, y: RADIUS / 2 },
              { rotate: theta }
            ),
            opacity,
          }}
        >
          <HalfCircle color={bg} />
        </Animated.View>
      </View>
      <View
        style={{
          zIndex: 1,
        }}
      >
        <Text
          style={{
            zIndex: 0,
            textAlign: "center",
            position: "absolute",
          }}
        >
          {percentage}
        </Text>
      </View>
      <View style={{ transform: [{ rotate: "180deg" }] }}>
        <HalfCircle color={fg} />
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            transform: transformOrigin({ x: 0, y: RADIUS / 2 }, { rotate }),
          }}
        >
          <HalfCircle color={bg} />
        </Animated.View>
      </View>
    </>
  );
};
//#endregion
export default CircularProgress;
