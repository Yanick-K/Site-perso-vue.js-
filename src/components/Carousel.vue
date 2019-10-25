<template>
  <!--
  <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      img-width="auto"
      img-height="900"
    >
    <b-carousel-slide
      img-src='../static/carousel1.jpg'
      >
      <div class="inline-b">
        <h1>Développement web</h1>
      </div>
    </b-carousel-slide>
      <b-carousel-slide
        img-src='../static/carousel2.jpg'
      >
        <h1>Développement Mobile</h1>
      </b-carousel-slide>
      <b-carousel-slide
        img-src='../static/carousel3.jpg'
      >
        <h1>Développement Logiciel</h1>
      </b-carousel-slide>
    </b-carousel>
  </div> !-->
  <video autoplay loop muted>
      <source src="../assets/video.mp4">
    <track kind="caption">
    </video>
</template>

<script>
export default{
  name: 'Carousel',
  data: function () {
    return {
      src: 'https://mdbootstrap.com/img/video/forest.mp4',
      type: 'video.mp4'
    }
  }
}
</script>

<style scoped>

  .inline-b{
    background-color: rgba(0, 0, 0, 0.3);
    height:50px;
  }
  video{
    width: 100%;
  }
</style>
