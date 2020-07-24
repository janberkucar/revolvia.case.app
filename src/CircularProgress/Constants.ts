import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const { PI } = Math;
export const TAU = 2 * PI;
export const RADIUS = width / 5 - 16;
export const SIZE = width / 3 + 11;
export const STROKE_WIDTH = 30;
export const COLOR_FG = "#ffcc00";
export const COLOR_BG = "white";
