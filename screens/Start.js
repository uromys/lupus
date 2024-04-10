import React from "react";
import { View, StyleSheet } from "react-native";
import Creation from "../components/Creation";
import {
  Button,
  Card,
  IconButton,
  useTheme,
  Divider,
  Avatar,
} from "react-native-paper";
const Start = () => {
  return (
    <View>
      <Button>Start</Button>
      <Creation />
    </View>
  );
};

export default Start;
