<template>
  <div>
    <b-navbar class="h" toggleable="lg" type="light" fixed="top">
      <b-navbar-brand href="#"><img class="icon" src="static/icon.png"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto hl">
        <b-nav-item active href="#">Accueil</b-nav-item>
        <b-nav-item href="#">CV </b-nav-item>
          <!--
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Rechercher"></b-form-input>
            <b-button variant="dark" size="sm" class="my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></b-button>
          </b-nav-form>
          !-->
          <b-nav-item href="#">Blog</b-nav-item>
        <!-- Right aligned nav items -->
          <b-nav-item @mouseover="hover = true" @mouseleave="hover= false" href="https://twitter.com/yanick_kichen">
            <i class="fab fa-twitter fa-lg" :class="{active:hover}" ></i>

          </b-nav-item>
          <b-nav-item  @mouseover="hover2 = true" @mouseleave="hover2= false" href="https://www.linkedin.com/in/yanick42/">
            <i class="fab fa-linkedin fa-lg" :class="{active2:hover2}" ></i>
            <!-- Using 'button-content' slot
            <template slot="button-content"><em>Utilisateur</em></template>
           <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>!-->
          </b-nav-item>
          <b-nav-item href="https://github.com/Yanick-K">
              <i class="fab fa-github fa-lg"></i>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HeaderVue',
  data () {
    return {
      hover: false,
      hover2: false
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Manjari&display=swap');
.active {
  color:dodgerblue;
}
.active2 {
    color:darkblue;
}
/*
.transparent {
  border-width: 0px;
  -webkit-box-shadow: 0px 0px;
  box-shadow: 0px 0px;
  background-color: rgba(0,0,0,0.0);
  background-image: -webkit-gradient(linear, 50.00% 0.00%, 50.00% 100.00%, color-stop( 0% , rgba(0,0,0,0.00)),color-stop( 100% , rgba(0,0,0,0.00)));
  background-image: -webkit-linear-gradient(270deg,rgba(0,0,0,0.00) 0%,rgba(0,0,0,0.00) 100%);
  background-image: linear-gradient(180deg,rgba(0,0,0,0.00) 0%,rgba(0,0,0,0.00) 100%);
  }*/
body {
    background-color: #d5d6d2;
  }
.icon {
    width:240px;
    height:80px;
  }
.h{
  height:80px;
  background-color: white;
  font-family: 'Manjari', sans-serif;
}
.hl {
margin-right: 100px;
}
</style>
