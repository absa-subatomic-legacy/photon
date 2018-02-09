import Profile from '../components/Profile';
import * as actions from '../actions/';
import { ProjectState } from '../types';
import { connect, Dispatch } from 'react-redux';

// tslint:disable-next-line: no-any
export function mapStateToProps(state: {projectState: ProjectState}, ownProps: any) {
    return {
        // project: state.enthusiasm.project,
        name: ownProps.match.params.name,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.ProjectAction>) {
    return {
        forkProject: (url: string) => {
            return actions.forkProject(url)(dispatch);
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);