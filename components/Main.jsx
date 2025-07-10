import { useEffect, useState } from 'react';
import { getPersonajes } from '../lib/rickyMorty';
import { CharacterCard } from './CharacterCard.jsx';
import { ScrollView } from 'react-native-web';

export function Main() {
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        console.log("Fetching ");
        getPersonajes().then((data) => {
            setPersonajes(data);
            console.log("personajes:", data);
        });
    }, []);


    return (
        
            <ScrollView>
                {personajes.map((character) => (
                    <CharacterCard character={character}
                    key={character.id}></CharacterCard>
                ))}
            </ScrollView>
        
    );
}