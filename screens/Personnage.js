import React, { useState } from 'react';
import { View, FlatList, Text, Pressable,ScrollView } from 'react-native';
import { List, Card, Paragraph, Title, Provider as PaperProvider } from 'react-native-paper';
import { perso } from '../assets/perso/data';

const Personnage = () => {
    const [selectedItem, setSelectedItem] = useState(perso[0]);
    const [isCampTextVisible, setIsCampTextVisible] = useState(false);
    const [showPouvoir, setShowPouvoir] = useState(false);

    const toggleCampTextVisibility = () => {
        setIsCampTextVisible(!isCampTextVisible);
    };

    const togglePouvoirVisibility = () => {
        setShowPouvoir(!showPouvoir);
    };


    const renderCampText = () => {
        if (selectedItem) {
            return selectedItem.condition
        }
        return '';
    };
    const renderPouvoirText = () => {
        if (selectedItem) {
            return selectedItem.pouvoir;
        }
        return '';
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
                <FlatList
                    data={perso}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    style={{ flex: 1, borderRightWidth: 1, borderColor: '#e0e0e0' }}
                />

                {/* Right side - display specific text */}
                <View style={{ flex: 2, padding: 16, position: 'relative' }}>
                    {selectedItem ? (
                        <Card>
                            <Card.Cover source={selectedItem.photo} />
                            <Card.Content>

                                    <Card.Actions>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'flex-end', // Align items to the end of the row
                                            }}
                                        >
                                            <Pressable onPress={toggleCampTextVisibility}>
                                            <View
                                                style={{
                                                    padding: 8,
                                                    backgroundColor:
                                                        selectedItem.camp === 'loup'
                                                            ? 'red'
                                                            : selectedItem.camp === 'village'
                                                                ? 'green'
                                                                : 'blue',
                                                }}
                                            >
                                                <Text style={{ color: 'white' }}>
                                                    {selectedItem.camp}
                                                </Text>
                                            </View>
                                            </Pressable>
                                            {selectedItem.pouvoir && (
                                                <Pressable onPress={togglePouvoirVisibility}>
                                                    <View
                                                        style={{
                                                            marginLeft: 8,
                                                            padding: 8,
                                                            backgroundColor: 'grey',
                                                        }}
                                                    >
                                                        <Text style={{ color: 'white' }}>
                                                            {'pouvoir'}
                                                        </Text>
                                                    </View>
                                                </Pressable>
                                            )}
                                        </View>
                                    </Card.Actions>


                            <Title>{selectedItem.title}</Title>
                                <Paragraph>
                                    {(() => {
                                        if (isCampTextVisible) {
                                            return renderCampText();
                                        } else if (showPouvoir) {
                                            return renderPouvoirText();
                                        } else {
                                            return selectedItem?.description || "";
                                        }
                                    })()}
                                </Paragraph>
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