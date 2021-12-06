<template>
  <div class="hello">
    <el-table v-if="show" :data="posts" style="width: 100%">
      <el-table-column prop="userId" label="User id" width="180"> </el-table-column>
      <el-table-column prop="id" label="Id" width="180"></el-table-column>
      <el-table-column prop="title" label="Title"> </el-table-column>
      <el-table-column prop="body" label="Body"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Posts",
  created() {
      try {
          const token = localStorage.token;
          axios.get('http://localhost:3000/posts', { headers: {"Authorization" : `Bearer ${token}`, "Access-Control-Allow-Origin": "*"} })
            .then(data =>{
                this.posts=data.data.posts;
                this.show=true;
            })
      } catch (error) {
          console.error(error)
      }
  },
  data() {
      return {
      posts: [],
      show:false
      }
  },
  methods: {},
};
</script>
