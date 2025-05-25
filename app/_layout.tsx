import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#000000" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="auth/register" />
        <Stack.Screen name="auth/otp" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="developers" />
        <Stack.Screen name="car-details/[id]" />
        <Stack.Screen name="checkout" />
      </Stack>
    </>
  )
}
