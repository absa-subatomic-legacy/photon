export interface Project {
    id: string;
    title: string;
    created: Date;
    forkedFromUrl: string;
}

export interface ProjectState {
    project: Project | null;
}