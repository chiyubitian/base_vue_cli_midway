<template>
  <a-layout class="layout">
    <a-layout-header>
      <Head />
    </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <Menu />
      </a-layout-sider>
      <a-layout-content>
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Head from "./Head.vue";
import Menu from "./Menu.vue";

@Component({
  components: {
    Head,
    Menu,
  },
})
export default class Layout1 extends Vue {}
</script>

<style scoped lang="scss">
.layout {
  height: 100%;
}
</style>
