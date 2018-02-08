import { EnthusiasmAction } from '../actions';
import { EnthusiasmState } from '../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';

const getInitialState = () => {
    return {
        enthusiasmLevel: 1,
        languageName: 'TypeScript',
    };
};

function enthusiasm(state: EnthusiasmState = getInitialState(), action: EnthusiasmAction): EnthusiasmState {
    switch (action.type) {
        case INCREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
        case DECREMENT_ENTHUSIASM:
            return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
        default:
            return state;
    }
}

export default enthusiasm;