import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { fetchUser } from './saga/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(fetchUser);

export default store;