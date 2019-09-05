import {
    RECIEVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
} from '../actions/session'

const _nullSession = {
    currentUser: null, //return  null if no current user
};

export default (state = _nullSession, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECIEVE_CURRENT_USER:
            return Object.assign( {}, {currentUser: action.user });
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return state;
    }
};