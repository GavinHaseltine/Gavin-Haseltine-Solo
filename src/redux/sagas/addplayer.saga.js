import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useDispatch } from 'react-redux';


function* postItem(action) {

    
    try {
        console.log(action.payload)
        const shelf = yield axios.post('/api/shelf', action.payload);
        console.log('get all:', shelf.data);

        yield put({ type: 'FETCH_SHELF'});

    } catch (error){
        console.log('get all error', error);
    }
        
}

function* addItemSaga() {
    yield takeLatest('ADD_PLAYER', postItem);
}

export default addItemSaga;