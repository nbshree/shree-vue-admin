<template>
  <div class="lock-wrap">
    <el-carousel :height="carouselHeight" indicator-position="none" :autoplay="true">
      <el-carousel-item v-for="(item,index) in imgList" :key="index">
        <img style="height: 100%" :src="item" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: 'adream',
    data() {
      return {
        carouselHeight: '300px',
        imgList: []
      };
    },
    created() {
      this.carouselHeight = `${window.innerHeight}px`;
      this.initImg();
    },
    methods: {
      initImg() {
        for (let i = 0; i < 12; i++) {
          this.imgList.push(require('@/assets/images/adream/' + (i + 1) + '.jpg'));
        }
      },
      unlock() {
        if (this.pwd === '') {
          this.$message.error('Please Enter Password!');
        } else {
          this.$message.success(this.$t('lock.unlock'));
          this.$store.dispatch('setLockState', 'unlock');
          this.$router.push('/');
        }
      }
    }
  };
</script>

<style lang="stylus" scoped>
  .lock-wrap
    width 100%
    height 100%
    overflow hidden

  .el-carousel__container
    height 100%

  .el-carousel__item
    display flex
    align-items center
    justify-content center

    div
      font-size 35px
      color white

  .el-carousel__item:nth-child(2n)
    background-color #659c84

  .el-carousel__item:nth-child(2n+1)
    background-color #374b63
</style>
