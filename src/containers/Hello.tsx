import Profile from '../components/Profile';
import * as actions from '../actions/';
import { EnthusiasmState } from '../types/index';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps(state: {enthusiasm: EnthusiasmState}) {
    return {
        enthusiasmLevel: state.enthusiasm.enthusiasmLevel,
        name: state.enthusiasm.languageName,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);