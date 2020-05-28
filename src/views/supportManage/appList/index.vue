<template>
  <div class="page-container">
    {{ msg }}
    <button @click="getData">getData</button>
    <button @click="getOptData">getOptData</button>
    <button @click="reset">reset</button>
<!--    <button @click="onClick">获取用户信息</button>-->
<!--    <button @click="logoff">退出</button>-->
    <p>{{name}}</p>
    <p v-for="(item,index) in gameList">
      <span>{{item}}</span>
      <span @click="delOtherGame({game:item})">删除其他</span>
    </p>
    <input v-model="gameName"></input>
    <button @click="addGame">add</button>
    <anchored-heading :level="5">
<!--      <slot>213</slot>-->
<!--      <slot name="1">1</slot>-->
      <template v-slot:header>
        <h1>1</h1>
      </template>
      <template v-slot:default>
        <h1>Here might be a page title</h1>
      </template>
    </anchored-heading>
    <anchored-heading-second :level="1">
      <!--      <slot>213</slot>-->
      <!--      <slot name="1">1</slot>-->
      <template v-slot:header>
        <h1>1</h1>
      </template>
      <template v-slot:default>Here might be a page title</template>
    </anchored-heading-second>
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
    },
    getData(){
      console.log(this.$data);
    },
    getOptData(){
      console.log(this.$options);
      console.log(this.$options.data());
    },
    reset(){
      Object.assign(this.$data,this.$options.data())
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
