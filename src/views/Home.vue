<template>
  <div class="home">
    <h1 class="title">Welcome to Vue&Midway</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  .title {
    padding: 30px;
    text-align: center;
    font-size: 30px;
  }
}
</style>
