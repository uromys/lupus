import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    onPrimary: 'white',
    primaryContainer: 'rgb(95, 43, 146)',
    onPrimaryContainer: 'rgb(240, 219, 255)',
    secondary: 'yellow',
    onSecondary: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
};

//theme ref https://callstack.github.io/react-native-paper/docs/guides/theming

//fonts ref https://callstack.github.io/react-native-paper/docs/guides/fonts#material-design-3

//components ref https://callstack.github.io/react-native-paper/docs/components/ActivityIndicator

export { theme };
