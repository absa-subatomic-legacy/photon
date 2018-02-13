import * as constants from '../constants';
import { Project } from '../types';
import { fork } from '../services';

export interface ForkProjectAction {
    type: constants.FORK_PROJECT;
    project: Project;
}

export function forkProject(url: string) {
    // tslint:disable-next-line
    return (dispatch: any) => {
        return fork(url).then((project: Project) => {
            // Yay! Can invoke sync or async actions with `dispatch`
            return dispatch(forkProjectSuccess(project));
        });
    };
}

function forkProjectSuccess(project: Project): ForkProjectAction {
    return {
        type: constants.FORK_PROJECT,
        project
    };
}

export type ProjectAction = ForkProjectAction;