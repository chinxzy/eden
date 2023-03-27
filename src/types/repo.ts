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
    language: string;
    description: string;
    url: string;
    stargazers_count: number;
    watchers_count: number;
    html_url: string
}
export const defaultRepo = {
    full_name: '',
    language: '',
    description: '',
    url: '',
    stargazers_count: 0,
    watchers_count: 0,
    html_url: ''
}





