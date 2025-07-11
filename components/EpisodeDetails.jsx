import { Text, View } from "react-native";

export function EpisodeDetails({ episode }) {
    return (
        <View>
            <Text>Hola mundo cruel {episode.episode}</Text>
            <Text>de react native {episode.id}</Text>
            <Text>Creación de un proyecto{episode.name}</Text>
            <Text>creando rutas {episode.air_date}</Text>
        </View>


    );

}