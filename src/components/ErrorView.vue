<template>
  <div class="container-fluid">
    <div class="container overview">
      <h1>Error 404</h1>
      <h3>resource not found</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { useRouter } from "vue-router";
import { Repo } from "../types/repo";
export default defineComponent({
  props: {
    displayedPost: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const router = useRouter();

    return {
      router,
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