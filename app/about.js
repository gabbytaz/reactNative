import { Link } from "expo-router";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";


export default function About() {
    return (
        <ScrollView>
            <View style={styles.content}>
                <Text style={styles.title}>Acerca de Rick y Morty App</Text>
                <Text style={styles.subtitle}>Sobre la Serie</Text>
                <Text style={styles.subtitle}>Tecnologias</Text>

                <Link href="/" style={styles.backButton}>
                    <Text style={styles.backButtonText}>Volver al Inicio</Text>
                </Link>                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({    
    content: {
        backgroundColor: '#333',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
        width: '90%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#fff'
    },
    subtitle: {
        fontSize: 16,
        color: '#fff'
    },
    backButtonText: {
        fontSize: 16,
        color: '#33caff'
    },
    backButton: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    }
});