import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import FlashcardsStatusBar from '../components/FlashcardsStatusBar';
import DeckList from '../components/DeckList';
import DeckDetail from '../components/DeckDetail';
import AddDeck from '../components/AddDeck';
import AddCard from '../components/AddCard';
import Quiz from '../components/Quiz';
import QuizResult from '../components/QuizResult';
import { green, gray } from '../utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Dashboard() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({ focused, size, color }) => {
                    if (route.name === 'Deck List') {
                        return (
                            <Ionicons 
                            name={focused ? 'ios-bookmarks' : 'md-bookmarks'}
                            size={size}
                            color={color}
                            />
                        );
                    } else if (route.name === 'Add Deck') {
                        return (
                            <Ionicons 
                            name={focused ? 'add-circle' : 'add-circle-outline'}
                            size={size}
                            color={color}
                            />
                        );
                    }
                }
            })}
            tabBarOptions={{
                activeTintColor: green,
                inactiveTintColor: gray,
            }}
        >
            <Tab.Screen
                name='Deck List'
                component={DeckList}
                options={{ title: 'Deck List', headerShown: true }}
            />
            <Tab.Screen
                name='Add Deck'
                component={AddDeck}
                options={{ title: 'Add Deck', headerShown: true }}
            />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <View style={styles.container}>
                <FlashcardsStatusBar 
                    backgroundColor={green}
                    barStyle='light-content'
                />
                <Stack.Navigator>
                    <Stack.Screen
                        name='Mobile Flashcards'
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
            </View>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});