<template>
  <div class="Antd">
    <div class="">
      <div class="title">Antd</div>
      <a-button type="primary"> <a-icon type="plus" />新增 </a-button>
    </div>
    <div class="search">
      <a-form-model ref="searchForm" layout="inline" :model="formInline">
        <a-form-model-item>
          <a-input v-model="formInline.user" placeholder="Username"> </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-input v-model="formInline.password" placeholder="Password">
          </a-input>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary" @click="onSubmit"> Create </a-button>
          <a-button style="margin-left: 10px" @click="resetForm">
            Reset
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
    <div class="data-table">
      <a-table :columns="columns" :data-source="data">
        <template slot="name" slot-scope="text">
          <a>{{ text || "-" }}</a>
        </template>
        <template slot="age" slot-scope="text">
          {{ text || "-" }}
        </template>
        <template slot="address" slot-scope="text">
          {{ text || "-" }}
        </template>
        <template slot="action">
          <a>查看</a>
          <a>删除</a>
          <a>编辑</a>
          <a>复制</a>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from "vue-property-decorator";
import { FormModel } from "ant-design-vue";

interface SearchForm {
  user: string;
  password: string;
}

@Component
export default class ANtd extends Vue {
  @Ref()
  searchForm!: FormModel;

  formInline: SearchForm | { [key: string]: string } = {
    user: "",
    password: "",
  };

  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 300,
      ellipsis: true,
      scopedSlots: { customRender: "name" },
    },
    {
      title: "Age",
      key: "age",
      sorter: true,

      scopedSlots: { customRender: "age" },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 400,
      ellipsis: true,
      scopedSlots: { customRender: "address" },
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 200,
      ellipsis: true,
      scopedSlots: { customRender: "action" },
    },
  ];

  data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 2 Lake Park, London No. 2 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  onSubmit() {
    console.log(this.formInline);
  }
  resetForm() {
    this.formInline = {};
  }
}
</script>
<style lang="scss" scoped></style>
