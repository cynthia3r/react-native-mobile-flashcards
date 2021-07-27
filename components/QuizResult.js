import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { clearLocalNotification, setLocalNotification } from '../utils/helpers';
import { green, white, orange } from '../utils/colors';


function QuizResult(props) {

    //using the Effect hook
    useEffect(() => {
        clearLocalNotification().then(setLocalNotification);
    }, []);

    const navigation = useNavigation();

    console.log("props:", props);

    const decks = props.decks;
    const deckId = props.route.params.id;
    const numIncorrectAnswer = props.route.params.numIncorrectAnswers;
    const numCorrectAnswer = props.route.params.numCorrectAnswers;
    const totalQuestions = numIncorrectAnswer + numCorrectAnswer;

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Correct Answers:
                </Text>
                <Text style={styles.result}>
                    {numCorrectAnswer} out of {totalQuestions}
                </Text>
            </View>
            <View>
                <Text style={styles.title}>
                    Percentage Correct:
                </Text>
                <Text style={styles.result}>
                    {Math.round((numCorrectAnswer * 100) / (totalQuestions))} %
                </Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate(
                        'DeckDetail',
                        {title: deckId }
                    )}
                >
                    <Text style={styles.btnTitle}>Back to Deck</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate(
                        'Quiz',
                        {title: deckId }
                    )}
                >
                    <Text style={styles.btnTitle}>Restart Quiz</Text>
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
    },
    result: {
        textAlign: 'center',
        fontSize: 20,
        color: orange,
    },
});

function mapStateToProps(state) {
    const decks = state;

    return {
        decks,
    };
}

export default connect(mapStateToProps)(QuizResult);