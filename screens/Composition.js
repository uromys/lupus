import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, IconButton, useTheme, Divider } from 'react-native-paper';
import { perso } from '../assets/perso/data';
import { usePersoContext } from '../context/PersoContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import Creation from '../components/Creation';

const Composition = () => {
    const theme = useTheme();
    const { inputList } = usePersoContext();
    const [counts, setCounts] = useState({});
    const { width } = Dimensions.get('window');
    const cardWidth = width / 2 - 24;
    const maxAllowedCount = inputList.length;

    const handleIncrement = (id) => {
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
        return (
            <View>
                <Card style={styles.cardStyle}>
                    <Card.Content style={styles.contentStyle}>
                        <Text style={styles.titleStyle}>{item.title}</Text>

                        <View style={styles.buttonContainerStyle}>
                            <IconButton
                                icon={() => <Icon name="arrow-up" size={20} color="black" />}
                                onPress={() => handleIncrement(item.id)}
                                style={styles.iconStyle}
                            />
                            <Text style={{ fontSize: 16, color: 'black' }}>{counts[item.id] || 0}</Text>
                            <IconButton
                                icon={() => <Icon name="arrow-down" size={20} color="black" />}
                                onPress={() => handleDecrement(item.id)}
                                style={styles.iconStyle}
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

    const topNumberText = `${maxAllowedCount - Object.values(counts).reduce((sum, count) => sum + count, 0)} places disponibles`;

    const styles = StyleSheet.create({
        cardStyle: {
            width: cardWidth,
            margin: 8,
            borderRadius: 16,
            overflow: 'hidden',
            elevation: 4,
        },
        contentStyle: {
            padding: 8,
            backgroundColor: 'white',
            borderRadius: 8,
        },
        titleStyle: {
            fontSize: 10,
            marginBottom: 12,
            fontWeight: 'bold',
            color: 'black',
        },
        buttonContainerStyle: {
            flexDirection: 'row',
           // alignItems: 'center',
            //justifyContent: 'flex-start',
            marginTop: 5,
        },
        iconStyle: {},
        container: {
            ...theme.container,
            backgroundColor: theme.colors.primaryContainer,
            padding: 16,
        },
        scrollViewContent: {
            flexDirection: 'column', // Change to 'column'
        },
        column: {
            marginBottom: 16,
        },
    });

    return (
        <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
        >
            <Creation />


            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>{topNumberText}</Text>
            <View style={styles.column}>{renderSublist('loup')}</View>
            <Divider />
            <View style={styles.column}>{renderSublist('village')}</View>
            <Divider />
            <View style={styles.column}>{renderSublist('solo')}</View>

        </ScrollView>
    );
};

export default Composition;
