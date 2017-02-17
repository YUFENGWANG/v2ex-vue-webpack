<template>
  <div>
    <ul>
      {{msg}}
    </ul>
  </div>

  
</template>

<script>

//   import axios from 'axios'
  import {formatDate} from '../filters'

  export default {
    name: 'item-view',
    data () {
      return {
        msg: 'this is item view content'
      }
    },
    filters: {
      formatDate
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>


</style>

