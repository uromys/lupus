import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { perso } from "../assets/perso/data"; // Adjust the import path as necessary

const DisplayCard = ({ selectedCounts, showTitle, setShowTitle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: 10,
      }}
    >
      {Object.entries(selectedCounts).map(([id, count]) => {
        const persoItem = perso.find((p) => p.id === id);
        return (
          persoItem &&
          Array.from({ length: count }, (_, index) => {
            const uniqueKey = `${id}-${index}`;
            return (
              <TouchableOpacity
                key={uniqueKey}
                onPress={() => {
                  setShowTitle((prev) => ({
                    ...prev,
                    [uniqueKey]: !prev[uniqueKey],
                  }));
                }}
              >
                {showTitle[uniqueKey] ? (
                  <Text>{persoItem.title}</Text>
                ) : (
                  <Avatar.Image size={100} source={persoItem.photo} />
                )}
              </TouchableOpacity>
            );
          })
        );
      })}
    </View>
  );
};

export default DisplayCard;
