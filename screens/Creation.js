import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Alert } from 'react-native';
import {List, useTheme} from 'react-native-paper';
import Composition from './Composition'
const Creation = () => {
    const theme = useTheme();
    const [inputText, setInputText] = useState('');
    const [inputList, setInputList] = useState([]);
    const [error, setError] = useState('');

    const handleInputChange = (text) => {
        setInputText(text);
        setError('');
    };

    const handleAddItem = () => {
        const trimmedText = inputText.trim();

        if (trimmedText === '') {
            setError('Le nom du joueur ne peut pas être vide');
            return;
        }

        if (inputList.some((item) => item.text === trimmedText)) {
            setError('Ce joueur est déjà dans la liste');
            return;
        }

        setInputList((prevList) => [
            ...prevList,
            { id: Date.now().toString(), text: trimmedText },
        ]);
        setInputText('');
        setError('');
    };

    const showAlert = () => {
        Alert.alert('Erreur', error, [{ text: 'OK', onPress: () => setError('') }]);
    };

    const renderItem = ({ item, index }) => {
        if (index % 2 === 0) {
            return (
                <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <List.Icon icon="label" />
                        <Text>{item.text}</Text>
                    </View>
                    {index + 1 < inputList.length && (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <List.Icon icon="label" />
                            <Text>{inputList[index + 1].text}</Text>
                        </View>
                    )}
                </View>
            );
        }
        return null;
    };


    return (
        <View  style={[theme.container, { backgroundColor: theme.colors.primaryContainer }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
                <TextInput
                    placeholder="Ajouter un joueur"
                    value={inputText}
                    onChangeText={handleInputChange}
                    onSubmitEditing={handleAddItem}
                    style={{ flex: 1, marginRight: 8 }}
                />
                <Text>{`Nombre actuel: ${inputList.length}`}</Text>
            </View>
            {error ? (
                <View style={{ marginBottom: 16 }}>
                    <Text style={{ color: 'red' }}>{error}</Text>
                </View>
            ) : null}
            <FlatList
                data={inputList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Creation;
