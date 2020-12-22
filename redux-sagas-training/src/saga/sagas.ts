import { takeLatest, put, call } from 'redux-saga/effects';
import { SAGA_FETCH_USER } from './sagaTypes';
import API from './Api';
import { fetchUserSuccess } from '../Reducers/cart.actions';

export function* fetchUserAsync() {
    const result = yield call(API.apiFetchUser, {args: 1});//function call
    yield put(fetchUserSuccess(result));//dispatches an action, to set store object
}

export function* fetchUser() {
    yield takeLatest(SAGA_FETCH_USER, fetchUserAsync);
}
