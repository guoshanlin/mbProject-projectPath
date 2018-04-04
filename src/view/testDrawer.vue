<template>
  <div id="test_drawer" class="full_screen">
    <i-header :title="title"></i-header>
    <div class="content_scroll">
      <drawer :show="drawerShow"
              :pos="pos"
              :tran="tran"
              @change-show="changeDrawerShow"
              @on-hide="onHide"
              @on-show="onShow">
        <div class="layout" slot="drawer" >
          <h2><a href="#">菜单栏</a></h2>
          <group v-for="item in navItems" :key="item.path">
            <cell-box is-link :link="item.path">{{item.name}}</cell-box>
          </group>
        </div>
        <!--<button @click="directionFlip">左侧或右侧显示</button><br><br>-->
        <button @click="tranFlip">显示隐藏方式</button><br><br>
        <button @click="drawerToggle">同时移动隐藏出现</button>
      </drawer>
    </div>
  </div>
</template>

<script>
  import Drawer from '../components/drawer.vue'
  import header from '../components/header.vue'
  import {CellBox, Group} from 'vux'
  export default {
    data () {
      return {
        title: 'testDrawer',
        pos: 'left',
        tran: 'overlay',
        drawerShow: false,
        navItems: [
          {path: 'HelloWorld', name: 'HelloWorld'},
          {path: 'HelloFromVux', name: 'HelloFromVux'},
          {path: 'newTestVux', name: 'newTestVux'},
          {path: 'selectTestVux', name: 'selectTestVux'},
          {path: 'testDrawer', name: 'testDrawer'},
          {path: 'testTable', name: 'testTable'}
        ]
      }
    },
    methods: {
      directionFlip () {
        this.pos = this.pos === 'left' ? 'right' : 'left'
        setTimeout(() => {
          this.drawerToggle()
        }, 500)
      },
      tranFlip () {
        this.tran = this.tran === 'overlay' ? 'push' : 'overlay'
        setTimeout(() => {
          this.drawerToggle()
        }, 0)
      },
      drawerToggle () {
        this.drawerShow = !this.drawerShow
      },
      onHide () {
        console.log('hide')
      },
      changeDrawerShow (state) {
        this.drawerShow = state
        console.log('drawer was changed from components')
      },
      onShow () {
        console.log('show')
      }
    },
    components: {
      Drawer,
      Group,
      CellBox,
      'i-header': header
    }
  }
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  html {
    height: 100%;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  #test_drawer {
    color: #2c3e50;
    height: 100%;
    width: 100%;
    /*max-width: 600px;*/
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    /*background-color: #eee*/
  }
  #test_drawer a {
    color: #42b983;
    text-decoration: none;
  }
  .layout{
    width: 300px;
  }
  button, input[type="button"], a.button {
    color: #fff;
    background-color: #3779d0;
    border: 0;
    font-size: 14px;
    border-radius: 4px;
    padding: 0px 8px;
    height: 40px;
    min-width: 40px;
    line-height: 40px;
    overflow: hidden;
    display: inline-block;
    outline: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    -webkit-transition: all;
    -moz-transition: all;
    transition: all;
    -webkit-transition-timing-function: linear;
    -moz-transition-timing-function: linear;
    transition-timing-function: linear;
    -webkit-transition-duration: .2s;
    -moz-transition-duration: .2s;
    transition-duration: .2s;
  }
  button:active{
    color: #fff;
    background-color: #377000;
  }
  #test_drawer .weui-cells{
    margin-top: 0;
  }
  #test_drawer .weui-cells:before{
    display: none;
  }
</style>
