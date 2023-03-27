export interface RepoRequestStatus {
    getItem: Status;
}



export enum Status {
    LOADING = 'LOADING',
    SUCCESS = 'SUCCESS',
    ERROR = 'ERROR',
    IDLE = 'IDLE'
}




export interface Repo {
    full_name: string;
    languages: string;
    description: string;
    url: string;
    stargazers_count: number;
    watchers_count: number;
}
export const defaultRepo = {
    full_name: '',
    languages: '',
    description: '',
    url: '',
    stargazers_count: 0,
    watchers_count: 0,
}





