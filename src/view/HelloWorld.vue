<template>
  <div class="hello full_screen">
    <i-header :title="msg"></i-header>
    <div class="content_scroll">
      <h3 style="text-align: center">{{ msg }}</h3>
      <group title="cell demo">
        <cell title="VUX" value="HelloFromVux" is-link link="/HelloFromVux"></cell>
      </group>
      <group title="cell demo">
        <cell title="VUX" value="newTestVux" is-link link="/newTestVux"></cell>
      </group>
      <group title="cell demo">
        <cell title="VUX" value="selectTestVux" is-link link="/selectTestVux"></cell>
      </group>
      <group title="cell demo">
        <cell title="VUX" value="testDrawer" is-link link="/testDrawer"></cell>
      </group>
      <group title="cell demo">
        <cell title="VUX" value="testTable" is-link link="/testTable"></cell>
      </group>
    </div>
  </div>
</template>

<script>
  import { Group, Cell } from 'vux'
  import Iheader from '../components/header'
  export default {
    components: {
      Group,
      Cell,
      'i-header': Iheader
    },
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
