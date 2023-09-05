import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deletePlayer(action) {
    console.log('inside deletePlayer', action.payload)
    try {
        yield axios.delete(`/api/winrate/${action.payload}`)
        yield put({ 
            type: 'FETCH_PLAYERS', 
        });

    } catch {
        console.log('get all error');
    }

}

function* deletePlayerSaga() {
    yield takeLatest('DELETE_PLAYER', deletePlayer);
}

export default deletePlayerSaga;