// * IMPORTS --------------------------------------------------------------
import React from "react";
import { Button } from "react-native";
import { StackNavigationProps, Routes } from "./Navigation";

const ProfileButton = ({
  navigation,
}: StackNavigationProps<Routes, "MyStatus">) => {
  return (
    <Button
      onPress={() => {
        console.log("Test");
        navigation.navigate("Profile");
      }}
      title="Info"
      color="#fff"
    />
  );
};

export default ProfileButton;
