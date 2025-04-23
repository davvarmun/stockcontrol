import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 1,
        },
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          headerShown: false,
          lazy: true,
          tabBarLabel: 'Productos',
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart" color={color} size={24} />
          ),
        }}
      />

      {/* Pantalla oculta: Create Product */}
      <Tabs.Screen
        name="createProduct/createProduct"
        options={{
          href: null, // 👈 Oculta la pestaña
          headerShown: false,
        }}
      />
    </Tabs>
    
  );
}
