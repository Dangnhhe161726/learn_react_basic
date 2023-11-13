
const initState = {
    users: []
}

const rootReducer = (state = initState, action) => {
    let users;
    switch (action.type) {
        case 'DELETE_USER':
            // console.log('>> run into delete  user', action)
            users = state.users;
            users = users.filter(item => item.id !== action.payload.id);
            return {
                ...state, users
            };
        case 'ADD_USER':
            users = state.users;
            let user = {
                id: Math.floor(Math.random() * 1000),
                name: action.payload.name
            }
            users = [...users, user]
            return {
                ...state, users
            };
        default:
            return state;
    }

}

export default rootReducer;