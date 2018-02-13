import { ProjectAction } from '../actions';
import { ProjectState } from '../types';
import { FORK_PROJECT } from '../constants';

const getInitialState = () => {
    return {
        project: null
    };
};

function projectReducer(state: ProjectState = getInitialState(), action: ProjectAction): ProjectState {
    switch (action.type) {
        case FORK_PROJECT:
            return { ...state, project: {...action.project } };
        default:
            return state;
    }
}

export default projectReducer;