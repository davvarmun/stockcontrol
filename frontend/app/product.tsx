import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useFocusEffect, router } from "expo-router";

const gs = require("../static/styles/globalStyles");

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export default function ProductsScreen() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/products");
      if (!response.ok) throw new Error("Error de red");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
      Alert.alert("Error", "No se pudieron cargar los productos");
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, [])
  );

  const handleCreate = () => {
    Alert.alert("Crear producto"); // puedes hacer navegación luego
  };

  const handleEdit = (product: Product) => {
    router.push(`/editProduct?id=${product.id}`);
  };

  const handleDelete = (id: number) => {
    Alert.alert("Eliminar producto", "¿Estás seguro de que deseas eliminar este producto?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          try {
            const response = await fetch(`http://localhost:8080/api/v1/products/${id}`, {
              method: "DELETE",
            });
            if (!response.ok) throw new Error("Error al eliminar");
            fetchProducts(); // Recargar la lista
          } catch (error) {
            console.error("Error al eliminar:", error);
            Alert.alert("Error", "No se pudo eliminar el producto");
          }
        },
      },
    ]);
  };

  return (
    <View style={[gs.container, { paddingTop: 60 }]}>
      <TouchableOpacity style={gs.mainButton} onPress={handleCreate}>
        <Text style={gs.mainButtonText}>Crear producto</Text>
      </TouchableOpacity>

      <ScrollView style={{ width: "100%", marginTop: 20 }}>
        {products.map((product) => (
          <View key={product.id} style={gs.card}>
            <Text style={gs.cardTitle}>{product.name}</Text>
            <Text style={gs.cardContent}>Cantidad: {product.quantity}</Text>
            <Text style={gs.cardContent}>Precio: {product.price.toFixed(2)} €</Text>

            <View style={[gs.row, { marginTop: 10 }]}>
              <TouchableOpacity
                style={[gs.secondaryButton, { flex: 1, marginRight: 5 }]}
                onPress={() => handleEdit(product)}
              >
                <Text style={gs.secondaryButtonText}>Editar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[gs.mainButton, { flex: 1, marginLeft: 5 }]}
                onPress={() => handleDelete(product.id)}
              >
                <Text style={gs.mainButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
