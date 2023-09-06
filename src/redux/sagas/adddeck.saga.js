import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function* postDeck(action) {

    
    try {
        console.log(action.payload)
        const newDeck = yield axios.post('/api/decks/', action.payload);
        console.log('get all:', newDeck.data);

        yield put({ type: 'FETCH_DECKS'});

    } catch (error){
        console.log('get all error', error);
    }
        
}

function* addDeckSaga() {
    yield takeLatest('ADD_DECK', postDeck);
}

export default addDeckSaga;