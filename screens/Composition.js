import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { perso } from '../assets/perso/data';
import { usePersoContext } from '../context/PersoContext';
const Composition = () => {
    const { inputList } = usePersoContext();
    const [counts, setCounts] = useState({});

    const handleIncrement = (id) => {
        const currentItem = inputList.find(item => item.id === id);
        const maxAllowedCount = currentItem ? currentItem.text : 0;
        console.log(inputList)
        if ((counts[id] || 0) < maxAllowedCount) {
            setCounts((prevCounts) => ({
                ...prevCounts,
                [id]: (prevCounts[id] || 0) + 1,
            }));
        }
    };

    const handleDecrement = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: Math.max((prevCounts[id] || 0) - 1, 0),
        }));
    };

    const renderPerson = ({ item }) => (
        <Card style={{ margin: 8, borderRadius: 16, overflow: 'hidden', elevation: 4 }}>
            <Card.Content style={{ padding: 16, backgroundColor: 'white', borderRadius: 16 }}>
                <Text style={{ fontSize: 20, marginBottom: 12, fontWeight: 'bold', color: 'black' }}>{item.title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Button mode="contained" onPress={() => handleDecrement(item.id)} style={{ borderRadius: 12, backgroundColor: '#FF6666', marginRight: 8 }}>
                        -
                    </Button>
                    <Text style={{ fontSize: 18, color: 'black' }}>{counts[item.id] || 0}</Text>
                    <Button mode="contained" onPress={() => handleIncrement(item.id)} style={{ borderRadius: 12, backgroundColor: '#66CC66', marginLeft: 8 }}>
                        +
                    </Button>
                </View>
            </Card.Content>
        </Card>
    );

    const renderSublist = (camp) => {
        const filteredList = perso.filter((item) => item.camp === camp);
        return (
            <View style={{ marginBottom: 16 }}>
                <FlatList
                    data={filteredList}
                    renderItem={renderPerson}
                    keyExtractor={(item) => item.id}
                    numColumns={1}
                    style={{ flex: 1 }}
                />
            </View>
        );
    };

    return (
        <View style={{ padding: 16, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>{renderSublist('loup')}</View>
            <View style={{ flex: 1 }}>{renderSublist('village')}</View>
            <View style={{ flex: 1 }}>{renderSublist('solo')}</View>
        </View>
    );
};

export default Composition;