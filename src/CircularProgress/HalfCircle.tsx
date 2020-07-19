// * IMPORTS --------------------------------------------------------------
import React from "react";
import { View } from "react-native";
import { RADIUS } from "./Constants";

// * INTERFACE ------------------------------------------------------------
interface HalfCircleProps {
  color: string;
}

const HalfCircle = ({ color }: HalfCircleProps) => {
  //#region Screen. HalfCircle  -------------------------------------------
  return (
    <View
      style={{
        width: RADIUS * 2,
        height: RADIUS,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          backgroundColor: color,
          width: RADIUS * 2,
          height: RADIUS * 2,
          borderRadius: RADIUS,
        }}
      />
    </View>
  );
};
//#endregion
export default HalfCircle;
