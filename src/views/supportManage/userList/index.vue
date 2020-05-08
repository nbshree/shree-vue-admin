<template>
  <div class="page-container">
    {{ msg }}
    <button @click="login">登陆</button>
    <button @click="onClick">获取用户信息</button>
    <button @click="logoff">退出</button>
    <input v-model="username"></input>
    <button @click="getMsg">获取指定用户信息</button>
  </div>
</template>

<script>
  import axios from '@/utils/axios-init';

  export default {
    name: 'userList',
    methods: {
      login() {
        axios.get('http://shree.top/api/api/login', {
          params:  { 'userName': 'shree', 'userPwd': '123456' }
        }).then((response) => {
          console.log(response);
        });
      },
      onClick() {
        axios.get('http://shree.top/api/api/getUserByName', {
          params: { 'userName': 'sry' }
        }).then((response) => {
          console.log(response);
        });
      },
      logoff() {
        axios.get('http://shree.top/api/api/logoff').then((response) => {
          console.log(response);
        });
      },
      getMsg(){
        axios.get('http://shree.top/api/api/getUserByName',{
          params:{
            "userName":this.username
          }
        }).then((response) => {
          console.log(response);
        });
      }
    },
    data() {
      return {
        msg: 'userList',
        username:"shree"
      };
    }
  };
</script>
