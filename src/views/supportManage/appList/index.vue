<template>
  <div class="page-container">
    {{ msg }}
<!--    <button @click="login">登陆</button>-->
<!--    <button @click="onClick">获取用户信息</button>-->
<!--    <button @click="logoff">退出</button>-->
    <p>{{name}}</p>
    <p v-for="(item,index) in gameList">
      <span>{{item}}</span>
      <span @click="delOtherGame({game:item})">删除其他</span>
    </p>
    <input v-model="gameName"></input>
    <button @click="addGame">add</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: 'appList',
  computed:{
    ...mapState("test",["gameList","name"]),
  },
  methods: {
    // ...mapMutations({ catIncrement: "increment" }),
    // ...mapMutations("dog", { dogIncrement: "increment" }),
    // ...mapActions("cat", { catGrow: "grow" }),
    ...mapActions("test",["add","delOtherGame"]),
    addGame(){
      if(this.gameName){
        this.add({game:this.gameName}).then(()=>{
          this.gameName = "";
        })
      }else{
        this.$message({
          message: '未空值',
          type: 'error'
        })
      }
    }
  },
  data() {
    return {
      msg: 'appList',
      gameName:"132"
    };
  }
};
</script>
