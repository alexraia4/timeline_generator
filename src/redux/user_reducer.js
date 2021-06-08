const initialState = {
    user: {
        username: "",
        uid: 0
    }
}

const LOGIN_USER = "LOGIN_USER";

export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: user
    }
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {...state, user: action.payload}

        default:
            return state;
    }
}