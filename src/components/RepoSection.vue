<template>
  <div class="container-fluid">
    <div class="container username">
      <h3>Enter GitHub Username:</h3>

      <form class="form-inline">
        <div class="form-group">
          <input type="text" class="form-control" v-model="user" />
          <button @click="getRepo" class="btn btn-success">Submit</button>
        </div>
      </form>
    </div>
    <RepoOverview :repo="repo" />
  </div>
</template>


<script lang="ts">
import RepoOverview from "./RepoOverview.vue";
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { State } from "../store/modules/repo";
import { Repo } from "../types/repo";

export default defineComponent({
  components: {
    RepoOverview,
  },
  setup() {
    const user = ref("");
    const store = useStore();

    const repoState = computed<State>(() => store.state.repo);

    const repo = computed<Repo[]>(() => repoState.value.repo);

    const getRepo = () => {
      store.dispatch("repo/fetchRepo", user.value);
    };
    return {
      repo,
      getRepo,
      user,
    };
  },
});
</script>

<style lang="scss" scoped>
.username {
  border: 2px solid #393d57;
  background: #393d57;
  border-radius: 1em;
  padding: 2em;
  .form-inline {
    margin-top: 2em;
    .form-control {
      margin-right: 1em;
      padding: 0.5em;
      border: #2e3244 1px solid;
      background: #2e3244;
    }
    .btn {
      background: #008ca7;
      padding: 0.7em;
      font-size: 0.8em;
    }
  }
}
</style>
