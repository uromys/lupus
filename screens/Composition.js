import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import {Button, Card, IconButton, useTheme} from 'react-native-paper';
import { perso } from '../assets/perso/data';
import { usePersoContext } from '../context/PersoContext';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adjust the icon library based on your preference

const Composition = () => {
    const theme = useTheme();
    const { inputList } = usePersoContext();
    const [counts, setCounts] = useState({});
    const { width } = Dimensions.get('window');
    const cardWidth = width / 2 - 24;
    const handleIncrement = (id) => {
        const maxAllowedCount = inputList.length;

        const currentTotalCount = Object.values(counts).reduce((sum, count) => sum + count, 0);

        if (currentTotalCount < maxAllowedCount) {
            setCounts((prevCounts) => ({
                ...prevCounts,
                [id]: (prevCounts[id] || 0) + 1,
            }));
        }
    };
    const handleDecrement = (id) => {
        if (counts[id] > 0) {
            setCounts((prevCounts) => ({
                ...prevCounts,
                [id]: prevCounts[id] - 1,
            }));
        }
    };


    const renderPerson = ({ item }) => {
        const cardStyle = {
            width: cardWidth,
            margin: 8,
            borderRadius: 16,
            overflow: 'hidden',
            elevation: 4,
        };

        const contentStyle = {
            padding: 16,
            backgroundColor: 'white',
            borderRadius: 16,
        };

        const titleStyle = {
            fontSize: 20,
            marginBottom: 12,
            fontWeight: 'bold',
            color: 'black',
        };

        const buttonContainerStyle = {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        };

        const iconStyle = {
            marginRight: 12,
            marginLeft: 12,
        };

        return (
            <View>
                <Card style={cardStyle}>
                    <Card.Content style={contentStyle}>
                        <Text style={titleStyle}>{item.title}</Text>

                        <View style={buttonContainerStyle}>
                            <IconButton
                                icon={() => <Icon name="arrow-down" size={20} color="black" />}
                                onPress={() => handleDecrement(item.id)}
                                style={{ marginRight: 4 }}
                            />
                            <Text style={{ fontSize: 16, color: 'black', marginRight: 12 }}>{counts[item.id] || 0}</Text>
                            <IconButton
                                icon={() => <Icon name="arrow-up" size={20} color="black" />}
                                onPress={() => handleIncrement(item.id)}
                                style={{ marginLeft: 4 }}
                            />
                        </View>
                    </Card.Content>
                </Card>
            </View>
        );
    };

    const renderSublist = (camp) => {
        const filteredList = perso.filter((item) => item.camp === camp);
        return (
            <View style={{ marginBottom: 16 }}>

                <FlatList
                    data={filteredList}
                    renderItem={renderPerson}
                    keyExtractor={(item) => item.id}
                    numColumns={1}
                />
            </View>
        );
    };
    const topNumberText = `${Object.values(counts).reduce((sum, count) => sum + count, 0)}/${inputList.length} places disponibles`;

    return (
        <View style={[theme.container, { backgroundColor: theme.colors.primaryContainer, padding: 16 }]}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>{topNumberText}</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}>{renderSublist('loup')}</View>
                <View style={{ flex: 1 }}>{renderSublist('village')}</View>
                <View style={{ flex: 1 }}>{renderSublist('solo')}</View>
            </View>
        </View>
    );
};

export default Composition;