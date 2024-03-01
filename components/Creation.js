import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Alert,StyleSheet } from 'react-native';
import {List, useTheme} from 'react-native-paper';
import { usePersoContext } from '../context/PersoContext';
const Creation = () => {

    const theme = useTheme();
    const [inputText, setInputText] = useState('');
    const { inputList, setInputList } = usePersoContext();
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
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingHorizontal: 20,
            backgroundColor: theme.colors.surface, // Use the primaryContainer color from the theme
        },
        flatListContentContainer: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputTextStyle: {
            width: '100%',
            padding: 8,
            backgroundColor: theme.colors.onPrimary, // Use the surface color from the theme
            borderRadius: 8,
            color: theme.text, // Use the text color from the theme
        },
        errorTextStyle: {
            marginBottom: 16,
            color: theme.colors.error, // Use the error color from the theme
        },
    });
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 , backgroundColor: theme.colors.surface }}>
                <TextInput
                    placeholder="Ajouter un joueur"
                    value={inputText}
                    onChangeText={handleInputChange}
                    onSubmitEditing={handleAddItem}
                    style={{ ...styles.inputTextStyle}}
                />
            </View>
            {error ? (
                <View style={styles.errorTextStyle}>
                    <Text>{error}</Text>
                </View>
            ) : null}
            <FlatList
                data={inputList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.flatListContentContainer}
            />
        </View>
    );
};

export default Creation;
