import React from "react";
import { ImageBackground, Text, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import Header from "../../components/Header";

import { styles } from "./style";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { FlatList } from "react-native-gesture-handler";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {
  const members = [
    {
      id: "1",
      username: "Rubino",
      avatar_url: "https://github.com/rubenscoliseu.png",
      status: "online",
    },
    {
      id: "2",
      username: "Rubino",
      avatar_url: "https://github.com/rubenscoliseu.png",
      status: "offline",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto
              name="share"
              size={24}
              color={theme.colors.primary}
            ></Fontisto>
          </BorderlessButton>
        }
      ></Header>

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que pegamos challenger sem perder na md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={ListDivider}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}
