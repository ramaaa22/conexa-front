<template>
  <div class="hello">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data() {
      return {
        form: {
          email: '',
          password: '',
        }
      }
  },
  methods: {
       onSubmit() {
        let {email,password} = this.form;
        let user ={
            email,
            password
        }
        try {
            axios.post('http://localhost:3000/users/login',user)
                .then(data=>{
                    if (data.data.user===true){
                      localStorage.token = data.data.token;
                      console.log(localStorage.token);
                    }
                })
        } catch (error) {
            console.error(error);
        }
      }
    }
};
</script>
