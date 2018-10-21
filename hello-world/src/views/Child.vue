<template>
  <div class="page">
    <div @click="childCr(33322);ss();getData('getData')">
      {{ id }} {{ $route.params.id }}
    </div>
    <div class="box m20">
      <div class="btn btn-success fl1" @click="start">开始</div>
      <div class="btn btn-danger fl1" @click="stopFrame">停止</div>
    </div>
    <div id="circle"></div>
    <div id="circle1"></div>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  props: ['id'],
  beforeRouteEnter(to, from, next) {
    // console.log(to, from)
    next()
  },
  data() {
    return {
      circleCount: 0,
      framesId: null
    }
  },
  methods: {
    ...mapMutations('attendance', ['childCr', 'ss']),
    ...mapActions('attendance', ['getData']),
    start() {
      this.startFrame({ dom: document.getElementById('circle') })
      this.startFrame({ dom: document.getElementById('circle1'), radio: -1, per: 0.1 })
    },
    startFrame({ dom, per = 0.008, radio = 1 }) {
      var _this = this
      let frames = function() {
        if (_this.circleCount <= 2 * Math.PI) {
          _this.circleCount += per
          if (radio < 0) {
            dom.style.transform = 'translate(' + (140 * Math.cos(_this.circleCount)) + 'px, ' + (140 * Math.sin(_this.circleCount)) + 'px)'
          } else {
            dom.style.transform = 'translate(' + (320 * Math.sin(_this.circleCount)) + 'px, ' + (100 * Math.cos(_this.circleCount)) + 'px)'
          }
        } else {
          _this.circleCount = 0
        }
        _this.framesId = window.requestAnimationFrame(frames)
      }
      this.framesId = window.requestAnimationFrame(frames)
    },
    stopFrame() {
      window.cancelAnimationFrame(this.framesId)
    }
  },
  mounted() {
    this.$store.dispatch('mut', { id: 'changed stateValue' })
  },
  beforeRouteLeave(to, from, next) {
    // const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
    // if (answer) {
    //   next()
    // } else {
    //   next(false)
    // }
    next()
  }
}

</script>
<style scoped lang="scss">
.box {
  position: fixed;
}

#circle,
#circle1 {
  position: absolute;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background-color: #2eb98a;
  box-shadow: 1px 2px 3px #333;
  animation: colorchange 4s 12s ease-in infinite;
  background: url(https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3986412193,107555890&fm=26&gp=0.jpg) center no-repeat;
  background-size: cover;
}

#circle1 {
  width: 70px;
  height: 70px;
  margin-left: 100px;
  animation: colorchange 10s ease-in infinite;
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538913946812&di=986f9764444762a827e37203bec76658&imgtype=0&src=http%3A%2F%2Fpic71.nipic.com%2Ffile%2F20150701%2F3088286_105037207000_2.jpg) center no-repeat;
}

@keyframes colorchange {
  0% {
    width: 10px;
    height: 10px;
  }

  20% {
    width: 200px;
    height: 200px;
  }

  60% {
    width: 10px;
    height: 10px;
  }

  100% {
    width: 10px;
    height: 10px;
  }
}

.page {
  background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538912…95033678&imgtype=0&src=http%3A%2F%2Fp4.qhimg.com%2Ft01924163c3ec3e8569.jpg) no-repeat center;
  background-size: cover;
}

</style>
