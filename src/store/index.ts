import { InjectionKey } from "vue";
import {
  createStore,
  useStore as baseUseStore,
  Store,
  createLogger,
} from "vuex";

import repo from "./modules/repo";


import { State as repoState } from "./modules/repo";

export type State = {
  repo: repoState;
};


export const store = createStore<State>({
  plugins: process.env.NODE_ENV === "development" ? [createLogger()] : [],
  modules: {
    repo,
  },
});

export const useStore = () => store;

// export type Store = Omit<
//   VuexStore<State>,
//   "getters" | "commit" | "dispatch"
// > & {
//   commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
//     key: K,
//     payload: P,
//     options?: CommitOptions
//   ): ReturnType<Mutations[K]>;
// } & {
//   dispatch<K extends keyof Actions>(
//     key: K,
//     payload?: Parameters<Actions[K]>[1],
//     options?: DispatchOptions
//   ): ReturnType<Actions[K]>;
// } & {
//   getters: {
//     [K in keyof Getters]: ReturnType<Getters[K]>;
//   };
// };
