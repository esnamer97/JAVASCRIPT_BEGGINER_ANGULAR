export interface Project {
    idProjects: number;
    tittle: string;
    description: string;
    image: string;
    route: string;
}

export interface RootObject {
    projects: Project[];
}