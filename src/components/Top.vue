<template>
  <div>
    <ul>
      <li v-for='item in hot' class="item"> 
        <div class="">
          <img :src="item.member.avatar_normal" alt="">
          <div class="content">
           <router-link :to="{name: 'show', params: {id: item.id}}" class='title'>{{item.title}}</router-link> 
           <span class="tag">{{item.node.title}}</span>  •  <span class="user">发布者：{{item.member.username}}</span>  •   <span class="time-ago">最后回复：{{ item.last_touched | formatDate }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

  import axios from 'axios'
  import {formatDate} from '../filters'

  export default {
    name: 'top',
    data () {
      return {
        msg: 'this is hotest content',
        hot: ''
      }
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
.item {
  display: block;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  line-height: 1.5em;
  border-radius: 5px;
  img {
    float: left;
    cursor: pointer;
  }
  p {
    margin: 0;
  }
}

.content {
  color: #ccc;
  padding-left: 60px;
  span {
    font-size: 12px;
    line-height: 1.5em;
    cursor: pointer;
  }
}

.title {
  display: block;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  color: #4d5256;
  &:hover {
    text-decoration: underline;
  }
  
}

.tag {
  background-color: #f5f5f5;
  font-size: 12px;
  border-radius: 2px;
  color: #999;
  padding: 4px;
  &:hover {
    background-color: #e2e2e2;
    color: #777;
  }
}



</style>

