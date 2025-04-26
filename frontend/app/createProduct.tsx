import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import config from '../config';

const gs = require("../static/styles/globalStyles");

export default function CreateProductScreen() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState<{ name?: string; quantity?: string; price?: string }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "El nombre es obligatorio.";
    } else if (name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres.";
    } else if (name.trim().length > 100) {
      newErrors.name = "El nombre no puede superar los 100 caracteres.";
    }

    if (!quantity || isNaN(Number(quantity)) || Number(quantity) < 0)
      newErrors.quantity = "Cantidad inválida.";
    if (!price || isNaN(Number(price)) || Number(price) < 0)
      newErrors.price = "Precio inválido.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      const apiUrl = await config.getApiUrl();
      const response = await fetch(`${apiUrl}/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          quantity: Number(quantity),
          price: Number(price),
        }),
      });

      if (!response.ok) {
        throw new Error("Error al crear producto");
      }

      Alert.alert("Éxito", "Producto creado correctamente");
      router.back();
    } catch (error) {
      console.error("Error al crear producto:", error);
      Alert.alert("Error", "No se pudo crear el producto");
    }
  };

  return (
    <KeyboardAvoidingView
      style={gs.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView style={{ width: "100%" }} contentContainerStyle={{ paddingBottom: 60 }}>
        <Text style={gs.headerText}>Crear nuevo producto</Text>

        <Text style={gs.subHeaderText}>Nombre del producto</Text>
        <TextInput
          style={[gs.input, errors.name && { borderColor: "#D32F2F", borderWidth: 2 }]}
          placeholder="Ej. Cerveza (mínimo: 2 caracteres, máximo: 100 caracteres)"
          value={name}
          onChangeText={setName}
        />
        {errors.name && <Text style={gs.errorText}>{errors.name}</Text>}

        <Text style={gs.subHeaderText}>Cantidad</Text>
        <TextInput
          style={[gs.input, errors.quantity && { borderColor: "#D32F2F", borderWidth: 2 }]}
          placeholder="Ej. 50"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />
        {errors.quantity && <Text style={gs.errorText}>{errors.quantity}</Text>}

        <Text style={gs.subHeaderText}>Precio</Text>
        <TextInput
          style={[gs.input, errors.price && { borderColor: "#D32F2F", borderWidth: 2 }]}
          placeholder="Ej. 19.99"
          keyboardType="decimal-pad"
          value={price}
          onChangeText={setPrice}
        />
        {errors.price && <Text style={gs.errorText}>{errors.price}</Text>}

        <TouchableOpacity style={[gs.mainButton, { marginTop: 20 }]} onPress={handleSubmit}>
          <Text style={gs.mainButtonText}>Guardar producto</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
