import { Platform } from "react-native";
import { NetworkInfo } from "react-native-network-info";

// Esta función obtiene la IP local automáticamente dependiendo de la plataforma
const getLocalhost = () => {
  return new Promise((resolve, reject) => {
    // Si estamos en la web, por defecto usa "localhost"
    if (Platform.OS === "web") {
      resolve("localhost");
      return;
    }

    if (Platform.OS === "android") {
      // En Android emulador usamos 10.0.2.2 para acceder al host
      resolve("10.0.2.2");
      return;
    }

    // Para dispositivos físicos, obtenemos la IP local automáticamente
    NetworkInfo.getIPAddress()
      .then((ipAddress) => {
        if (ipAddress) {
          resolve(ipAddress); // Si conseguimos la IP, la devolvemos
        } else {
          resolve("localhost"); // Si no obtenemos la IP, usamos "localhost"
        }
      })
      .catch((error) => {
        console.error("Error al obtener la IP:", error);
        resolve("localhost"); // Si ocurre un error, usamos "localhost"
      });
  });
};

// Aquí construimos la URL base para usarla en las peticiones
const BASE_URL = `http://${getLocalhost()}:8080`;

export default {
  getApiUrl: async () => {
    const localhost = await getLocalhost(); // Asignamos IP automáticamente
    return `http://${localhost}:8080/api/v1`;
  },
};
