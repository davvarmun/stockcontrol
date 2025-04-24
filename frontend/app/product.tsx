import React, { useState, useCallback } from "react";
import { View, Text, ScrollView, TouchableOpacity, Modal } from "react-native";
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
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [productToDelete, setProductToDelete] = useState<Product | null>(null);

  const apiUrl = "https://stock-control-backend-o8gg8m5lw-davids-projects-9f8ec439.vercel.app";


  const fetchProducts = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/v1/products`);
      if (!response.ok) throw new Error("Error de red");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchProducts();
    }, [])
  );

  const handleCreate = () => {
    router.push("/createProduct");
  };

  const handleEdit = (product: Product) => {
    router.push(`/editProduct?id=${product.id}`);
  };

  const showDeleteModal = (product: Product) => {
    setProductToDelete(product);
    setIsModalVisible(true);  
  };

  const hideDeleteModal = () => {
    setIsModalVisible(false);  
    setProductToDelete(null);  
  };

  const handleDelete = async () => {
    if (productToDelete) {
      try {
        const response = await fetch(`${apiUrl}/api/v1/products/${productToDelete.id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Error al eliminar");
        setProducts((prev) => prev.filter((p) => p.id !== productToDelete.id));
        hideDeleteModal(); 
      } catch (error) {
        console.error("Error al eliminar:", error);
      }
    }
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
                onPress={() => showDeleteModal(product)}
              >
                <Text style={gs.mainButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      <Modal
        transparent={true}
        animationType="fade"
        visible={isModalVisible}
        onRequestClose={hideDeleteModal}
      >
        <View style={gs.centeredView}>
          <View style={gs.modalView}>
            <Text style={gs.modalTitle}>Eliminar producto</Text>
            <Text style={gs.bodyText}>¿Estás seguro de que deseas eliminar este producto?</Text>
            <View style={gs.row}>
              <TouchableOpacity
                style={[gs.secondaryButton, { flex: 1, marginRight: 5 }]}
                onPress={hideDeleteModal}
              >
                <Text style={gs.secondaryButtonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[gs.mainButton, { flex: 1, marginLeft: 5 }]}
                onPress={handleDelete}
              >
                <Text style={gs.mainButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}