import AsyncStorage from '@react-native-async-storage/async-storage';
import { decks } from './_data';

const FLASHCARDS_STORAGE_KEY = 'Flashcards:decks';

export async function getDecks() {
    try {
        const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);

        if(results === null) {
            AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks));
        }
        return (results === null) ? decks : JSON.parse(results);
    } catch (err) {
        console.error(err);
    }
}

export async function getDeck(id) {
    try {
        const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
        if(results !== null) {
            return JSON.parse(results)[id];
        } else {
            console.log('AsyncStorage.getItem() returned null');
        }
    } catch (err) {
        console.error(err);
    }
}

export async function saveDeckTitle(title) {
    try {
        await AsyncStorage.mergeItem(
            FLASHCARDS_STORAGE_KEY,
            JSON.stringify({
                [title]: {
                    title,
                    cards: [],
                }
            })
        );
    } catch (err) {
        console.error(err);
    }
}

export async function addCardToDeck(title, card) {
    try {
        const deck = await getDeck(title);
        await AsyncStorage.mergeItem(
            FLASHCARDS_STORAGE_KEY,
            JSON.stringify({
                [title]: {
                    title,
                    cards: [...deck.cards].concat[card],
                }
            })
        );
    } catch (err) {
        console.error(err);
    }
}

export async function resetDecks() {
    try {
        AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(decks));
        return decks;
    } catch (err) {
        console.error(err);
    }
}

export async function removeDeckEntry(key) {
    try {
        const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
        const data = JSON.parse(results);
        data[key] = undefined;
        delete data[key];
        AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
        console.error(err);
    }
}

export async function removeCardEntry(title, card) {
    try {
        const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY);
        const data = JSON.parse(results);
        delete data[title].cards.splice(card, 1);
        AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data));
    } catch (err) {
        console.error(err);
    }
}