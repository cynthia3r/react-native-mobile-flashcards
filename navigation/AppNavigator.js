import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlashcardsStatusBar from '../components/FlashcardsStatusBar';
import DeckList from '../components/DeckList';
import DeckDetail from '../components/DeckDetail';
import AddDeck from '../components/AddDeck';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';
import QuizResult from '../components/QuizResult';
import { purple } from '../utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Dashboard() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='Deck List'
                component={DeckList}
            />
            <Tab.Screen
                name='Add Deck'
                component={AddDeck}
            />
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
                    name='MobileFlashcards'
                    component={Dashboard}
                />
                <Stack.Screen
                    name='DeckDetail'
                    component={DeckDetail}
                />
                <Stack.Screen
                    name='AddCard'
                    component={AddCard}
                />
                <Stack.Screen
                    name='Quiz'
                    component={Quiz}
                />
                 <Stack.Screen
                    name='QuizResult'
                    component={QuizResult}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}