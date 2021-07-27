import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Deck from './Deck';
import { green, white } from '../utils/colors';


export default function DeckDetail(props) {
    console.log("props:", props);
    
    const navigation = useNavigation();
    const deckId = props.route.params.title;

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Deck id={deckId} key={deckId} />
            </View>
            <View style={styles.block}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate(
                        'AddCard',
                        {title: deckId }
                    )}
                >
                    <Text style={styles.btnTitle}>Add Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate(
                        'Quiz',
                        {title: deckId }
                    )}
                >
                    <Text style={styles.btnTitle}>Start a Quiz</Text>
                </TouchableOpacity>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        paddingTop: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 200,
        alignItems: 'center',
    },
    block: {
        marginBottom: 30,
    },
    btn: {
        backgroundColor: green,
        marginBottom: 20,
        width: 150,
        height: 30,
        borderWidth: 1,
    },
    btnTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: white,
    }
});