import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="product"
      screenOptions={{
        headerTitle: "StockControl",
      }}
    >
      <Stack.Screen
        name="products"
        options={{
          animation: "slide_from_bottom",
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
