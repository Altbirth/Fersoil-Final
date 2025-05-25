import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

// DocumentationScreen: displays app documentation and usage instructions
export default function DocumentationScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Welcome to Fersoil 🌱</Text>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                {/* Introduction Section */}
                <Text style={styles.sectionTitle}>🌟 Introduction</Text>
                <Text style={styles.text}>
                    Thank you for choosing Fersoil! This app is your smart companion for analyzing soil fertility.
                    Whether you're a home gardener or a newbie farmer, Fersoil provides you with insights
                    whether you soil is healthy or not. Let's make your soil work for you! 🌾
                </Text>

                {/* Features Section */}
                <Text style={styles.sectionTitle}>💡 Features</Text>
                <Text style={styles.text}>
                    Here's what you can do with Fersoil:{"\n\n"}
                    🌿 <Text style={{ fontWeight: 'bold' }}>Soil Analysis Made Simple:</Text> Snap or upload a photo, and we'll do the rest.{"\n"}
                    📊 <Text style={{ fontWeight: 'bold' }}>Predictions:</Text> Get soil fertility levels.{"\n"}
                    🛠️ <Text style={{ fontWeight: 'bold' }}>Easy to Use:</Text> Designed for everyone.
                </Text>

                {/* How to Use Section */}
                <Text style={styles.sectionTitle}>📋 How to Use</Text>
                <Text style={styles.textWithSpacing}>
                    Follow these easy steps to start analyzing your soil:{"\n\n"}
                    1. Launch the App: Tap on the Fersoil icon to open the app.{"\n\n"}
                    2. Capture or Select a Photo: Choose “Take a Photo” to snap a new image of your soil or “Select Photo from Gallery” to upload an existing one. Make sure your image is clear for the best results! 📸{"\n\n"}
                    3. Crop Your Image (if needed): If the image is too large, crop it to focus on the soil.{"\n\n"}
                    4. Predict Fertility: Tap on “Predict Fertility” to let the app analyze your soil. 🌍{"\n\n"}
                    5. View Results: Received fertility predictions. 🍅
                </Text>

                 {/* Contact Support Section */}
                <Text style={styles.sectionTitle}>🤝 Contact Support</Text>
                <Text style={styles.text}>
                    Got questions or need help? We’re here for you! Reach out to us at{" "}
                    <Text style={styles.email}>202180014@psu.palawan.edu.ph</Text>, and we’ll respond as soon as we can. Happy gardening! 🌼
                </Text>
            </ScrollView>
        </View>
    );
}

// Styles for the DocumentationScreen component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF8E1", 
        padding: 20,
    },
    bold: {
        fontWeight: 'bold',
      },
      
    pageTitle: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#4CAF50",
        textAlign: "center",
        marginBottom: 20,
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#388E3C",
        marginBottom: 10,
        marginTop: 20,
    },
    text: {
        fontSize: 18,
        color: "#6D4C41",
        lineHeight: 28, 
    },
    textWithSpacing: {
        fontSize: 18,
        color: "#6D4C41",
        lineHeight: 30, 
        marginBottom: 20,
    },
    email: {
        fontWeight: "bold",
        color: "#0277BD", 
    },
});
