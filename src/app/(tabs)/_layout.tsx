import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "lightpink",
        headerStyle: { backgroundColor: "orange" },
        headerShadowVisible: false,
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "orange" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={
                focused
                  ? "information-circle-sharp"
                  : "information-circle-outline"
              }
              color={color}
              size={30}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="not-found"
        options={{
          headerTitle: "Page Not Found",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "warning-sharp" : "warning-outline"}
              color={color}
              size={30}
            />
          ),
        }}
      />
    </Tabs>
  );
}
