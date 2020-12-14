import { takeLatest, put, call } from 'redux-saga/effects';
import { SAGA_FETCH_USER } from './sagaTypes';
import API from './Api';
import { fetchUserSuccess } from '../Reducers/cart.actions';

function* fetchUserAsync() {
    const result = yield call(API.apiFetchUser);
    yield put(fetchUserSuccess(result));
}

export function* fetchUser() {
    console.log('sagas-fetch user');

    yield takeLatest(SAGA_FETCH_USER, fetchUserAsync);
}
