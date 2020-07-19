// * IMPORTS --------------------------------------------------------------
import React, { useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import Animated, { multiply, divide } from "react-native-reanimated";

// * File Imports ---------------------------------------------------------
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Subslide from "./Subslide";
import Dot from "./Dot";
import { StackNavigationProps, Routes } from "../../components/Navigation";

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

// ? SLIDES CONTENT -----------------------------------------------------
const slides = [
  {
    title: "Art Director",
    subtitle: "Use Shortcuts As A Pro",
    description: "Today's Task",
    color: "#3e9a8f",
    percentage: 65,
    rank: "Beginner",
    points: 582,
  },
  {
    title: "Journey",
    subtitle: "Task",
    description: "Today's Task",
    color: "#f76325",
    percentage: 0,
    rank: "Beginner",
    points: 0,
  },
  {
    title: "Frontend Developer",
    subtitle: "Flex Froggy",
    description: "Today's Task",
    color: "#5454d0",
    percentage: 80,
    rank: "Senior",
    points: 260,
  },

  {
    title: "Journey",
    subtitle: "Task",
    description: "Today's Task",
    color: "#9cd35b",
    percentage: 0,
    rank: "Senior",
    points: 0,
  },
];
// #endregion

// * SLIDES ANIMATION VARS -----------------------------------------------
const MyStatus = ({ navigation }: StackNavigationProps<Routes, "MyStatus">) => {
  const scroll = useRef<Animated.ScrollView>(null);

  const { scrollHandler, x } = useScrollHandler();
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
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
          {slides.map(({ title, percentage, rank, points }, index) => (
            <Slide
              key={index}
              right={!!(index % 2)}
              {...{ percentage }}
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
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
              transform: [{ translateX: multiply(x, -1) }],
            }}
          >
            {slides.map(({ subtitle, description }, index) => {
              const last = index === slides.length - 1;

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
                  {...{ subtitle, description, last }}
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
