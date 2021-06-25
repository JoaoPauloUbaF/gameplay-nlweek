import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  title: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 10,
  },
  check: {
    position: "absolute",
    right: 7,
    top: 7,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary30,
    borderWidth: 1,
    borderRadius: 3,
  },
  checked: {
    position: "absolute",
    right: 7,
    top: 7,
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
  },
});
