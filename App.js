import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './Screens/Home';
import ViewScreen from './Screens/ViewScreen';
import OnboardingScreen from './Screens/OnboardingScreen';
import SinglePage from './Screens/SinglePage';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Stack = createNativeStackNavigator();

const App = () =>
{
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  useEffect(() =>
  {
    (async () =>
      {
        const appData = await AsyncStorage.getItem('isAppFirstLaunched');
        if (appData == null)
        {
          setIsAppFirstLaunched(true);
          AsyncStorage.setItem('isAppFirstLaunched', "false");
        } else
        {
          setIsAppFirstLaunched(false);
        }
      }
      // await AsyncStorage.removeItem('isAppFirstLaunched')
    )()
    
}, [])
  return (
    isAppFirstLaunched != null && (
      <View style={styles.container}>
        <NavigationContainer>
          <StatusBar style="auto" />

          <Stack.Navigator>
            {isAppFirstLaunched && (
            
            <Stack.Screen
              name="OnboardingScreen"
                component={OnboardingScreen}
                options={{headerShown:false}}
              />
              )
            }
            <Stack.Screen name="Home" component={Home} options={{
              title: "Easy Accomodation Services",
              headerStyle: { backgroundColor: '#4599E7' },
              headerTitleStyle: { fontWeight: 'bold' },
              headerTintColor: 'white'
            }} />
            <Stack.Screen name = "ViewScreen" component={ViewScreen} options={{title: "HomePage"}} />
            <Stack.Screen name = "SinglePage" component={SinglePage} options={{
              title: "Apartment Details",
              headerStyle: { backgroundColor: '#4599E7' },
              headerTitleStyle: { fontWeight: 'bold' },
              headerTintColor: 'white'
            }} />
          </Stack.Navigator>

          </NavigationContainer>
        </View>
    )
  );
}

export default App;

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor:'#fff',
    }
  }
)