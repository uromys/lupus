
import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { List, Card, Paragraph,Title, Provider as PaperProvider } from 'react-native-paper';

const Personnage = () => {
    // Sample data for the list
    const data = [
        { id: '1', title: 'Item 1', description: 'Description for Item 1' },
        { id: '2', title: 'Item 2', description: 'Description for Item 2' },
        { id: '3', title: 'Item 3', description: 'Description for Item 3' },
        // Add more items as needed
    ];

    // State to track selected item
    const [selectedItem, setSelectedItem] = React.useState(null);

    // Function to render each item in the list
    const renderItem = ({ item }) => (
        <List.Item
            title={item.title}
            onPress={() => setSelectedItem(item)}
            style={{ backgroundColor: selectedItem?.id === item.id ? '#e0e0e0' : 'white' }}
        />
    );

    return (
        <PaperProvider>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {/* Left side - scrolling list */}
                <View style={{ flex: 1, borderRightWidth: 1, borderColor: '#e0e0e0' }}>
                    <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                {/* Right side - display specific text */}
                <View style={{ flex: 2, padding: 16 }}>
                    {selectedItem ? (
                        <Card>
                            <Card.Content>
                                <Title>{selectedItem.title}</Title>
                                <Paragraph>{selectedItem.description}</Paragraph>
                            </Card.Content>
                        </Card>
                    ) : (
                        <Text>Select an item from the list</Text>
                    )}
                </View>
            </View>
        </PaperProvider>
    );
};

export default Personnage;