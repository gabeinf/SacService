import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
      headerBackButtonDisplayMode: "minimal"
    }}>
      <Stack.Screen name="listing/[id].tsx" />
    </Stack>
  )
}
