import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/index';
import Deck from './Deck';
class DeckList extends Component {

    componentDidMount() {
        this.props.handleInitialData();
    }
    render() {
        const { decks, navigation } = this.props;

        return (
            <View>
                <View style={styles.block}>
                    <Text style={styles.title}Mobile Flashcards></Text>
                </View>
                <ScrollView style={styles.container}>
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
                                <Deck id={deck.title} />
                                {/* <Deck id={deck.title} key={deck.title} /> */}
                            </TouchableOpacity>
                        );
                    })}
                </ScrollView>
            </View>
            
        ); 
    } 
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
    block: {
        marginBottom: 20,
    }
});

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

export default connect(mapStateToProps, {handleInitialData} )(DeckList);