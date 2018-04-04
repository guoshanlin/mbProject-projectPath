<template>
  <div class="full_screen">
    <i-header :title="msg"></i-header>
    <div class="content_scroll">
      <div class="vux-demo">
        <img class="logo" src="../assets/vux_logo.png">
        <h1 style="text-align: center"> {{msg}}</h1>
      </div>
      <group title="cell demo">
        <cell title="VUX" value="HelloWorld" is-link link="/HelloWorld"></cell>
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
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
