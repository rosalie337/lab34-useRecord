export const initialState = {
    current: '#00FF00',
    before: [],
    after: []
};

export default function colorReducer(state, action) {
    switch(action.type) {
        case 'undo':
            return { ...state,
                after:[state.current, ...state.after],
                current: state.before[state.before.length -1],
                before: state.before.slice(0, -1)
            };
        case 'redo':
            return { ...state,
                before: [...state.before, state.current],
                current: state.after[0],
                after: state.after.slice(1) };
        case 'current':
            return { ...state,
                before: [...state.before, state.current],
                current: action.payload
            };
        default: return state;
    }
}