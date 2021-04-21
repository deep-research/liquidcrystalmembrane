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

    <h2 class="mt-5 text-center">Sodium Lauryl Sulfate</h2>
    <b-img class="mx-auto d-block my-3" fluid src="/sodium-lauryl-sulfate.png"></b-img>
    <div class="embed-responsive embed-responsive-16by9">
      <embed
        class="embed-responsive-item"
        src="https://embed.molview.org/v1/?mode=balls&cid=3423265"
        frameborder="0"
        allowfullscreen>
        <p>Your browser does not support iframes.</p>
      >
    </div>

    <h2 class="mt-5 text-center">Crystal Violet</h2>
    <b-img class="mx-auto d-block my-3" fluid src="/crystal-violet-chloride.png"></b-img>
    <div class="embed-responsive embed-responsive-16by9">
      <embed
        class="embed-responsive-item"
        src="https://embed.molview.org/v1/?mode=balls&cid=11057"
        frameborder="0"
        allowfullscreen>
        <p>Your browser does not support iframes.</p>
      >
    </div>

    <!-- <iframe
      :src="`https://pubchem.ncbi.nlm.nih.gov/compound/Sodium-dodecyl-sulfate#section=3D-Conformer&fullscreen=true`"
      width="100%"
      height="762px"
      frameborder="0"
      class="mt-5">
      <p>Your browser does not support iframes.</p>
    </iframe> -->
    
    <!-- <iframe
      :src="`https://pubchem.ncbi.nlm.nih.gov/compound/Leucocrystal-Violet#section=3D-Conformer&fullscreen=true`"
      width="100%"
      height="694px"
      frameborder="0" >
      <p>Your browser does not support iframes.</p>
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

<style scoped>
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