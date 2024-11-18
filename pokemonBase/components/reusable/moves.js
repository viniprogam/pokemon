// Importa as bibliotecas necessárias do React e React Native
import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../../assets/styles"; // Importa os estilos personalizados
import { pokemonColors } from "../../store/action"; // Importa as cores dos Pokémon

// Define o componente funcional Moves que recebe props como argumento
export default function Moves(props) {
    const { item } = props; // Desestrutura a prop item

    // Define a cor de fundo baseada no tipo do Pokémon
    const pokemonColor = pokemonColors[item.type];

    return (
        // Envolve o conteúdo em um ScrollView para permitir rolagem
        <ScrollView>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                {
                    // Mapeia o array de movimentos do item para renderizar cada movimento
                    item.moves.map((move, idx) => {
                        return (
                            // Cria uma View para cada movimento com uma chave única
                            <View key={idx} style={{ backgroundColor: pokemonColor, borderRadius: 5, alignSelf: "baseline", margin: 5, opacity: 0.4 }}>
                                {/* Exibe o nome do movimento */}
                                <Text style={{ color: "black", padding: 5 }}>{move.move.name}</Text>
                            </View>
                        );
                    })
                }
            </View>
        </ScrollView>
    );
}
/*
Explicação de cada parte do código:
Importações:
React, { useState, useEffect }: Importa o React e hooks para gerenciar estado e efeitos colaterais.
Text, View, ScrollView: Importa componentes básicos do React Native.
styles: Importa estilos personalizados.
pokemonColors: Importa as cores dos Pokémon.
Componente Moves:
Define um componente funcional que recebe props.
Desestrutura item de props.
Renderização:
Define a cor de fundo (pokemonColor) baseada no tipo do Pokémon.
Envolve o conteúdo em um ScrollView para permitir rolagem.
Renderiza a estrutura dos movimentos do Pokémon:
Usa flexDirection: "row" e flexWrap: "wrap" para alinhar os itens horizontalmente e permitir quebra de linha.
Mapeia o array item.moves para renderizar cada movimento.
Para cada movimento:
Cria uma View com uma chave única e estilo personalizado.
Exibe o nome do movimento.
*/