import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Deck from './Deck';
import { green } from '../utils/colors';


function DeckDetail(props) {
    console.log("props:", props);
    
    const navigation = useNavigation();
    const deckId = props.route.params.title;
    const deck = props.decks[deckId];
    return (
        <View style={styles.container}>
            <View>
                <Deck id={deckId} />
            </View>
            <View>
                <TouchableOpacity
                    // key={deckId}
                    style={styles.btn}
                    onPress={() => navigation.navigate(
                        'AddCard',
                        {title: deckId }
                    )}
                >
                    <Text>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    // key={deckId}
                    style={styles.btn}
                    onPress={() => navigation.navigate(
                        'Quiz',
                        {title: deckId }
                    )}
                >
                    <Text>Start a Quiz</Text>
                </TouchableOpacity>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        textAlign: 'center',
        fontSize: 38,
    },
    btn: {
        backgroundColor: green,
    },
    block: {
        marginBottom: 20,
    }
});


function mapStateToProps(state, { title }) {
    const decks = state;

    return {
        decks,
    };
}

export default connect(mapStateToProps)(DeckDetail);