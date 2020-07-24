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
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    left: 55,
  },
  label: {
    position: "absolute",
    zIndex: 1,
    justifyContent: "center",
    alignSelf: "flex-start",
    marginLeft: 14,
  },
});

// * INTERFACE ------------------------------------------------------------
interface SkillProps {
  backgroundColor: string;
  width: string;
  title: string;
}
//#endregion

const Skill = ({ backgroundColor, width, title }: SkillProps) => {
  //#region Skill. View AnimatedView --------------------------------------

  return (
    <View style={[progressStyles.containerStyle]}>
      <Animated.View
        style={[progressStyles.innerStyle, { backgroundColor }, { width }]}
      >
        <View style={[progressStyles.innerCircle]}>
          <Text
            style={{
              fontFamily: "Lato-Italic",
              color: "white",
              fontSize: 12,
            }}
          >
            {title}
          </Text>
        </View>
      </Animated.View>
      <Animated.Text style={progressStyles.label}>
        <Text
          style={{
            fontFamily: "Lato-Black",
            fontSize: 16,
            color: "black",
          }}
        >
          {width}
        </Text>
      </Animated.Text>
    </View>
  );
};
//#endregion

export default Skill;
