import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

const gs = require("../static/styles/globalStyles");

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export default function EditProductScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [errors, setErrors] = useState<{ name?: string }>({});
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    if (id) {
      fetch(`${apiUrl}/api/v1/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((err) => {
          console.error("Error al cargar producto:", err);
          Alert.alert("Error", "No se pudo cargar el producto");
        });
    }
  }, [id]);

  const validateForm = () => {
    const newErrors: { name?: string } = {};
    if (!product?.name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (product.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres.";
    } else if (product.name.trim().length > 100) {
      newErrors.name = "El nombre no puede superar los 100 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!product) return;
    if (!validateForm()) return;

    try {
      const response = await fetch(`${apiUrl}/api/v1/products/${product.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) throw new Error("Error al guardar");

      Alert.alert("Guardado", "El producto se ha actualizado");
      router.back();
    } catch (error) {
      console.error("Error al guardar producto:", error);
      Alert.alert("Error", "No se pudo guardar el producto");
    }
  };

  if (!product) {
    return (
      <View style={gs.container}>
        <Text>Cargando producto...</Text>
      </View>
    );
  }

  return (
    <View style={[gs.container, { paddingTop: 60 }]}>
      <Text style={gs.title}>Editar Producto</Text>

      <TextInput
        style={[gs.input, errors.name && { borderColor: "#D32F2F", borderWidth: 2 }]}
        placeholder="Nombre"
        value={product.name}
        onChangeText={(text) => setProduct({ ...product, name: text })}
      />
      {errors.name && <Text style={gs.errorText}>{errors.name}</Text>}

      <TextInput
        style={gs.input}
        placeholder="Cantidad"
        keyboardType="numeric"
        value={product.quantity.toString()}
        onChangeText={(text) =>
          setProduct({ ...product, quantity: parseInt(text) || 0 })
        }
      />
      <TextInput
        style={gs.input}
        placeholder="Precio"
        keyboardType="decimal-pad"
        value={product.price.toString()}
        onChangeText={(text) =>
          setProduct({ ...product, price: parseFloat(text) || 0 })
        }
      />

      <TouchableOpacity style={gs.mainButton} onPress={handleSave}>
        <Text style={gs.mainButtonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
}
