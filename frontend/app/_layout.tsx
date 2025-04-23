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

      {/* Pantalla de crear producto */}
      <Stack.Screen
        name="createProduct/createProduct"
        options={{
          headerTitle: "Crear Producto", // Aquí puedes definir el título de la pantalla de creación
          animation: "slide_from_right", // Opcional: Efecto de animación al navegar hacia la pantalla
        }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
    
  );
}
