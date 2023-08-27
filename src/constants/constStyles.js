import { StyleSheet } from "react-native";

export const constStyles = StyleSheet.create({
  // ITEM
  itemContainer: {
    flexDirection: "row",
    marginBottom: 18,
  },
  itemContainerLast: {
    flexDirection: "row",
  },
  itemInfo: {
    width: "100%",
    flexShrink: 1,
    justifyContent: "center",
    marginLeft: 16,
  },
  itemTitle: {
    fontSize: 18,
    marginBottom: 6,
  },
  itemText: {
    color: "gray",
  },
  itemTypeText: {
    fontFamily: "open-sans-bold",
    textTransform: "uppercase",
    textAlign: "right",
    marginTop: 14,
  },
});
