<template>
  <div class="full_screen">
    <i-header :title="title"></i-header>
    <div class="content_scroll">
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
      <group title="cell demo">
        <cell title="VUX" value="testDrawer" is-link link="/testDrawer"></cell>
      </group>
      <group title="cell demo">
        <cell title="VUX" value="testTable" is-link link="/testTable"></cell>
      </group>
      <divider>{{name}}</divider>
    </div>
  </div>
</template>
<script>
  import { Divider, Group, Cell } from 'vux'
  import header from '../components/header'

  export default {
    components: {
      Divider,
      Group,
      Cell,
      'i-header': header
    },
    data () {
      return {
        name: '我是有底线的',
        title: 'newTestVux'
      }
    }
  }
</script>
