<template>
 <div>
     <div class="item-content-wrap">
    <div class="title-wrap">
     <img :src="this.itemAuthorAvatar" alt="">
     <h1>{{this.itemTitle}}</h1>
     <span class="item-tag tag">{{this.itemTag}}</span>  •  <span class="item-author">{{this.itemAuthor}}</span>  •  <span>创建于：{{this.itemCreatedAt | formatDate }}</span>   •  <span>回复数：{{this.itemReplies}}</span>
    </div>
    <div v-html="getItemContent" class="item-content">
    </div>
  </div>
  <ul class="reply-wrap">
    <li v-for='(item, index) in itemReplyList' class="item-reply">
      <div class="content-wrap">
          <img :src="item.member.avatar_normal" alt="" class="reply-avatar"> 
          <span class="floor">{{ index + 1}}</span>
          <div class="reply-content">
            <p class="reply-tip"><span class="reply-username">{{ item.member.username }}</span><span class="reply-time">{{item.last_modified | formatDate }}</span></p>
            <div  v-html='item.content_rendered'>
          
             </div>  
          </div>
        
      
      </div>

    </li>
  </ul>
 
 
 </div>
 
</template>
<script>

//   import axios from 'axios'
  import {formatDate} from '../filters'
  import axios from 'axios'

  export default {
    name: 'item-view',
    data () {
      return {
        msg: 'this is item view content',
        itemData: '',
        itemId: '',
        itemContent: '',
        itemTitle: '',
        itemAuthor: '',
        itemAuthorAvatar: '',
        itemCreatedAt: '',
        itemReplies: '',
        itemTag: '',
        itemReplyList: ''
      }
    },
    filters: {
      formatDate
    },
    computed: {
      getItemContent () {
        for (let i = 0; i < this.itemData.length; i++) {
          if (this.itemData[i].id === +this.itemId) {
            this.itemContent = this.itemData[i].content_rendered
            this.itemTitle = this.itemData[i].title
            this.itemAuthor = this.itemData[i].member.username
            this.itemCreatedAt = this.itemData[i].created
            this.itemReplies = this.itemData[i].replies
            this.itemTag = this.itemData[i].node.title
            this.itemAuthorAvatar = this.itemData[i].member.avatar_large
            return this.itemContent
          }
        }
      }
    },
    mounted () {
      this.itemData = this.$store.state.hotData
      this.itemId = this.$route.params.id
      const self = this
      axios.get('/api/replies/show.json?topic_id=' + self.itemId)
        .then(function (response) {
          console.log(response.data)
          self.itemReplyList = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    methods: {
    }
  }
</script>

<style lang="scss">

  .item-content-wrap {
    background-color: #fff;
    border-radius: 5px;
    padding: 10px;
    h1 {
      margin-top: 0;
      font-size: 24px;
      color: #333;
    }
    span {
      font-size: 14px;
    }
   
  }

  .title-wrap {
    color: #999;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 18px;
    img {
      float: right;
    }
    &:hover {
      cursor: pointer;
    }
  }

  .item-author {
    &:hover {
      text-decoration: underline;
    }
  }

 
  .item-content {
    font-size: 14px;
    padding-top: 16px;
    p {
      margin-top: 0;
    }
  }

  .item-reply {
    padding: 10px 0;

    width: 100%;
    border-bottom: 2px solid #e2e2e2;
    border-radius: 5px 5px 0 0 ;
    img {
      float: left;
      padding-top: 4px;
    }
  }

  .reply-wrap {
    background-color: #fff;
  }
  
  .reply-content {
    font-size: 14px;
    line-height: 21px;
    padding-left: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    a {
      color: #778087;
      text-decoration: none;
      &:hover {
      text-decoration: underline;
      }
    }
  }

  .content-wrap {
    padding: 10px;
  }
  
  .reply-tip { 
    margin: 0;
  }

  .reply-username {
    color: #808080;
  }

  .reply-time {
    font-size: 12px;
    color: #ccc;
    margin-left: 10px;
  }

  .floor {
    float: right;
    font-size: 9px;
    line-height: 9px;
    font-weight: 500;
    border-radius: 10px;
    background-color: #f0f0f0;
    color: #ccc;
    padding: 2px 5px 2px 5px;
    
  }
</style>

