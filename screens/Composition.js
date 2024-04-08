import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import {
  Button,
  Card,
  IconButton,
  useTheme,
  Divider,
  Avatar,
} from "react-native-paper";
import { perso } from "../assets/perso/data";
import { usePersoContext } from "../context/PersoContext";
import Icon from "react-native-vector-icons/FontAwesome";
import Creation from "../components/Creation";

const Composition = () => {
  const theme = useTheme();
  const { inputList } = usePersoContext();
  const [counts, setCounts] = useState({});
  const { width } = Dimensions.get("window");
  const cardWidth = width / 2 - 24;
  const maxAllowedCount = inputList.length;
  const [selectedCounts, setSelectedCounts] = useState({});
  const [availablePlacesText, setAvailablePlacesText] = useState("");
  useEffect(() => {
    const totalSelectedCount = Object.values(selectedCounts).reduce(
      (sum, count) => sum + count,
      0
    );
    const availablePlaces = maxAllowedCount - totalSelectedCount;
    setAvailablePlacesText(`${availablePlaces} places disponibles`);
  }, [selectedCounts, maxAllowedCount]);
  const topNumberText = `${
    maxAllowedCount -
    Object.values(counts).reduce((sum, count) => sum + count, 0)
  } places disponibles`;

  const allocateVillageoisAndOneLoup = () => {
    let newCounts = {};

    perso.forEach((p) => {
      if (p.title === "Villageois") {
        newCounts[p.id] = maxAllowedCount - 1;
      } else if (p.title === "Loup garou") {
        newCounts[p.id] = 1;
      } else {
        newCounts[p.id] = 0;
      }
    });
    setSelectedCounts(newCounts);
  };

  const randomizeCounts = () => {
    let totalAvailable = maxAllowedCount;
    let newCounts = {};

    perso.forEach((p) => {
      newCounts[p.id] = 0;
    });

    while (totalAvailable > 0) {
      perso.forEach((p) => {
        if (totalAvailable > 0) {
          const randomIncrement = Math.floor(
            Math.random() * (totalAvailable + 1)
          );
          newCounts[p.id] += randomIncrement;
          totalAvailable -= randomIncrement;
        }
      });
    }

    setSelectedCounts(newCounts);
  };
  const handleIncrement = (id) => {
    const currentTotalCount = Object.values(selectedCounts).reduce(
      (sum, count) => sum + count,
      0
    );

    if (currentTotalCount < maxAllowedCount) {
      setSelectedCounts((prevCounts) => {
        const newCounts = {
          ...prevCounts,
          [id]: (prevCounts[id] || 0) + 1,
        };
        const persoTitle = perso.find((p) => p.id === id)?.title || "Unknown";
        console.log(`Increment - ${persoTitle}: ${newCounts[id]}`); // Log the title and updated count
        return newCounts;
      });
    }
  };

  const handleDecrement = (id) => {
    if (selectedCounts[id] > 0) {
      setSelectedCounts((prevCounts) => {
        const newCounts = {
          ...prevCounts,
          [id]: prevCounts[id] - 1,
        };
        const persoTitle = perso.find((p) => p.id === id)?.title || "Unknown";
        console.log(`Decrement - ${persoTitle}: ${newCounts[id]}`); // Log the title and updated count
        console.log("Selected Counts:", selectedCounts);
        return newCounts;
      });
    }
  };

  const renderPerson = ({ item }) => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar.Image size={100} source={item.photo} />
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.contentStyle}>
            <Text style={styles.titleStyle}>{item.title}</Text>

            <View style={styles.buttonContainerStyle}>
              <IconButton
                icon={() => <Icon name="arrow-up" size={20} color="black" />}
                onPress={() => handleIncrement(item.id)}
                style={styles.iconStyle}
              />
              <Text style={{ fontSize: 16, color: "black" }}>
                {selectedCounts[item.id] || 0}
              </Text>
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

  const styles = StyleSheet.create({
    cardStyle: {
      width: cardWidth,
      margin: 8,
      borderRadius: 16,
      overflow: "hidden",
      elevation: 4,
    },
    contentStyle: {
      padding: 8,
      backgroundColor: "white",
      borderRadius: 8,
    },
    titleStyle: {
      fontSize: 10,
      marginBottom: 12,
      fontWeight: "bold",
      color: "black",
    },
    buttonContainerStyle: {
      flexDirection: "row",
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
      flexDirection: "column", // Change to 'column'
    },
    column: {
      marginBottom: 16,
    },
  });

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <Creation />
      <Button onPress={randomizeCounts}>Randomize Counts</Button>
      <Button onPress={allocateVillageoisAndOneLoup}>One against all</Button>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 16,
          color: "white",
        }}
      >
        {availablePlacesText}
      </Text>
      <View style={styles.column}>{renderSublist("loup")}</View>
      <Divider />
      <View style={styles.column}>{renderSublist("village")}</View>
      <Divider />
      <View style={styles.column}>{renderSublist("solo")}</View>
    </ScrollView>
  );
};

export default Composition;
