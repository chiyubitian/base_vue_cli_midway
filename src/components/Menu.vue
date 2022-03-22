<template>
  <div>
    <a-menu mode="inline" theme="dark" v-model="selectedKeys">
      <a-menu-item :key="route.name" v-for="route in routes">
        <a-icon :type="route.props.icon" />
        <span>{{ route.name }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { routes } from "@/router";

@Component({})
export default class Menu extends Vue {
  routes = routes;

  selectedKeys: string[] = [];

  mounted() {
    const { name } = this.$route;
    this.selectedKeys = [name as string];
  }

  @Watch("selectedKeys")
  selectMenu() {
    const [name] = this.selectedKeys;
    this.$router.push({
      name,
    });
  }
}
</script>

<style scoped lang="scss"></style>
