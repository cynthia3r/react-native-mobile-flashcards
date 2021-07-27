import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';
import { addCardToDeck } from '../utils/api';
import { white, green, gray } from '../utils/colors';

function AddCard(props) {

    const navigation = useNavigation();
    const deckId = props.route.params.title;

    const [question, setQuestion] = React.useState('');
    const [answer, setAnswer] = React.useState('');


    const handleChangeQuestionText = (text) => {
        setQuestion(text);
    }

    const handleChangeAnswerText = (text) => {
        setAnswer(text);
    }

    const handleSubmit = () => {
        const card = {
            question: question,
            answer: answer
        };

        props.addCard(deckId, card);
        addCardToDeck(deckId, card);

        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.title}>
                    Add a Card to the deck [{deckId}]
                </Text>
            </View>
            <View style={styles.block}>
                <TextInput
                style={styles.txtinput}
                placeholder="Question"
                onChangeText={(text) => handleChangeQuestionText(text)}
                value ={question}
                autoFocus={true}
                />
            </View>
            <View style={styles.block}>
                <TextInput
                style={styles.txtinput}
                placeholder="Answer"
                onChangeText={(text) => handleChangeAnswerText(text)}
                value ={answer}
                />
            </View>
            <View style={styles.block}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={handleSubmit}
                    disabled={question === '' || answer === ''}
                >
                    <Text style={styles.btnTitle}>Submit</Text>
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

export default connect(null, { addCard })(AddCard);