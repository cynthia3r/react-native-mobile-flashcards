import { getDecks } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const REMOVE_DECK = 'REMOVE_DECK';
export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const RESET_DECK = 'RESET_DECK';

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks,
    };
}

export function addDeck(title) {
    return {
        type: ADD_DECK,
        title,
    };
}

export function removeDeck(key) {
    return {
        type: REMOVE_DECK,
        key,
    };
}

export function addCard(title, card) {
    return {
        type: ADD_CARD,
        title,
        card,
    };
}

export function removeCard(title, card) {
    return {
        type: REMOVE_CARD,
        title,
        card,
    };
}

export function resetDeck() {
    return {
        type: RESET_DECK,
    };
}

export function handleInitialData() {
    return (dispatch) => {
        return getDecks()
            .then((decks) => {
                dispatch(receiveDecks(decks));
        });
    };
}