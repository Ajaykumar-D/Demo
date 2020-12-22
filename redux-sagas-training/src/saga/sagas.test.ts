import { runSaga, stdChannel } from "redux-saga";
import { fetchUserSuccess } from '../Reducers/cart.actions';

import { fetchUserAsync, fetchUser } from './sagas';
import * as api from './Api';

test('test fetch user', async () => {
    let dispatchedActions: any = [];
    const mockUsers:any = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz"
        }
    ];
    api.apiFetchUser = jest.fn(() => Promise.resolve(mockUsers));

    let channel = stdChannel();
    let fakeStore = {
        dispatch: (action) => dispatchedActions.push(action),
        getState: () => ({users: []}),
        channel: channel
    };
    runSaga(fakeStore, fetchUserAsync).done;
    channel.put(fetchUserSuccess(mockUsers));
    channel.close();

    let gen:any = fetchUser();
    let result = gen.next();
    expect(result.value.type).toEqual('FORK');

    gen = fetchUserAsync();
    result = gen.next();
    expect(result.value.type).toEqual('CALL');

    result = gen.next();
    expect(result.value.type).toEqual('PUT');
});