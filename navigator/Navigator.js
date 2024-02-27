import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import Personnage from '../screens/Personnage';
import Creation from '../screens/Creation';
const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Navigator = ({ route,navigation}) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Music', focusedIcon: 'account-settings' },
        { key: 'creation', title: 'Creation', focusedIcon: 'album'},
        { key: 'loup', title: 'Personnage', focusedIcon: 'axe-battle',unfocusedIcon: 'axe' },

    ]);

    React.useEffect(() => {
        // Update the title when the route changes
        navigation.setOptions({
            title: route.params && route.params.title
                ? route.params.title
                : '',
        });
    }, [route.params]);

    const renderScene = BottomNavigation.SceneMap({
        music: HomeScreen,
        loup: Personnage,
        creation: Creation,
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