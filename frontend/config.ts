import { Platform } from "react-native";
import { NetworkInfo } from "react-native-network-info";

const getLocalhost = async (): Promise<string> => {
  if (Platform.OS === "web") {
    return "localhost";
  }

  if (Platform.OS === "android") {
    return "10.0.2.2";
  }

  try {
    const ipAddress = await NetworkInfo.getIPAddress();
    return ipAddress ?? "localhost"; 
  } catch (error) {
    console.error("Error al obtener la IP:", error);
    return "localhost";
  }
};

export default {
  getApiUrl: async (): Promise<string> => {
    const localhost = await getLocalhost();
    return `http://${localhost}:8080/api/v1`;
  },
};
