<template>
  <div class="page-container">
    {{ msg }}
    <label>
      <input v-model="username"></input>
    </label>
    <button @click="getInfo">获取用户列表</button>
  </div>
</template>

<script>
  import httpAjax from '@/utils/http';

  export default {
    name: 'userList',
    methods: {
      getInfo(){
        httpAjax.get('api/userInfo/getUserInfoList').then((response) => {
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
