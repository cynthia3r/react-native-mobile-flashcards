import {
    RECEIVE_DECKS,
    ADD_DECK,
    REMOVE_DECK,
    ADD_CARD,
    REMOVE_CARD,
    RESET_DECK
} from '../actions/index';

function decks(state = {}, action) {
    switch(action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks,
            };
        case ADD_DECK:
            return {
                ...state,
                [action.title] : {
                    title: action.title,
                    cards: [],
                }
            };
        case REMOVE_DECK:
            delete state[action.key];
            return Object.assign({}, state);
        case ADD_CARD:
            const { title, card } = action;
            return {
                ...state,
                [title]: {
                    ...state[title],
                    cards: [...state[title].cards].concat(card),
                }
            };
        case REMOVE_CARD:
            delete state[action.title].cards.splice(action.card, 1);
            return Object.assign({}, state);
        case RESET_DECK:
            return decks;
        default:
            return state;  
    }
}

export default decks;