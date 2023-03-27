<template>
  <div class="container-fluid">
    <div class="container overview">
      <h2>{{ repo.full_name }}</h2>
      <p>{{ repo.description }}</p>
      <div class="others d-flex">
        <p>
          <span class="material-symbols-outlined"> code </span
          >{{ repo.language }}
        </p>
        <p>
          <span class="material-symbols-outlined"> grade </span
          >{{ repo.stargazers_count }}
        </p>
        <p>
          <span class="material-symbols-outlined"> account_tree </span
          >{{ repo.watchers_count }}
        </p>
      </div>
      <a :href="repo.html_url"><button class="btn">view repo</button></a>
    </div>
  </div>
</template>


<script lang="ts">
import RepoOverview from "./RepoOverview.vue";
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { State } from "../store/modules/repo";
import { Repo, Status } from "../types/repo";

export default defineComponent({
  components: {
    RepoOverview,
  },
  setup() {
    const store = useStore();
    const url = window.history.state.url;
    console.log(url);

    const repoState = computed<State>(() => store.state.repo);

    const repo = computed<Repo>(() => repoState.value.repos);

    const loadingState = ref({
      getRepo: computed<Status>(
        () => repoState.value.repoRequestStatus.getItem
      ),
    });

    const loadRepo = computed<boolean>(
      () => loadingState.value.getRepo == Status.LOADING
    );

    onMounted(() => {
      store.dispatch("repo/fetchSingleRepo", url);
    });
    return {
      repo,
      loadingState,
      loadRepo,
    };
  },
});
</script>

<style lang="scss" scoped>
.overview {
  background: #2a2c45;
  padding: 1em;
  border-radius: 1em;
  margin-top: 3em;

  h2 {
    color: #47dbf9;
  }
  .others {
    display: flex;
    p {
      margin: 1em;
      color: #47dbf9;
    }
    span {
      position: relative;
      top: 0.2em;
      margin-right: 0.1em;
    }
  }
}
</style>
