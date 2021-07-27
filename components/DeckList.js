import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Deck from './Deck';
import { handleInitialData } from '../actions/index';
import { orange, white } from '../utils/colors';
class DeckList extends Component {

    componentDidMount() {
        this.props.handleInitialData();
    }
    render() {
        const { decks, navigation } = this.props;

        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Mobile Flashcards</Text>
                {Object.values(decks).map((deck) => {
                    return (
                        <TouchableOpacity
                            style={styles.block}
                            key={deck.title}
                            onPress={() => navigation.navigate(
                                'DeckDetail',
                                {title: deck.title }
                            )}
                        >
                            <Deck id={deck.title} key={deck.title}/>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        ); 
    } 
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
    },
    block: {
        marginBottom: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: orange,
    }
});

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

export default connect(mapStateToProps, {handleInitialData} )(DeckList);