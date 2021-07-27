import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addDeck } from '../actions/index';
import { saveDeckTitle } from '../utils/api';
import { gray, green, white, orange } from '../utils/colors'

function AddDeck(props) {

    const navigation = useNavigation();

    const [deckTitle, setDeckTitle] = React.useState('');


    const handleChangeDeckTitle = (text) => {
        setDeckTitle(text);
    }

    const handleSubmit = () => {
        props.addDeck(deckTitle);
        saveDeckTitle(deckTitle);
        
        navigation.navigate(
            'DeckDetail',
            {title: deckTitle }
        );
    }

    return (
        <View>
            <View>
            <Text style={[styles.title, {color: orange}]}>Add Deck</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.block}>
                    <Text style={styles.title}>
                    What is the title of your new deck?
                    </Text>
                </View>
                <View style={styles.block}>
                    <TextInput
                    style={styles.txtinput}
                    placeholder="Deck Title"
                    onChangeText={(text) => handleChangeDeckTitle(text)}
                    value ={deckTitle}
                    autoFocus={true}
                    />
                </View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={handleSubmit}
                    disabled={deckTitle === ''}
                >
                    <Text style={styles.btnTitle}>Create Deck</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtinput: {
        backgroundColor: white,
        borderColor: gray,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 20,
        height: 30,
    },
    block: {
        marginBottom: 30,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: green,
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


export default connect(null, { addDeck })(AddDeck);