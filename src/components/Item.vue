<template>
     <li  class="item"> 

        <div class="">
          <img :src="item.member.avatar_normal" alt="">
          <span class="reply-count">{{item.replies}}</span>
          <div class="content">
           <router-link :to="'/show/' + item.id " class='title'>{{item.title}}</router-link> 
           <span class="tag">{{item.node.title}}</span>  •  <span class="user">发布者：{{item.member.username}}</span>  •   <span class="time-ago">最后回复：{{ item.last_touched | formatDate }}</span>
          </div>
        </div>
     
      </li>
</template>

<script>

import {formatDate} from '../filters'

export default {
  name: 'item',
  data () {
    return {
      msg: 'This is the single item'
    }
  },
  filters: {
    formatDate
  },
  props: ['item']
}
</script>

<style lang="scss">
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

.reply-count {
  float: right;
  line-height: 12px;
  color: #fff;
  background-color: #aab0c6;
  padding: 2px 10px 2px 10px;
  -moz-border-radius: 12px;
  -webkit-border-radius: 12px;
  border-radius: 12px;
  text-decoration: none;
  margin-right: 5px;
  font-size: 12px;
}

</style>
