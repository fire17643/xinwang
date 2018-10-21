<template>
  <div class="page" id="app">
    <van-nav-bar title="标题" left-text="返回" right-text="按钮" left-arrow />
    <div class="content">
      <transition :name="transitionName" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="footer">
      <ul class="tabbar">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/child/user">child</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
@import './assets/scss/index.scss';

#app {
  text-align: center;
  color: #2c3e50;
}

.tabbar {
  margin: 20px auto;
  width: 80%;
}

</style>
<script>
export default {
  data() {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = 'slide-left';
      } else {
        this.transitionName = 'slide-right'
      }
    }
  }
}

</script>
