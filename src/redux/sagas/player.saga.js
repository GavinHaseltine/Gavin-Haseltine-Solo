import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchPlayers() {
    try {
        console.log("in fetch players")
        const players = yield axios.get('/api/winrate');
        console.log('get all:', players.data);
        
        yield put({ 
            type: 'SET_PLAYERS', 
            payload: players.data
        });

    } catch (error){
        console.log('get all error', error);
    }
        
}

function* playerSaga() {  
    yield takeEvery('FETCH_PLAYERS', fetchPlayers);
}

export default playerSaga;