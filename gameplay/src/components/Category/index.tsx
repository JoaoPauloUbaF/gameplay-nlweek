import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { SvgProps } from "react-native-svg";
import { View, Text } from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckBox?: boolean;
};

export function Category({
  title,
  icon: Icon,
  checked = false,
  hasCheckBox = false,
  ...rest
}: Props) {
  const {
    secondary50,
    secondary90,
    secondary70,
    secondary40,
    secondary80,
    secondary100,
  } = theme.colors;

  return (
    <RectButton {...rest}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary90]}
      >
        <LinearGradient
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[
            checked ? secondary80 : secondary50,
            checked ? secondary40 : secondary90,
          ]}
        >
          {hasCheckBox && (
            <View style={checked ? styles.checked : styles.check} />
          )}
          <Icon width={48} height={48} />

          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
}
