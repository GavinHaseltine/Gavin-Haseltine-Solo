import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteDeck(action) {
    console.log('inside deleteDeck', action.payload)
    try {
        yield axios.delete(`/api/decks/${action.payload}`)
        yield put({ 
            type: 'FETCH_DECKS', 
        });

    } catch {
        console.log('get all error');
    }

}

function* deleteDeckSaga() {
    yield takeLatest('DELETE_DECK', deleteDeck);
}

export default deleteDeckSaga;