/* TODO: 
- Wrap flatlist render item in touchable opacity for navigation
- Improve typing
- Dynamically generate screens for stack navigator for each league retrieved
- Handle navigation
*/

import { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getLeagues } from './Utils/leagueApi';

function HomeScreen() {

  const [leagues, setLeagues] = useState<any[]>([]);

  useEffect(() => {
   getLeagues(setLeagues);

  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList data={leagues} renderItem={(league) => <Text>{league['name'] ?? ""}</Text>}/>
    </View>
  );
}

const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);


function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Navigation />;
    </SafeAreaView>
  );
}

export default App;
