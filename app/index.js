import { StatusBar, View, StyleSheet, Text } from "react-native";
import Logo from "../components/Logo";
import { Main } from "../components/Main";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";


export default function Index() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Logo style={styles.logo}></Logo>
            <Link href="/about" asChild>
                <TouchableOpacity style={styles.aboutButton}>
                    <Text style={styles.aboutButtonText}>Acerca de</Text>
                </TouchableOpacity>
            </Link>
            <Main></Main>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        backgroundColor: '#fff',
        padding: 20
    },
    aboutButton:{
        backgroundColor: '#fff'
    },
    aboutButtonText:{
        backgroundColor: '#fff'
    }
});