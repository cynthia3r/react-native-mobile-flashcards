import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addDeck } from '../actions/index';
import { saveDeckTitle } from '../utils/api';
import { gray, green, white } from '../utils/colors'

function AddDeck(props) {

    const navigation = useNavigation();

    const [deckTitle, setDeckTitle] = React.useState('');


    const handleChangeDeckTitle = (text) => {
        setDeckTitle(text);
    }

    const handleSubmit = () => {
        props.dispatch(addDeck(deckTitle));
        saveDeckTitle(deckTitle);
        
        navigation.navigate(
            'DeckDetail',
            {title: deckTitle }
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.title}>
                What is the title of your new deck?
                </Text>
            </View>
            <View style={styles.block}>
                <TextInput
                style={styles.input}
                placeholder="Deck Title"
                onChangeText={(text) => handleChangeDeckTitle(text)}
                value ={deckTitle}
                />
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={handleSubmit}
                disabled={deckTitle === ''}
            >
                <Text>Create Deck</Text>
            </TouchableOpacity>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: white,
        fontSize: 20
    },
    btn: {
        backgroundColor: green,
    },
    block: {
        marginBottom: 20,
    }
});

export default connect()(AddDeck);