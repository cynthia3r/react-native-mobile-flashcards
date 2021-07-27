import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { green, red, white, orange} from '../utils/colors';


function Quiz(props) {
    const navigation = useNavigation();
    const deckId = props.route.params.title;
    const cards = props.decks[deckId].cards;

    const [index, setIndex] = React.useState(0);
    const [numCorrectAnswers, setNumCorrectAnswers] = React.useState(0);
    const [numIncorrectAnswers, setNumIncorrectAnswers] = React.useState(0);
    const [showAnswer, setStatus] = React.useState('false');
    const [quizCompletionStatus, setQuizCompletionStatus] = React.useState('false');

    //using the Effect hook
    useEffect(() => {
        if (quizCompletionStatus === 'true') {
            resetQuiz();
        }
    }, [quizCompletionStatus]);

    const resetQuiz = () => {
        setIndex(0);
        setNumCorrectAnswers(0);
        setNumIncorrectAnswers(0);
        setStatus('false');
        setQuizCompletionStatus('false');

        navigation.navigate('QuizResult', {
            id: deckId,
            numIncorrectAnswers,
            numCorrectAnswers,
        });
    };

    function nextQuestion() {
        setStatus('false');
        if(index + 1 !== cards.length) {
            setIndex(index + 1);
        } else {
            setIndex(index);
            setQuizCompletionStatus('true');
        }
    }

    if(cards.length === 0) {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        There are no cards in the deck
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={[styles.btn, {backgroundColor: green}]}
                        onPress={() => navigation.navigate(
                            'DeckDetail',
                            {title: deckId }
                        )}
                    >
                        <Text style={styles.btnTitle}>Back to Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Question {index + 1}/{cards.length}
                    </Text>
                </View>
                <View>
                    <Text style={styles.question}>
                        {cards[index].question}
                    </Text>
                    {showAnswer === 'false' ? (
                        <TouchableOpacity
                            onPress={() => setStatus('true')}
                        >
                            <Text style={styles.showAnswerTitle}>Show Answer</Text>
                        </TouchableOpacity> ) : (
                        <View>
                            <Text style={styles.answer}>
                                {cards[index].answer}
                            </Text>
                        </View>   
                        )}
                </View>
                <View>
                    <TouchableOpacity
                        style={[styles.btn, {backgroundColor: green}]}
                        onPress={() => {
                            nextQuestion();
                            setNumCorrectAnswers(numCorrectAnswers + 1);
                        }}
                    >
                        <Text style={styles.btnTitle}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btn, {backgroundColor: red}]}
                        onPress={() => {
                            nextQuestion();
                            setNumIncorrectAnswers(numIncorrectAnswers + 1);
                        }}
                    >
                        <Text style={styles.btnTitle}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    showAnswerTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: orange,
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        color: green,
    },
    question: {
        textAlign: 'center',
        fontSize: 20,
    },
    answer: {
        textAlign: 'center',
        fontSize: 20,
        color: orange,
    },
    btn: {
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

function mapStateToProps(state) {
    return {
        decks: state,
    };
}


export default connect(mapStateToProps)(Quiz);