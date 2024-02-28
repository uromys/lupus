import { MD3DarkTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FF6347', // Tomato
    onPrimary: '#FFFFFF', // White
    primaryContainer: '#5F2B92', // Dark Purple
    onPrimaryContainer: '#F0DBFF', // Light Purple
    secondary: '#FFD700', // Gold
    onSecondary: '#000000', // Black
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#121212', // Dark background color
  },
};

export { theme };