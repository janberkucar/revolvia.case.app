// * IMPORTS --------------------------------------------------------------
import React from "react";
import { View } from "react-native";

import Skill from "./Skill";

// * INTERFACE ------------------------------------------------------------
interface ProgressBarProps {
  skills: any;
}
//#endregion

const ProgressBar = ({ skills }: ProgressBarProps) => {
  //#region Screen. Progress innercircle ------------------------------------
  return (
    <View>
      {skills.map(
        (skill: { color: string; percent: string; title: string }) => (
          <Skill
            backgroundColor={skill.color}
            width={skill.percent}
            title={skill.title}
          />
        )
      )}
    </View>
  );
};
//#endregion

export default ProgressBar;
