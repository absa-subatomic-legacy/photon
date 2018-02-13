import * as React from 'react';

import { Project } from '../types';

export interface Props {
    project: Project;
}

class ProjectView extends React.Component<Props, object> {
    render() {
        const { project } = this.props;

        if (project) {
            return (
                <div className="project">
                    <h1>Congrats!</h1>
                    <p>You have successfull forked the <b>{project.title}</b> from <i>{project.forkedFromUrl}</i> on 
                    {project.created.toString()}.<br /><br />
                    <small>Please use the following project ID {project.id} for future references.</small></p>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default ProjectView;
