<template>
  <div class="head">
    <img class="logo" alt="Vue logo" src="../assets/logo.png" />
    <div>
      <!-- <span>{{nowTime}}</span> -->
      <a-avatar
        v-if="user.avatar"
        class="avatar"
        shape="circle"
        :size="36"
        :src="user.avatar"
      />
      <a-avatar v-else class="avatar" :size="36" icon="user" />
      <span class="username"> {{ user.username }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
// import moment from "moment";
import { User } from "@/interface";

@Component
export default class Head extends Vue {
  @State
  user!: User;

  // get nowTime(): string {
  //   return moment.format("YYYY/MM/DD HH:MM:SS");
  // }
}
</script>

<style scoped lang="scss">
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  .logo {
    width: 32px;
    height: 32px;
  }
  .avatar {
    margin-right: 10px;
  }
  .username {
    color: azure;
  }
}
.ant-layout-header ::v-deep {
  padding: 0;
}
</style>
