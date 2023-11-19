import { ActivityIndicator, Text } from "react-native";

export function renderContent({ isLoading, isError }, content) {
  if (isError) {
    return (
      <Text
        style={{
          fontSize: 18,
          textAlign: "center",
          color: "orange",
        }}
      >
        Ямар нэгэн алдаа гарлаа. Дахин оролдоно уу.
      </Text>
    );
  } else {
    return isLoading ? (
      <ActivityIndicator size="large" style={{ marginTop: 20 }} />
    ) : (
      content
    );
  }
}
