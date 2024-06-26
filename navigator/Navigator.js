import * as React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import Personnage from "../screens/Personnage";
import Start from "../screens/Start";
import Composition from "../screens/Composition";
const Navigator = ({ route, navigation }) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "creation", title: "Creation", focusedIcon: "creation" },
    { key: "joueur", title: "Joueur", focusedIcon: "album" },
    {
      key: "loup",
      title: "Personnage",
      focusedIcon: "axe-battle",
      unfocusedIcon: "axe",
    },
  ]);

  React.useEffect(() => {
    navigation.setOptions({
      title: route.params && route.params.title ? route.params.title : "",
    });
  }, [route.params]);

  const renderScene = BottomNavigation.SceneMap({
    creation: Composition,
    loup: Personnage,
    joueur: Start,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Navigator;
