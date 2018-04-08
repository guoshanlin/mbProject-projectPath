<template>
  <div>
     <div :id='id' class="multi_select_" @click="selectShow">
        <div> 下拉外框</div>
         <slot></slot>
     </div>
    <div v-transfer-dom>
      <popup v-model="dropDown" position="bottom" max-height="50%">
        <div class="select_keyWorld">
          <x-input type="text" :placeholder="placeholder" v-model="params.keyWord" @on-enter="onEnter"></x-input>
        </div>
        <div class="select_item">
          <checklist :options="rows" v-model="selectValue" :max=6 @on-change="change"></checklist>
        </div>
        <div style="padding: 15px;">
          <x-button @click.native="dropDown = false" plain type="primary"> Close Me </x-button>
        </div>
      </popup>
    </div>
     <!--<div v-show="dropDown" class="multi_select_drop-down">-->
        <!--<div class="select_keyWorld">-->
            <!--<x-input type="text" :placeholder="placeholder" v-model="params.keyWord" @on-enter="onEnter"></x-input>-->
        <!--</div>-->
        <!--<div class="select_item">-->
          <!--<checklist :options="rows" v-model="selectValue" :max=6 @on-change="change"></checklist>-->
          <!--<div v-for="item in rows">-->
               <!--<p>{{item.name}}</p>-->
            <!--</div>-->
        <!--</div>-->
     <!--</div>-->
  </div>
</template>

<script>
  import { XInput, Checklist, Actionsheet, TransferDom, Popup, XButton } from 'vux'
  export default {
    data () {
      return {
        rows: [
          {key: 'name1', value: 'value1'},
          {key: 'name2', value: 'value2'},
          {key: 'name3', value: 'value3'},
          {key: 'name4', value: 'value4'},
          {key: 'name5', value: 'value5'}
        ],
        selectValue: ['name1', 'name4'],
        params: {
          keyWord: '',
          offset: 0,
          limit: 20
        },
        dropDown: false
      }
    },
    components: {
      XInput,
      Checklist,
      Actionsheet,
      Popup,
      XButton
    },
    directives: {
      TransferDom
    },
    props: {
      id: {
        type: String,
        default: ''
      },
      url: {
        type: String,
        default: ''
      },
      data: {
        type: Object,
        default: null
      },
      field: {
        type: Array,
        default: null
      },
      placeholder: {
        type: String,
        default: '输入关键字查询'
      }

    },
    methods: {
      selectShow () {
        this.dropDown = true
      },
      onEnter () {
        alert('11111111')
      },
      change (val, label) {
        console.log('change', val, label)
      },
      clickActionSheet () {

      }
    }
  }
</script>

<style scoped>
  @import '../css/multiSelect.css';
</style>
