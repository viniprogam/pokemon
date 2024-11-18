// Importa as bibliotecas necessárias do React e React Native
import React from "react";
import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import styles from "../../assets/styles"; // Importa os estilos personalizados
import { useNavigation } from "@react-navigation/native"; // Importa o hook de navegação
import { pokemonColors } from "../../store/action"; // Importa as cores dos Pokémon

// Define o componente funcional PokemonCard que recebe props como argumento
export default function PokemonCard(props) {
    const { pokemon } = props; // Desestrutura a prop pokemon
    const navigation = useNavigation(); // Obtém a função de navegação

    // Define a cor de fundo baseada no tipo do Pokémon
    const pokemonColor = pokemonColors[pokemon.type];
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles };

    return (
        // Envolve o conteúdo em um TouchableWithoutFeedback para tornar a View clicável
        <TouchableWithoutFeedback
            onPress={() => navigation.navigate("Detail", pokemon)} // Navega para a tela de detalhes ao clicar
        >
            <View style={styles.card}>
                <View style={styles.card__spacing}>
                    <View style={bgStyles}>
                        {/* Exibe a imagem do Pokémon */}
                        <Image
                            style={styles.card__imagePokemon}
                            source={{ uri: pokemon.imgUrl }}
                        />
                        {/* Exibe o nome do Pokémon */}
                        <Text style={styles.card__name}>{pokemon.name}</Text>
                        {
                            // Mapeia o array de tipos do Pokémon para renderizar cada tipo
                            pokemon.types.map((type, idx) => {
                                return (
                                    // Cria uma View para cada tipo com uma chave única
                                    <View key={idx} style={styles.card__typeContainer}>
                                        <Text style={styles.card__typeText}>{type.type.name}</Text>
                                    </View>
                                );
                            })
                        }
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
/*
xplicação de cada parte do código:
Importações:
React: Importa o React.
Text, View, Image, TouchableWithoutFeedback: Importa componentes básicos do React Native.
styles: Importa estilos personalizados.
useNavigation: Importa o hook de navegação do React Navigation.
pokemonColors: Importa as cores dos Pokémon.
Componente PokemonCard:
Define um componente funcional que recebe props.
Desestrutura pokemon de props.
Usa o hook useNavigation para obter a função de navegação.
Renderização:
Define a cor de fundo (pokemonColor) baseada no tipo do Pokémon.
Envolve o conteúdo em um TouchableWithoutFeedback para tornar a View clicável.
Ao clicar, navega para a tela de detalhes (Detail) passando o Pokémon como parâmetro.
Renderiza a estrutura do cartão do Pokémon:
Exibe a imagem do Pokémon.
Exibe o nome do Pokémon.
Mapeia o array pokemon.types para renderizar cada tipo do Pokémon.
*/