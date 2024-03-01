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
    surface: '#1E1E1E', // Dark Surface color
    text: '#FFFFFF', // White Text color
    error: '#FF0000', // Red for errors
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF', // Dark background color
  },
  creation: {
    marginBottom: 16,
  },
  inputTextStyle: {
    width: '100%',
    padding: 8,
    backgroundColor: '#262626',
    borderRadius: 8,
    color: '#FFFFFF', // White Text color for input
  },
  errorTextStyle: {
    marginBottom: 16,
    color: '#FF0000', // Red for errors
  },
  cardStyle: {
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    backgroundColor: '#1E1E1E', // Dark Surface color for cards
    borderColor: '#333333', // Border color for cards
    borderWidth: 1, // Border width for cards
  },
  contentStyle: {
    padding: 8,
    borderRadius: 8,
  },
  titleStyle: {
    fontSize: 14,
    marginBottom: 12,
    fontWeight: 'bold',
    color: '#FFFFFF', // White Text color for titles
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconStyle: {
    backgroundColor: '#333333', // Darker background color for icons
    borderRadius: 8,
    marginHorizontal: 5,
  },
  topNumberText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FFFFFF', // White Text color
  },
  flatListContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export { theme };