<template>

  <div>
    <ul>
     
      <item v-for = 'item in hot'  :item='item'></item>

    </ul>
  </div>

</template>

<script>

  import axios from 'axios'
  import {formatDate} from '../filters'
  import item from '../components/Item'
  import store from '../store'

  export default {
    name: 'top',
    data () {
      return {
        msg: 'this is hotest content',
        hot: ''
      }
    },
    components: {
      item
    },
    filters: {
      formatDate
    },
    mounted () {
      const self = this
      axios.get('/api/topics/hot.json')
        .then(function (response) {
          console.log(response.data)
          self.hot = response.data
          store.commit('saveHotData', response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>



</style>

