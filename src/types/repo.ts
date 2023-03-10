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
    languages: string
    stargazers_count: number;
    watchers_count: number;
}





