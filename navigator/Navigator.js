import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import HomeScreen from '../screens/HomeScreen';
import Personnage from '../screens/Personnage';
const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const Navigator = ({ route,navigation}) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Music', focusedIcon: 'bell' },
        { key: 'loup', title: 'Personnage', focusedIcon: 'album' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history',unfocusedIcon: 'bell-outline' },
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
        recents: RecentsRoute,
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