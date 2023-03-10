import axios from "axios";
import { Module, Commit } from "vuex";
import { RepoRequestStatus, Status, Repo, } from "../../types/repo";
import { State as Rootstate } from "../index";
import * as ACTIONS from '../types';
import { query } from "../../types/general";


export interface State {
    repoRequestError: string;
    repoRequestStatus: RepoRequestStatus;
    repo: Repo[]
}

const repo: Module<State, Rootstate> = {
    namespaced: true,

    state: () => ({
        repoRequestError: '',
        repoRequestStatus: {
            getItem: Status.IDLE,
            addItem: Status.IDLE,
            deleteItem: Status.IDLE

        },
       repo: []


    }),

    mutations: {
        //mutation for repo
        // ["CLEAR_ALERT"](state: State): void {
        //     state.repoRequestStatus.addItem = Status.IDLE;
        // },
        [ACTIONS.GET_REPO_LOADING](state: State): void {
            state.repoRequestStatus.getItem = Status.LOADING;
        },

        [ACTIONS.GET_REPO_SUCCESS](state: State, repo: Repo[]): void {
            state.repoRequestStatus.getItem = Status.SUCCESS;
            state.repo = repo

        },

        [ACTIONS.GET_REPO_ERROR](state: State, error: string): void {
            state.repoRequestError = error;
            state.repoRequestStatus.getItem = Status.ERROR;
        },

       
    },

    actions: {
        async removeAlert({ commit }: { commit: Commit }) {
            commit("CLEAR_ALERT");
        },
        async fetchRepo({ commit }: { commit: Commit },  user
            

        ) {console.log({"user": user})
            try {
                commit(ACTIONS.GET_REPO_LOADING);
                const  {data}  = await axios.get(
                    `https://api.github.com/users/${user}/repos`
                );
                commit(ACTIONS.GET_REPO_SUCCESS, data);

            } catch (response: any) {
                commit(ACTIONS.GET_REPO_ERROR, response.response.status);
                console.log("error: ", response.response.status);
            }

        },
       
    },
};

export default repo;