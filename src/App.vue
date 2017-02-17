<template>
  <div id="app">

    <header class="header">
      <nav class="nav">
        <router-link to='/' class='nav-link nav-img'><img src="./assets/logo@2x.png" alt="" class=""></router-link>
        <router-link to='/top' class='nav-link'>最热</router-link>
        <router-link to='/new' class='nav-link'>最新</router-link>
        <a href='https://github.com/vuejs/vue-hackernews-2.0' class='nav-link github' target='_blank'>Built with Vue.js</a>
      </nav>
    </header>

    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

  </div>
</template>

<script>

import Top from 'components/Top'
import New from 'components/New'

export default {
  name: 'app',
  components: {
    Top,
    New
  }
}
</script>

<style lang="scss">

html {
  
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", "Microsoft Yahei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  background-color: #f2f3f5;
  padding: 80px 0;
}



h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
}



.nav-link {
  color: hsla(0,0%,100%,.8);
  text-decoration: none;
  line-height: 55px;
  font-weight: 300;
  margin-right: 1.8em;
  &:hover {
    color: #fff;
  }
}

.router-link-active{
  color: #fff;
  font-weight: 400;
}

.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 55px;
  background-color: #f60;
}

.nav {
  max-width: 800px;
  margin: 0 auto;
}

.github {
  float: right;
  margin-right: 0;
}

.nav-img {
  line-height: 0;
  vertical-align: middle;
  display: inline-block;
  height: 24px;
  img {
    height: 100%;
  }
  
}

.view {
  max-width: 800px;
  margin: 0 auto;
}
</style>
