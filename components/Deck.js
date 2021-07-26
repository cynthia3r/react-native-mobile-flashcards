import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { green } from '../utils/colors';

class Deck extends Component {

    render() {
        const { deck } = this.props;

        if(deck === undefined) {
            return<View style={styles.container} />;
        }
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.deckTxt}>{deck.title}</Text>
                </View>
                <View>
                    <Text style={styles.cardTxt}>{deck.cards.length} cards</Text>
                </View>
            </View>
        ); 
    } 
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    deckTxt: {
        textAlign: 'center',
        fontSize: 30,
        color: green
    },
    cardTxt: {
        textAlign: 'center',
        fontSize: 20,
    }
});

function mapStateToProps(state, { id }) {
    const deck = state[id];

    return {
        deck
    };
}

export default connect(mapStateToProps)(Deck);