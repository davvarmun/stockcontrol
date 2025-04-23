import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

const gs = require("../../../static/styles/globalStyles");

export default function CreateProductScreen() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState<{ name?: string; quantity?: string; price?: string }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!name.trim()) newErrors.name = "El nombre es obligatorio.";
    if (!quantity || isNaN(Number(quantity))) newErrors.quantity = "Cantidad inválida.";
    if (!price || isNaN(Number(price))) newErrors.price = "Precio inválido.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    // Aquí iría la lógica para hacer el POST al backend
    Alert.alert("Producto creado", `Nombre: ${name}\nCantidad: ${quantity}\nPrecio: $${price}`);

    // Limpiar formulario después de crear
    setName("");
    setQuantity("");
    setPrice("");
    setErrors({});
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
          placeholder="Ej. Cerveza"
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
