// Importa as bibliotecas necessárias do React e React Native
import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../../assets/styles"; // Importa os estilos personalizados
import { ProgressBar, Colors } from 'react-native-paper'; // Importa componentes da biblioteca react-native-paper

// Define o componente funcional Stats que recebe props como argumento
export default function Stats(props) {
    const { item } = props; // Desestrutura a prop item

    return (
        // Envolve o conteúdo em um ScrollView para permitir rolagem
        <ScrollView>
            {
                // Mapeia o array de stats do item para renderizar cada estatística
                item.stats.map((stat, idx) => {
                    return (
                        // Cria uma View para cada estatística com uma chave única
                        <View key={idx} style={{ flexDirection: "row", marginBottom: 20 }}>
                            {/* Exibe o nome da estatística com a primeira letra maiúscula */}
                            <Text style={styles.stats__title}>{stat.stat.name[0].toUpperCase() + stat.stat.name.substring(1)}</Text>
                            {/* Exibe o valor base da estatística */}
                            <Text style={styles.stats__text}>{stat.base_stat}</Text>
                            {/* Cria uma barra de progresso para a estatística */}
                            <View style={{ width: 130, alignContent: "center", paddingTop: 10 }}>
                                <ProgressBar progress={stat.base_stat / 100} color={Colors.grey800} />
                            </View>
                        </View>
                    );
                })
            }
        </ScrollView>
    );
}
/*
Explicação de cada parte do código:
Importações:
React, { useState, useEffect }: Importa o React e hooks para gerenciar estado e efeitos colaterais.
Text, View, ScrollView: Importa componentes básicos do React Native.
styles: Importa estilos personalizados.
ProgressBar, Colors: Importa componentes e cores da biblioteca react-native-paper.
Componente Stats:
Define um componente funcional que recebe props.
Desestrutura item de props.
Renderização:
Envolve o conteúdo em um ScrollView para permitir rolagem.
Mapeia o array item.stats para renderizar cada estatística.
Para cada estatística:
Cria uma View com flexDirection: "row" para alinhar os itens horizontalmente.
Exibe o nome da estatística com a primeira letra maiúscula.
Exibe o valor base da estatística.
Cria uma barra de progresso (ProgressBar) que mostra o progresso baseado no valor da estatística (stat.base_stat / 100).
*/
