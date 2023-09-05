import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchDecks() {
    try {
        console.log("in fetch decks")
        const decks = yield axios.get('/api/decks');
        console.log('get all:', decks.data);
        
        yield put({ 
            type: 'SET_DECKS', 
            payload: decks.data
        });

    } catch (error){
        console.log('get all error', error);
    }
        
}

function* deckSaga() {  
    yield takeEvery('FETCH_DECKS', fetchDecks);
}

export default deckSaga;