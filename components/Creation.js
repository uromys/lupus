import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { perso } from "../assets/perso/data";
import { List, useTheme, Avatar } from "react-native-paper";
import { usePersoContext } from "../context/PersoContext";
import DisplayCard from "./DisplayCard";

const Creation = () => {
  const theme = useTheme();
  const [inputText, setInputText] = useState("");
  const { inputList, setInputList } = usePersoContext();
  const { selectedCounts, setSelectedCounts } = usePersoContext();
  const [showTitle, setShowTitle] = useState({});
  console.log(selectedCounts);
  const [error, setError] = useState("");

  const handleInputChange = (text) => {
    setInputText(text);
    setError("");
  };

  const handleRemoveItemFromList = (id) => {
    setInputList(inputList.filter((item) => item.id !== id));
  };

  const handleAddItem = () => {
    const trimmedText = inputText.trim();
    if (trimmedText === "") {
      setError("Le nom du joueur ne peut pas être vide");
      return;
    }

    if (inputList.some((item) => item.text === trimmedText)) {
      setError("Ce joueur est déjà dans la liste");
      return;
    }

    setInputList((prevList) => [
      ...prevList,
      { id: Date.now().toString(), text: trimmedText },
    ]);
    setInputText("");
    setError("");
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <List.Icon icon="label" />
        <Text style={styles.itemText}>{item.text}</Text>
        <TouchableOpacity
          onPress={() => handleRemoveItemFromList(item.id)}
          style={styles.deleteButton}
        >
          <List.Icon color={theme.colors.error} icon="delete" />
        </TouchableOpacity>
      </View>
    );
  };

  // Styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: theme.colors.background,
    },
    inputTextStyle: {
      flex: 1,
      padding: 10,
      marginHorizontal: 5,
      backgroundColor: theme.colors.onSurface,
      borderRadius: 20,
      fontSize: 16,
      color: theme.colors.onPrimary,
    },
    itemContainer: {
      flexDirection: "row",
      padding: 10,
      marginVertical: 5,
      backgroundColor: theme.colors.surface,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    itemText: {
      marginLeft: 10,
      fontSize: 16,
      color: theme.colors.onSurface,
    },
    errorTextStyle: {
      padding: 10,
      marginBottom: 10,
      color: theme.colors.error,
      borderRadius: 5,
      textAlign: "center",
    },
    addButton: {
      padding: 10,
      marginHorizontal: 5,
      backgroundColor: theme.colors.primary,
      borderRadius: 20,
      justifyContent: "center",
    },
    buttonText: {
      color: theme.colors.onPrimary,
      textAlign: "center",
    },
  });

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <TextInput
            placeholder="Ajouter un joueur"
            placeholderTextColor={theme.colors.placeholder}
            value={inputText}
            onChangeText={handleInputChange}
            style={styles.inputTextStyle}
            onSubmitEditing={handleAddItem}
          />
        </View>
      </ScrollView>
      {error ? <Text style={styles.errorTextStyle}>{error}</Text> : null}
      <FlatList
        data={inputList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1 }}
      />

      <DisplayCard
        selectedCounts={selectedCounts}
        showTitle={showTitle}
        setShowTitle={setShowTitle}
      />
    </>
  );
};

export default Creation;
