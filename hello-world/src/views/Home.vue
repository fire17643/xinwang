<template>
  <div>
    <div :class="{'f1': f}" id="pwx" @click="f = true">
      <img id="pwx-img" :class="{'f2': f}" width="50" src="../assets/logo.png" alt="">
      </div>
      <input type="text" v-model="value" @focus="upd">
      <base-input @update="upd" label="label" :value="value"></base-input>
      <button class="btn btn-success" v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
      <button class="btn btn-success btn-inline" v-on:click="shuffle">Shuffle</button>
      <transition-group name="flip-list1" tag="ul" class="list">
        <li class="list-item" v-for="item in items" :key="item">
          <div class="list-item-inner list-item-touch-active">
            <div class="list-item-left fb">
              调休假
            </div>
            <div class="list-item-right gray">
              <div>剩余 <span class="red" v-cr>{{ item }}小时</span></div>
            </div>
          </div>
        </li>
      </transition-group>
      <transition-group name="flip-list" tag="p">
        <span class="list-item" v-for="item in items" :key="item">
          {{ item }}
        </span>
      </transition-group>
    </div>
</template>
<script>
import BaseInput from '../components/listener.vue'
export default {
  name: 'app',
  components: {
    BaseInput
  },
  directives: {
    cr: {
      // 指令的定义
      inserted: function(el) {
        el.style.color = 'red';
      }
    }
  },
  data() {
    return {
      value: 123,
      show: true,
      items: [1, 2, 3, 4],
      f: false
    }
  },
  created() {
    this.showData()
  },
  methods: {
    async showData() {
      // 假装请求数据1
      var data1 = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('data1');
        }, 4000);
      });

      // 假装请求数据2且此请求依赖数据1
      var data2 = await new Promise((resolve) => {
        setTimeout(() => {
          resolve('data2' + data1);
        }, 1000);
      });

      // 展示数据2
      console.log(data2);
    },
    shuffle() {
      this.items.sort(() => {
        return 0.5 - Math.random()
      })
    },
    upd() {
      this.value = 456 /* / Math.random()*/
    }
  }
}
// console.log('\u{9ec4}\u{5fd7}\u{6587}')
// let obj = { one: 1, two: 2 };
// for (let [k, v] of Object.entries(obj)) {
// console.log(k, v)
// }
let a = Object.create({ x: 3 })
a.y = 5
// let b = Object.assign(Object.create(Object.getPrototypeOf(a)), a)
let b = Object.create(Object.getPrototypeOf(a), Object.getOwnPropertyDescriptors(a))
let c = { ...a, ...{ x: 4, y: 44 } }
console.log(a, c)
var f = { a: 1 }
var g = { a: 1 }
let set = new Set()
set.add(f)
set.add(Object.create(g))
console.log(set.has(f))
let map = new Map()
map.set(3, 3)
console.log(map.has(3), map.has('3'))
let d = {
  get(target, k) {
    return k
  }
}
var cc = new Proxy({}, d)
console.log(cc.xc)

function request(url, time) {
  setTimeout(function() {
    console.log(time)
    it.next(url);
  }, time)
}

function* ajaxs() {
  console.log(yield request('a.html', 2000));
  console.log(yield request('b.html', 1000));
  console.log(yield request('c.html', 3000));
}
var it = ajaxs();
it.next()

</script>
<style lang="scss">
.f1 {
  transform: translateX(500px)
}

.f2 {
  transform: translateY(700px)
}

#app {
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
  transform: scale(0) translateX(100px)
}

.flip-list-move {
  transition: transform 1s;
}

.list-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}

.flip-list1-move {
  transition: transform 2s !important;
}

.flip-list-enter,
.flip-list-leave-to

/* .flip-list-leave-active for below version 2.1.8 */
  {
  opacity: 0;
  transform: translateY(30px);
}

.flip-list-leave-active {
  position: absolute;
}

#pwx {
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 222;
  transition: transform 1s;
  transition-timing-function: linear;

  img {
    transition: transform 1s;
    transition-timing-function: cubic-bezier(.55, 0, .85, .36);
  }
}

</style>
