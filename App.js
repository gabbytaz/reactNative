import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View,StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-web';
import { getPersonajes } from './lib/rickyMorty';
import Logo from './components/Logo';
import { CharacterCard } from './components/CharacterCard.jsx';

export default function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    console.log("Fetching ");
    getPersonajes().then((data) => {
      setPersonajes(data);
      console.log("personajes:", data);
    });
  }, []);

  return (

    <View style={styles.container}>
      <StatusBar style="light" />
      <Logo style={styles.logo}></Logo>
      <ScrollView>
        {personajes.map((character) => (
          <CharacterCard character={character}></CharacterCard>
        ))}
      </ScrollView>
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

