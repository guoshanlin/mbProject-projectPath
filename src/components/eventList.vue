<template>
  <div class="event_list">
    <div v-for="item in rows" @click="clickDetails(item)" class="event_item">
      <flexbox>
        <!--<flexbox-item>-->
          <!--<div class="flex-demo">{{item.id}}</div>-->
        <!--</flexbox-item>-->
        <flexbox-item :span="8">
          <div class="flex-demo">标题：{{item.title}}</div>
        </flexbox-item>
        <flexbox-item :span="4">
          <div class="flex-demo t-center" style="color: #ee4043">状态</div>
        </flexbox-item>
      </flexbox>
      <br>
      <flexbox>
        <flexbox-item :span="6">
          <div class="flex-demo">内容：{{item.name}}</div>
        </flexbox-item>
        <flexbox-item :span="6">
          <div class="flex-demo">{{item.time}}</div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import {Flexbox, FlexboxItem} from 'vux'

  export default {
    components: {
      Flexbox,
      FlexboxItem
    },
    props: {
      rows: {
        type: Array,
        default: []
      }
    },
    methods: {
      clickDetails (item) {
        alert(JSON.stringify(item))
        this.$emit('on-click', item)
      }
    },
    watch: {
      rows: function (value) {
        console.log(value)
      }
    }
  }
</script>

<style scoped>
   .event_item{
     background-color: #ffffff;
     margin-bottom: 15px;
   }

</style>
