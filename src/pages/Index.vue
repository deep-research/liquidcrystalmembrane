<template>
  <Layout>
    <div>
      <h1 class="mb-4">Home</h1>
      <b-card
        overlay
        img-src="/liquidcrystal-homepage.jpg"
        img-alt="Liquid Crystal Membrane"
        text-variant="white"
        sub-title=""
        style="max-width: 500px"
        class="mx-auto"
        id="title-card"
      >
        <b-card-text>
          <span class="text-center" id="subtitle">Scientific research on liquid crystal membranes and other related topics.</span>
        </b-card-text>
      </b-card>
    </div>
    <div style="text-align:center; font-size: 13.24px">Image courtesy of Oleg Lavrentovich, Liquid Crystal Institute, Kent State University.</div>

    <!-- <iframe
      :src="`https://pubchem.ncbi.nlm.nih.gov/compound/Sodium-dodecyl-sulfate#section=3D-Conformer&fullscreen=true`"
      width="100%"
      height="500px"
      frameborder="0" >
    </iframe> -->
    
    <!-- <iframe
      :src="`https://pubchem.ncbi.nlm.nih.gov/compound/Leucocrystal-Violet#section=3D-Conformer&fullscreen=true`"
      width="100%"
      height="500px"
      frameborder="0" >
    </iframe> -->

    <div class=".article-text">

    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
@media screen and (min-width: 420px) {
  #subtitle {
    font-size: 35px;
  }
}

@media screen and (max-width: 419px) {
  #subtitle {
    font-size: 25px;
  }
}

#title-card .card-body {
    display: flex
}

#title-card .card-text {
    display: flex;
    align-items: center;
}
</style>