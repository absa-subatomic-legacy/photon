import * as React from 'react';
import { push, RouterAction } from 'react-router-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import ProjectView from '../components/ProjectView';
import { ProjectState, Project } from '../types';

export interface Props {
    project: Project;
    changePage: (name: string) => RouterAction;
}

const Home = (props: Props) => (
    <div>
        <p>
            Welcome to the React Photon Application.<br />
            The entire apps build using React!<br />
            Check out our docs on <a href='https://reactjs.org'>reactjs.org</a> to get started.
        </p>

        <Link to="/profile/react">
            <button>Go to profile page via Link</button>
        </Link>

        <button onClick={() => props.changePage('react')}>Go to profile page via redux</button>

        <ProjectView project={props.project}/>
    </div>
);

// tslint:disable-next-line: no-any
function mapStateToProps(state: {projectState: ProjectState}) {
    return {
        project: state.projectState.project,
    };
}

// tslint:disable-next-line: no-any
function mapDispatchToProps(dispatch: Dispatch<any>) {
    return bindActionCreators(
        {
            changePage: (name: string) => push(`/profile/${name}`)
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
