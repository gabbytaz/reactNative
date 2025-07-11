import { useEffect, useState } from 'react';
import { getPersonajes } from '../lib/rickyMorty';
import { CharacterCard } from './CharacterCard.jsx';
import { ActivityIndicator, FlatList, ScrollView } from 'react-native-web';

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
        <>
            {personajes.length === 0 ? (
                <ActivityIndicator size={"large"} />
            ) : (
                <FlatList
                    data={personajes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({ item, index }) => (
                            <CharacterCard character={item} index={index}></CharacterCard>
                        )
                    }
                >
                </FlatList>
            )}
        </>
    );
}