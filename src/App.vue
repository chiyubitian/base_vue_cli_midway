<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Action } from "vuex-class";
import Layout from "./components/Layout.vue";
import { getUser } from "@/common/request";

@Component({
  components: {
    Layout,
  },
})
export default class App extends Vue {
  @Action
  // eslint-disable-next-line @typescript-eslint/ban-types
  initUserAsyc!: Function;

  mounted() {
    this.getUser();
  }

  async getUser() {
    const user = await getUser();
    return this.initUserAsyc(user);
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
