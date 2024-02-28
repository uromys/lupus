import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper'; // Import Card component from react-native-paper
import { perso } from '../assets/perso/data';

const Composition = () => {
    const [counts, setCounts] = useState({});

    const handleIncrement = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1,
        }));
    };

    const handleDecrement = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: Math.max((prevCounts[id] || 0) - 1, 0),
        }));
    };

    const renderPerson = ({ item }) => (
        <Card style={{ margin: 8, borderRadius: 8 }}>
            <Card.Content>
                <Text style={{ fontSize: 18, marginBottom: 8 }}>{item.title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                    <Button onPress={() => handleDecrement(item.id)}>-</Button>
                    <Text style={{ marginHorizontal: 8, fontSize: 16 }}>{counts[item.id] || 0}</Text>
                    <Button onPress={() => handleIncrement(item.id)}>+</Button>
                </View>
            </Card.Content>
        </Card>
    );

    const renderSublist = (camp) => {
        const filteredList = perso.filter((item) => item.camp === camp);
        return (
            <FlatList
                data={filteredList}
                renderItem={renderPerson}
                keyExtractor={(item) => item.id}
                numColumns={1}
                style={{ flex: 1 }}
            />
        );
    };

    return (
        <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Camp: Loup</Text>
            {renderSublist('loup')}
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Camp: Village</Text>
            {renderSublist('village')}
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>Camp: Solo</Text>
            {renderSublist('solo')}
        </View>
    );
};

export default Composition;