import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Deck extends Component {

    render() {
        const { deck } = this.props;

        if(deck === undefined) {
            return<View style={styles.container} />;
        }
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.deckText}>{deck.title}</Text>
                </View>
                <View>
                <Text style={styles.cardext}>{deck.cards.length} cards</Text>
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
    title: {
        textAlign: 'center',
        fontSize: 38,
    },
    deckText: {
        fontSize: 28,
    },
    cardText: {
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