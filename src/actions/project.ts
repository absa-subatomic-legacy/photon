import * as constants from '../constants';
import { Project } from '../types/project';

export interface ForkProjectAction {
    type: constants.FORK_PROJECT;
    project: Project;
}

export function forkProject(project: Project): ForkProjectAction {
    return {
        type: constants.FORK_PROJECT,
        project
    };
}