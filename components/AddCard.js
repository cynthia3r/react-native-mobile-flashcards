import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';
import { addCardToDeck } from '../utils/api';
import { white, green } from '../utils/colors';

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

        props.dispatch(addCard(deckId, card));
        addCardToDeck(deckId, card);

        navigation.goBack();

    }

    return (
        <View style={styles.container}>
            <View style={styles.block}>
                <Text style={styles.title}>
                    Add a Question card:
                </Text>
            </View>
            <View style={styles.block}>
                <TextInput
                style={styles.input}
                placeholder="Question"
                onChangeText={(text) => handleChangeQuestionText(text)}
                value ={question}
                />
            </View>
            <View style={styles.block}>
                <TextInput
                style={styles.input}
                placeholder="Answer"
                onChangeText={(text) => handleChangeAnswerText(text)}
                value ={answer}
                />
            </View>
            <TouchableOpacity
                // key={deck.title}
                style={styles.btn}
                onPress={handleSubmit}
                disabled={question === '' || answer === ''}
            >
                <Text>Submit</Text>
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


function mapStateToProps(state, { title }) {
    return {
        title,
    };
}


export default connect(mapStateToProps)(AddCard);