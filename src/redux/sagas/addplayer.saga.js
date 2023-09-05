import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function* postPlayer(action) {

    
    try {
        console.log(action.payload)
        const newPlayer = yield axios.post('/api/winrate', action.payload);
        console.log('get all:', newPlayer.data);

        yield put({ type: 'FETCH_PLAYERS'});

    } catch (error){
        console.log('get all error', error);
    }
        
}

function* addPlayerSaga() {
    yield takeLatest('ADD_PLAYER', postPlayer);
}

export default addPlayerSaga;