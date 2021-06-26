import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Guild, { GuildProps } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";

import { styles } from "./styles";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: "1",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "2",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "3",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "4",
      name: "Lendários",
      icon: null,
      owner: true,
    },
    {
      id: "5",
      name: "Lendários",
      icon: null,
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.guilds}
      />
    </View>
  );
}
