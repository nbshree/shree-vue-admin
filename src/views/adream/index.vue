<template>
  <div class="lock-wrap">
    <el-carousel :height="carouselHeight" indicator-position="none" :autoplay="true">
<!--      <el-carousel-item><img style="height: 100%" src="https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/1.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=M%2FDlaIR6f%2Fc%2Bm2K1HNgYGU7mR7w%3D" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/2.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/3.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/4.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/5.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/6.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/7.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/8.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/9.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/10.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/11.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/12.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item><img style="height: 100%" src="../../assets/images/adream/13.jpg" alt=""></el-carousel-item>-->
<!--      <el-carousel-item v-for="index in 4" :key="index">-->
<!--        <img style="height: 100%" :src="'../../assets/images/adream/'+index+'.jpg'" alt="">-->
<!--      </el-carousel-item>-->
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
        imgList: [
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/1.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=M%2FDlaIR6f%2Fc%2Bm2K1HNgYGU7mR7w%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/10.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=w6OwyG46B9t%2FKPonAqSyMzjp5Lc%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/11.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=lL1wsrhEBS%2Bt82QFJjToKywcZp0%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/12.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=1OD%2FiTAplahwgGO2EEUmx2TFi3I%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/13.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=4AJn8pdMk%2Bv7TiYbdRuIbdfOtBo%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/2.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=wIp%2B5Lbeph4SNF8UZvTIs4g9fsw%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/3.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=%2BziaCAyCeY%2B2UgVZU4BFNDFZIE0%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/4.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=nVdoygB%2BMJsa3oT8ErNTAkmqqa8%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/5.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=rUyT%2BleyPy5QPN3RV5zYSGYDIIg%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/6.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=IG2mQRWGnfX0JsR%2F%2FApFJUGGrUQ%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/7.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=85TBh0RoI7SiJKvZF5xUXdEu5js%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/8.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=XkUZlZIE2zKVZJEn1nYoSL5Cjps%3D',
          'https://20200524.oss-cn-shenzhen.aliyuncs.com/shree/9.jpg?Expires=1590297202&OSSAccessKeyId=TMP.3Ki3CmNZBrhcuBF5vvuiWNAM4uy3MJWFKNxhvpBxPyC3GqVfcRnjkaqCJttbdMEkppsBQGtBxc7avj5euJsW6Va2hN2N2K&Signature=jKdHV21%2FnZ4mONEluq1kn4iD6bU%3D'
        ]
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
