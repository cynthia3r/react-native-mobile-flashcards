import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlashcardsStatusBar from '../components/FlashcardsStatusBar';
import DeckList from '../components/DeckList';
import Deck from '../components/Deck';
import NewDeck from '../components/NewDeck';
import NewQuestion from '../components/NewQuestion';
import Quiz from '../components/Quiz';
import { purple } from '../utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Dashboard() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Deck List' component={DeckList} />
            <Tab.Screen name='Add Deck' component={NewDeck} />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <FlashcardsStatusBar 
                backgroundColor={purple}
                barStyle='light-content'
            />
            <Stack.Navigator>
                <Stack.Screen
                    name='Dashboard'
                    component={Dashboard}
                />
                <Stack.Screen
                    name='Deck'
                    component={Deck}
                />
                <Stack.Screen
                    name='AddCard'
                    component={NewQuestion}
                />
                <Stack.Screen
                    name='Quiz'
                    component={Quiz}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}