<template>
  <div class="full_screen">
    <i-header :title="title"></i-header>
    <div class="content_scroll">
      <group :title="'no placeholder, the current value is : ' + defaultValue">
        <selector ref="defaultValueRef" title="省份" :options="list" v-model="defaultValue"></selector>
      </group>

      <div style="padding:15px;">
        <x-button type="primary" @click.native="getValue('defaultValueRef')">get full value</x-button>
      </div>

      <group title="with placeholder">
        <selector placeholder="请选择省份" v-model="demo01" title="省份" name="district" :options="list" @on-change="onChange"></selector>
      </group>

      <group title="without title">
        <selector placeholder="请选择省份" v-model="demo02" :options="list"></selector>
      </group>

      <group title="set value=广西">
        <selector v-model="value1" title="省份" :options="plainList" @on-change="onChange"></selector>
      </group>

      <group title="readonly, displays just like a cell">
        <selector value="gd" readonly title="省份" :options="list"></selector>
      </group>

      <group title="use plain options">
        <selector ref="plainValueRef" value="C" title="Selector" :options="list1" @on-change="onChange"></selector>
      </group>

      <div style="padding:15px;">
        <x-button type="primary" @click.native="getValue('plainValueRef')">get full value</x-button>
      </div>

      <group :title="'boolean selector: ' + value3">
        <selector v-model="value3" title="Vux Is Cool" :options="list2"></selector>
      </group>

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
        <cell title="VUX" value="testDrawer" is-link link="/testDrawer"></cell>
      </group>
      <div style="padding:15px;">
        <x-button type="primary" @click.native="getValue('valueMapRef')">get full value</x-button>
      </div>
      <multiSelect url='/users' name="name" value="id" size='5' :search='true'>
        <group>
          <cell value="下拉1"></cell>
        </group>
      </multiSelect>
      <multiSelect url='/users' name="name" value="id" size='2'>
        <group>
          <cell value="下拉2"></cell>
        </group>
      </multiSelect>
    </div>

  </div>
</template>

<script>
  import { Selector, Group, Cell, CellBox, XButton } from 'vux'
  import Iheader from '../components/header'
  import multiSelect from '../components/multiSelect'
  export default {
    components: {
      Group,
      Selector,
      Cell,
      CellBox,
      XButton,
      multiSelect,
      'i-header': Iheader
    },
    data () {
      return {
        true: true,
        title: 'selectTestVux',
        demo01: null,
        demo02: '',
        defaultValue: 'gd',
        plainList: ['广东', '广西'],
        list: [{key: 'gd', value: '广东'}, {key: 'gx', value: '广西'}],
        list2: [{key: true, value: '是'}, {key: false, value: '否'}],
        value1: '广西',
        value3: true,
        list1: ['A', 'B', 'C'],
        valueMapValue: 'key01',
        valueMapList: [{
          idValue: 'key01',
          idLabel: 'value01',
          otherProp: 'prop01'
        }, {
          idValue: 'key02',
          idLabel: 'value02',
          otherProp: 'prop02'
        }]
      }
    },
    methods: {
      onChange (val) {
        console.log(val)
      },
      getValue (ref) {
        this.$vux.alert.show({
          title: 'getFullValue',
          content: this.$refs[ref].getFullValue()
        })
      }
    }
  }
</script>
