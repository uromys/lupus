import { useTheme } from 'react-native-paper';
import { View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ActivityIndicator, Button, Searchbar, Text } from 'react-native-paper';
import { useState } from 'react';

export default function HomeScreen({ route, navigation }) {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={[theme.container, { backgroundColor: theme.colors.primaryContainer }]}>
      <Text variant="displayLarge" style={{ color: theme.colors.onPrimaryContainer }}>
        React Native Paper
      </Text>
      <Searchbar placeholder="Search" mode="bar" onChangeText={setSearchQuery} value={searchQuery} style={{ alignSelf: 'stretch' }} />
      <Text variant="bodyMedium" style={{ color: theme.colors.onPrimaryContainer }}>
        displayLarge: {JSON.stringify(theme.fonts.displayLarge)}
      </Text>
      <ActivityIndicator animating={true} color={theme.colors.primary} />
      <View style={{ margin: 20 }}>
        <FontAwesome.Button backgroundColor="indigo" style={{ padding: 10 }} name="camera" onPress={() => {}}>
          Press Me
        </FontAwesome.Button>
      </View>
      <View>
        <Button icon="camera" mode="contained" buttonColor="indigo" textColor="white" onPress={() => {}}>
          Press Me
        </Button>
      </View>
    </View>
  );
}
