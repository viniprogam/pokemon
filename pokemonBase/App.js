// Importa componentes essenciais do React Native
import { View, StatusBar } from 'react-native';
// Importa componentes de navegação do React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa os componentes de tela
import Home from './components/Home';
import Detail from './components/Detail';

// Importa os estilos
import styles from './assets/styles';

// Importa a store do Redux
import store from './store';

// Importa o Provider do React Redux para fornecer a store aos componentes
import { Provider } from 'react-redux';

// Cria um stack navigator para navegação entre telas
const Stack = createNativeStackNavigator();

// Função principal do aplicativo
export default function App() {
  return (
    // Envolve o aplicativo com o Provider para que todos os componentes tenham acesso à store do Redux
    <Provider store={store}>
      {/* View principal do aplicativo com estilos aplicados */}
      <View style={styles.container}>
        {/* Configura a barra de status do dispositivo */}
        <StatusBar animated={true} backgroundColor="transparent" barStyle="dark-content" />
        
        {/* Container de navegação que gerencia o estado da navegação */}
        <NavigationContainer>
          {/* Configura o stack navigator com as telas e opções */}
          <Stack.Navigator screenOptions={{
            headerShown: false // Oculta o cabeçalho padrão das telas
          }}>
            {/* Define a tela "Home" como uma das telas do stack navigator */}
            <Stack.Screen name="Home" component={Home} />
            {/* Define a tela "Detail" como uma das telas do stack navigator */}
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}
/*
Explicação Passo a Passo:
Importações:
View e StatusBar são componentes do React Native.
NavigationContainer e createNativeStackNavigator são usados para configurar a navegação.
Home e Detail são componentes de tela.
styles contém os estilos do aplicativo.
store é a store do Redux.
Provider é usado para fornecer a store do Redux aos componentes.
Criação do Stack Navigator:
createNativeStackNavigator cria um stack navigator para navegação entre telas.
Função Principal App:
Envolve o aplicativo com o Provider para que todos os componentes possam acessar a store do Redux.
Usa uma View para envolver o conteúdo do aplicativo e aplica estilos.
Configura a StatusBar para personalizar a barra de status do dispositivo.
Usa NavigationContainer para gerenciar o estado da navegação.
Configura o Stack.Navigator com duas telas: Home e Detail, e oculta o cabeçalho padrão das telas.
*/