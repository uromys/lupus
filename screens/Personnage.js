import React, { useState } from 'react';
import { View, FlatList, Text, Pressable } from 'react-native';
import { List, Card, Paragraph, Title, Provider as PaperProvider } from 'react-native-paper';
import { perso } from '../assets/perso/data';

const Personnage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isCampTextVisible, setIsCampTextVisible] = useState(false);

    const toggleCampTextVisibility = () => {
        setIsCampTextVisible(!isCampTextVisible);
    };

    const renderItem = ({ item }) => (
        <List.Item
            title={item.title}
            onPress={() => {
                setSelectedItem(item);
                setIsCampTextVisible(false);
            }}
            style={{ backgroundColor: selectedItem?.id === item.id ? '#e0e0e0' : 'white' }}
        />
    );

    return (
        <PaperProvider>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                {/* Left side - scrolling list */}
                <View style={{ flex: 1, borderRightWidth: 1, borderColor: '#e0e0e0' }}>
                    <FlatList data={perso} renderItem={renderItem} keyExtractor={(item) => item.id} />
                </View>

                {/* Right side - display specific text */}
                <View style={{ flex: 2, padding: 16, position: 'relative' }}>
                    {selectedItem ? (
                        <Card>
                            <Card.Cover source={selectedItem.photo} />
                            <Card.Content>
                                <Pressable onPress={toggleCampTextVisibility}>
                                <Card.Actions>

                                        <View
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                right: 0,
                                                padding: 8,
                                                backgroundColor:
                                                    selectedItem.camp === 'loup'
                                                        ? 'red'
                                                        : selectedItem.camp === 'village'
                                                            ? 'green'
                                                            : 'blue',
                                            }}
                                        >
                                            <Text style={{ color: 'white' }}>{selectedItem.camp}</Text>
                                            {isCampTextVisible && (
                                                <Text style={{ color: 'white' }}>yes</Text>
                                            )}
                                        </View>
                                </Card.Actions>
                                </Pressable>
                                <Title>{selectedItem.title}</Title>
                                <Paragraph>{selectedItem.description}</Paragraph>

                            </Card.Content>

                        </Card>
                    ) : (
                        <Text></Text>
                    )}
                </View>
            </View>
        </PaperProvider>
    );
};

export default Personnage;
