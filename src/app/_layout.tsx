import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, headerTitle: "Home" }}
        />
        <Stack.Screen
          name="not-found"
          options={{ headerTitle: "Page Not Found" }}
        />
      </Stack>
    </>
  );
}
