<template>
  <div id="app">
    <vue-headful title="Mon site perso"
    description="Site personnel de Yanick Kichenassamy"
    />
    <HeaderVue></HeaderVue>
    <Carousel></Carousel>
    <cards></cards>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderVue from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Carousel from './components/Carousel'
import Cards from './components/Cards'
export default {
  name: 'App',
  components: {
    HeaderVue,
    Carousel,
    Cards,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /* text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
