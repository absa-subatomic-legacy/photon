import { Project } from '../types';

/**
 * Fork the project
 * @param url Url to fork the project from
 */
export function fork(url: string): Promise<Project> {
    return Promise.resolve({
        id: Date.now().toString(),
        title: 'New Project',
        created: new Date(),
        forkedFromUrl: url
    });
}
