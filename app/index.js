import { StatusBar, View,StyleSheet } from "react-native";
import Logo from "../components/Logo";
import { Main } from "../components/Main";


export default function Index() {
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Logo style={styles.logo}></Logo>
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
    }
});