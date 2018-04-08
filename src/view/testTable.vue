<template>
  <div class="full_screen">
    <i-header :title="title"></i-header>
    <div style="height:calc(100% - 46px);overflow: auto;">
      <load-more tip="default" :show-loading="false" background-color="#fbf9fe"></load-more>
      <div style="padding:0 15px;">
        <x-table full-bordered>
          <thead>
          <tr>
            <th>状态</th>
            <th>标题</th>
            <th>内容</th>
            <th>时间</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in rows" @click="trClick(item)">
            <td>{{item.id}}</td>
            <td>{{item.title}}</td>
            <td>{{item.name}}</td>
            <td>{{item.time}}</td>
          </tr>
          </tbody>
        </x-table>
      </div>
      <load-more tip="default" :show-loading="false" background-color="#fbf9fe"></load-more>
      <div style="padding: 0 15px;">
        <div>
          <e-list :rows="rows"></e-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { XTable, LoadMore } from 'vux'
  import Elist from '../components/eventList'
  import header from '../components/header'

  export default {
    components: {
      XTable,
      LoadMore,
      'e-list': Elist,
      'i-header': header
    },
    data () {
      return {
        rows: [
          {id: '1', name: 'name1', title: 'title1', time: '2018-4-1 11:47'},
          {id: '2', name: 'name2', title: 'title2', time: '2018-4-1 11:49'},
          {id: '3', name: 'name3', title: 'title4', time: '2018-4-1 11:50'},
          {id: '4', name: 'name4', title: 'title4', time: '2018-4-1 11:51'},
          {id: '5', name: 'name5', title: 'title5', time: '2018-4-1 11:52'}
        ],
        title: 'testTable'
      }
    },
    methods: {
      trClick (item) {
        alert(JSON.stringify(item))
      }
    }
  }
</script>
