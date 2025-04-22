import { View, Text, Dimensions, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { useRouter } from 'expo-router';

export default function Index() {
  const { height } = Dimensions.get("window");
  const [isMobile, setIsMobile] = useState(Dimensions.get("window").width < 768);
  const router = useRouter(); // Para navegar entre pantallas

  const gs = require("../static/styles/globalStyles");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(Dimensions.get("window").width < 768);
    };

    const subscription = Dimensions.addEventListener("change", handleResize);
    return () => subscription?.remove();
  }, []);

  const [fontsLoaded] = useFonts({
    "Loubag-Regular": require("../assets/fonts/Loubag-Regular.ttf"),
    "Loubag-Medium": require("../assets/fonts/Loubag-Medium.ttf"),
    "Loubag-Bold": require("../assets/fonts/Loubag-Bold.ttf"),
    "Loubag-Light": require("../assets/fonts/Loubag-Light.ttf"),
  });

  if (!fontsLoaded) return null;

  const handleStart = () => {
    router.push('/product'); // Navegar a la pantalla de productos
  };

  return (
    <View style={[gs.container, { height }]}>
      <Image
        source={require("../static/images/profile.webp")}
        style={[
          gs.image,
          {
            width: isMobile ? 120 : 160,
            height: isMobile ? 120 : 160,
            marginBottom: 30,
          },
        ]}
      />

      <Text
        style={[
          gs.headerText,
          {
            fontFamily: "Loubag-Bold",
            fontSize: isMobile ? 28 : 36,
            textAlign: "center",
          },
        ]}
      >
        StockControl
      </Text>

      <Text
        style={[
          gs.subHeaderText,
          {
            fontFamily: "Loubag-Light",
            fontSize: isMobile ? 16 : 18,
            textAlign: "center",
            marginBottom: 30,
          },
        ]}
      >
        Optimiza el stock de tu bar como un profesional 🍻
      </Text>

      <TouchableOpacity style={gs.mainButton} onPress={handleStart}>
        <Text style={gs.mainButtonText}>Comenzar</Text>
      </TouchableOpacity>
    </View>
  );
}
