<template>
  <div>
    <group title="cell demo">
      <cell title="VUX" value="HelloWorld" is-link link="/HelloWorld"></cell>
    </group>
    <group title="cell demo">
      <cell title="VUX" value="HelloFromVux" is-link link="/HelloFromVux"></cell>
    </group>
    <group title="cell demo">
      <cell title="VUX" value="newTestVux" is-link link="/newTestVux"></cell>
    </group>
    <group title="cell demo">
      <cell title="VUX" value="selectTestVux" is-link link="/selectTestVux"></cell>
    </group>
    <divider>{{name}}</divider>
  </div>
</template>
<script>
  import { Divider, Group, Cell } from 'vux'

  export default {
    components: {
      Divider,
      Group,
      Cell
    },
    data () {
      return {
        name: '我是有底线的'
      }
    }
  }
</script>
