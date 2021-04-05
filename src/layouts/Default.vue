<template>
  <div class="layout">
    <div id="content-wrapper">
      <Header/>
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'

export default {
  components: {
    Footer,
    Header,
  },
}
</script>


<style lang="scss">
body, html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif !important;
  margin:0;
  padding:0;
  line-height: 1.5;
}

h2 {
  font-size: 28px !important;
}

p {
  font-size: 17px;
}

@media (hover: hover) and (pointer: fine) {
  a {
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition:.5s;
  }
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#content-wrapper {
  flex: 1 0 auto;
  max-width: 950px;
  width: 90vw;
  margin: 0 auto;
}

::selection {
  background: #a8d1ff; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #a8d1ff; /* Gecko Browsers */
}
</style>
