<template>
  <div class="home">
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <van-icon name="search" slot="right" />
    </van-nav-bar>
    {{ stateValue }} {{ stateId }}
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" data-ui="msui" ref="hello">
      <template slot-scope="header" slot="header">
        <span v-for="i in header.data" :key="i"> {{ i }} </span>
      </template>
      <template slot-scope="header" slot="footer">
        <span v-for="i in header.data" :key="i"> {{ i }} </span>
      </template>
    </HelloWorld>
    <van-button type="warning">警告按钮</van-button>
    <van-switch v-model="checked" />
  </div>
</template>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState /*, mapMutations*/ , mapActions } from 'vuex'
// const { namespacedHelperActions } = createNamespacedHelpers('../store/module')
export default {
  name: 'home',
  computed: mapState({
    stateValue: state => state.stateValue
  }),
  data() {
    return {
      checked: true
    }
  },
  methods: {
    // mapMutations('attendance', [
    //   'childCr'
    // ]),
    ...mapActions([
      'count'
    ])
  },
  created() {
    let state = this.$store.state
    this.stateId = state.stateValue.id
    // console.log(state.stateValue, state.count, state.attendance.mod)
    // console.log(state.attendance.ss, state.attendance.getData)
    this.count()
    this.axios.put('/posts/1', {
      name: 34
    }).then((res) => console.log(res))
  },
  mounted() {},
  components: {
    HelloWorld
  }
}

</script>
