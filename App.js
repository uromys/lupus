import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import {PersoProvider} from './context/PersoContext';
import Navigator from './navigator/Navigator';
import { theme } from './theme/Theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
          <PersoProvider>
        <NavigationContainer>
          <Stack.Navigator>
              <Tab.Screen name="Navigator" component={Navigator} />
          </Stack.Navigator>
        </NavigationContainer>
          </PersoProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
