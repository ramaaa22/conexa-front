<template>
  <div class="hello">
    <el-table v-if="show" :data="photos" :loading="loading" style="width: 100%">
      <el-table-column prop="albumId" label="Album id" width="180"> </el-table-column>
      <el-table-column prop="id" label="Id" width="180"></el-table-column>
      <el-table-column prop="title" label="Title"> </el-table-column>
      <el-table-column prop="url" label="Url"> </el-table-column>
      <el-table-column prop="thumbnailUrl" label="Thumbnail Url"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Photos",
  created() {
      try {
          const token = localStorage.token;
          axios.get('http://localhost:3000/photos', { headers: {"Authorization" : `Bearer ${token}`} })
            .then(data =>{
                this.photos=data.data.photos;
                this.show=true;
                this.loading=false;
            })
      } catch (error) {
          console.error(error)
      }
  },
  data() {
      return {
      photos: [],
      show:false,
      loading:true
      }
  },
  methods: {},
};
</script>
