<template>
  <label>
    {{ label }}
    <input v-bind="$attrs" :value="value" v-on="inputListeners" @click="upd">
  </label>
</template>
<script>
export default {
  props: ['label', 'value'],
  methods: {
    upd(event) {
      this.$emit('update', +new Date + event)
    }
  },
  computed: {
    inputListeners: function() {
      var vm = this
      // `Object.assign` 将所有的对象合并为一个新对象
      return Object.assign({},
        this.$listeners, {
          input: function(event) {
            vm.$emit('input', event.target.value)
          }
        }
      )
    }
  }
}

</script>
