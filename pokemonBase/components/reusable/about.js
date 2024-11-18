// Importa as bibliotecas React e React Native necessárias
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

// Importa os estilos personalizados
import styles from "../../assets/styles";

// Define o componente funcional About, que recebe props como argumento
export default function About(props) {
    // Desestrutura a prop item das props recebidas
    const { item } = props;

    // Define um estado local abilities, inicializado como um array vazio
    const [abilities, setAbilities] = useState([]);

    // useEffect é usado para executar um efeito colateral após a renderização do componente
    useEffect(() => {
        // Função para extrair as habilidades do item e atualizar o estado abilities
        function getAbility() {
            let arr = [];
            for (let i = 0; i < item.abilities.length; i++) {
                arr.push(item.abilities[i].ability.name);
            }
            return setAbilities(arr);
        }

        // Chama a função getAbility para atualizar o estado abilities
        getAbility();
    }, []); // O array vazio [] indica que o efeito será executado apenas uma vez, após a montagem do componente

    // Renderiza a interface do usuário
    return (
        <View>
            {/* Exibe a espécie do item */}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>Species</Text>
                <Text style={styles.about__text}>{item.species}</Text>
            </View>

            {/* Exibe a altura do item */}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>Height</Text>
                <Text style={styles.about__text}>{item.height} ''</Text>
            </View>

            {/* Exibe o peso do item */}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>Weight</Text>
                <Text style={styles.about__text}>{item.weight} lbs</Text>
            </View>

            {/* Exibe as habilidades do item */}
            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Text style={styles.about__title}>Abilities</Text>
                <Text style={styles.about__text}>{abilities.join(', ')}</Text>
            </View>
        </View>
    );
}
/*
Explicação Passo a Passo:
Importações:
React, useState e useEffect são importados do React.
Text e View são componentes do React Native.
styles é importado de um arquivo de estilos personalizado.
Definição do Componente About:
O componente About é definido como uma função que recebe props como argumento.
A prop item é desestruturada das props.
Estado Local:
abilities é um estado local inicializado como um array vazio, usando useState.
Efeito Colateral com useEffect:
useEffect é usado para executar a função getAbility após a montagem do componente.
getAbility cria um array arr e o preenche com os nomes das habilidades do item.
setAbilities é chamado para atualizar o estado abilities com o array arr.
Renderização:
O componente retorna uma View contendo várias View internas.
Cada View interna exibe uma propriedade do item (species, height, weight, abilities).
As habilidades são exibidas como uma string, unidas por vírgulas.
*/