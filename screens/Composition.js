import React, { useState } from 'react';
import { View, Text, FlatList, Dimensions,StyleSheet } from 'react-native';
import {Button, Card, IconButton, useTheme,Divider} from 'react-native-paper';
import { perso } from '../assets/perso/data';
import { usePersoContext } from '../context/PersoContext';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adjust the icon library based on your preference
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
        const cardStyle = {
            width: cardWidth,
            margin: 8,
            borderRadius: 16,
            overflow: 'hidden',
            elevation: 4,
        };

        const contentStyle = {
            padding: 8,
            backgroundColor: 'white',
            borderRadius: 8,
        };

        const titleStyle = {
            fontSize: 10,
            marginBottom: 12,
            fontWeight: 'bold',
            color: 'black',
        };

        const buttonContainerStyle = {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginTop: 5,
        };

        const iconStyle = {
        };

        return (
            <View>
                <Card style={cardStyle}>
                    <Card.Content style={contentStyle}>
                        <Text style={titleStyle}>{item.title}</Text>

                        <View style={buttonContainerStyle}>
                            <IconButton
                                icon={() => <Icon name="arrow-up" size={20} color="black" />}
                                onPress={() => handleIncrement(item.id)}
                                style={iconStyle}
                            />
                            <Text style={{ fontSize: 16, color: 'black' }}>{counts[item.id] || 0}</Text>
                            <IconButton
                                icon={() => <Icon name="arrow-down" size={20} color="black" />}
                                onPress={() => handleDecrement(item.id)}
                                style={iconStyle}
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
    const topNumberText = `${maxAllowedCount-Object.values(counts).reduce((sum, count) => sum + count, 0)} places disponibles`;
    const styles = StyleSheet.create({
        container: {
            ...theme.container,
            backgroundColor: theme.colors.primaryContainer,
            padding: 16,
        },
        column: {
            flex: 1,
        },
    });
    return (


        <View style={[styles.container]}>
            <Creation></Creation>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>{topNumberText}</Text>
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.column}>{renderSublist('loup')}</View>
                <Divider />
                <View style={styles.column}>{renderSublist('village')}</View>
                <Divider />
                <View style={styles.column}>{renderSublist('solo')}</View>
            </View>
        </View>

    );
};

export default Composition;