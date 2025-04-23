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
      <Stack.Screen
        name="editProduct"
        options={{
          title: "Editar producto",
          animation: "slide_from_right",
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
