
const BATTLE_START = 'BATTLE_START';

let initialState = {
    HP: 100,
    attack: 2,
    defence: 1
};

const battleReducer = (state = initialState, action) => {
    switch (action.type) {
        case BATTLE_START: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}

export const battleStart = (mob) => ({type: BATTLE_START,newPostText:newPostText});

export default battleReducer
