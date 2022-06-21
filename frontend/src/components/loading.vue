<script>

</script>

<template>
  <body class="loading-content">
    <img src="/gif/loading/loading.gif" alt="loadingGif">
  </body>
</template>

<style>
body, html {
  width: 100%;
  height: 100%;
}
.loading-content {
  position:fixed;
  top:-50%;
  left:-50%;
  width:200%;
  height:200%;
  background: white;
}
.loading-content img {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  margin:auto;
  min-width:0%;
  min-height:0%;
}
</style>
