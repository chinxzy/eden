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
    <div v-if="loadRepo" class="loading">
      <h2>LOADING</h2>
    </div>
    <div v-else>
      <RepoOverview :displayedPost="displayedPost" />
      <div class="clearfix btn-group col-md-2 offset-md-5">
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          v-if="page != 1"
          @click="page--"
        >
          back
        </button>
        <button
          type="button"
          class="btn btn-sm btn-outline-secondary"
          v-for="pageNumber in pages"
          :key="pageNumber"
          @click="page = pageNumber"
        >
          {{ pageNumber }}
        </button>
        <button
          v-if="page < pages.length"
          type="button"
          @click="page++"
          class="btn btn-sm btn-outline-secondary"
        >
          front
        </button>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import RepoOverview from "./RepoOverview.vue";
import { computed, defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
import { State } from "../store/modules/repo";
import { Repo, Status } from "../types/repo";

export default defineComponent({
  components: {
    RepoOverview,
  },
  setup() {
    const user = ref("");
    const page = ref(1);
    const perPage = ref(5);
    const pages = ref<number[]>([]);
    const store = useStore();

    const repoState = computed<State>(() => store.state.repo);

    const repo = computed<Repo[]>(() => repoState.value.repo);

    const loadingState = ref({
      getRepo: computed<Status>(
        () => repoState.value.repoRequestStatus.getItem
      ),
    });

    const loadRepo = computed<boolean>(
      () => loadingState.value.getRepo == Status.LOADING
    );

    const getRepo = () => {
      store.dispatch("repo/fetchRepo", user.value);

      console.log({ pages: pages });
    };

    const paginate = (repo: Repo[]) => {
      let Page = page;
      let PerPage = perPage;
      let from = Page.value * PerPage.value - PerPage.value;
      let to = Page.value * PerPage.value;
      return repo.slice(from, to);
    };

    const displayedPost = computed(() => {
      return paginate(repo.value);
    });
    watch(repo, () => {
      pages.value.length = 0;
      let numberOfPages = Math.ceil(repo.value.length / perPage.value);

      for (let i = 1; i < numberOfPages; i++) {
        pages.value.push(i);
      }
      console.log("help");
    });
    return {
      repo,
      getRepo,
      user,
      loadingState,
      loadRepo,
      page,
      perPage,
      paginate,
      displayedPost,
      pages,
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
