// * IMPORTS --------------------------------------------------------------
import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { multiply, divide } from "react-native-reanimated";

// * File Imports ---------------------------------------------------------
import { StackNavigationProps, Routes } from "../../components/Navigation";
import data from "../../../assets/data.json";

import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";

// #region CONST --------------------------------------------------------
const { width } = Dimensions.get("window");

const BORDER_RADIUS = 75;

// * STYLES --------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarPlaceholder: {
    width: 136,
    height: 136,
    backgroundColor: "#E1E2E6",
    borderRadius: 68,
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});
// #endregion

// * SLIDES ANIMATION VARS -----------------------------------------------
const MyStatus = ({ navigation }: StackNavigationProps<Routes, "MyStatus">) => {
  const scroll = useRef<Animated.ScrollView>(null);

  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: data.map((_, i) => i * width),
    outputRange: data.map((data) => data.color),
  });

  //#region Screen. Slider > Footer --------------------------------------
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scroll}
          bounces={false}
          decelerationRate="fast"
          snapToInterval={width}
          horizontal
          showsHorizontalScrollIndicator={false}
          {...scrollHandler}
        >
          {data.map(({ title, percent, rank, points }, index) => (
            <Slide
              key={index}
              right={!!(index % 2)}
              {...{ percent }}
              {...{ rank }}
              {...{ points }}
              {...{ title }}
            />
          ))}
        </Animated.ScrollView>
      </Animated.View>

      <View style={styles.footer}>
        <Animated.View
          style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}
        />

        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {data.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * data.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {data.map(({ task, skills }, index) => {
              const last = index === data.length - 1;
              const subtitle = task.title;
              const tags = task.tags;
              return (
                <Subslide
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Profile");
                    } else {
                      scroll.current
                        ?.getNode()
                        .scrollTo({ x: width * (index + 1), animated: true });
                    }
                  }}
                  {...{ subtitle, last, tags, skills }}
                />
              );
            })}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
//#endregion

export default MyStatus;
