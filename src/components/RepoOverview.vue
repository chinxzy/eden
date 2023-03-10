<template>
  <div class="container-fluid">
    <div v-for="(item, index) in repo" :key="index" class="container overview">
      <h2>{{ item.full_name }}</h2>
      <div class="others d-flex">
        <p>
          <span class="material-symbols-outlined"> code </span
          >{{ item.language }}
        </p>
        <p>
          <span class="material-symbols-outlined"> grade </span
          >{{ item.stargazers_count }}
        </p>
        <p>
          <span class="material-symbols-outlined"> account_tree </span
          >{{ item.watchers_count }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Repo } from "../types/repo";
export default defineComponent({
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
  setup() {},
});
</script>


<style lang="scss" scoped>
.overview {
  background: #2a2c45;
  padding: 1em;
  border-radius: 1em;
  margin-top: 3em;
  width: 50em;
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