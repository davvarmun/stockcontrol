import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, Alert } from "react-native";

const gs = require("../static/styles/globalStyles");

export default function ProductsScreen() {

    interface Product {
        id: number;
        name: string;
        stock: number;
    }

    const [products, setProducts] = useState<Product[]>([]);

    // Simulación de datos, reemplaza con llamada a tu API
    useEffect(() => {
        setProducts([
            { id: 1, name: "Cerveza", stock: 20 },
            { id: 2, name: "Refresco", stock: 35 },
            { id: 3, name: "Agua", stock: 50 },
        ]);
    }, []);

    const handleCreate = () => {
        // Navegación o acción de crear
        Alert.alert("Crear producto");
    };

    // Definir el tipo de 'product' como 'Product'
    const handleEdit = (product: Product) => {
        Alert.alert("Editar producto", `ID: ${product.id}`);
    };

    // Definir el tipo de 'id' como 'number'
    const handleDelete = (id: number) => {
        Alert.alert(
            "Eliminar producto",
            "¿Estás seguro de que deseas eliminar este producto?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: () => {
                        setProducts((prev) => prev.filter((p) => p.id !== id));
                    },
                },
            ]
        );
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
                        <Text style={gs.cardContent}>Stock: {product.stock}</Text>

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
