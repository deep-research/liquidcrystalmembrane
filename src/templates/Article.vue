<template>
  <Layout>
    <!-- <g-image immediate class="blogImage mb-4" :src="$page.post.image" /> -->
    <div class="blogPost">
      
      <!-- Breadcrumbs -->
      <p><a href="/articles">Articles</a> / 
        {{$page.post.path.slice(10, -1).split("-").join(" ").replace(/\w\S*/g,
        function(txt) {return txt.charAt(0).toUpperCase() +
        txt.substr(1).toLowerCase()}).split(" ").join("-")}}</p>

      <h2 v-html="$page.post.title" class="mb-4"/>
      <div><b>Author:</b> {{$page.post.author}}</div>
      <div><b>Date:</b> {{$page.post.date | luxon}}</div>
      <!-- <div><b>Time:</b> {{ $page.post.timeToRead }} min read</div> -->
      <!-- <BlogContent class="mt-5" :content="$page.post.content"/> -->
      <VueRemarkContent class="mt-5" />
    </div>
  </Layout>
</template>

<page-query>
query Article ($path: String!) {
  post: article (path: $path) {
    title
    author
    date
    # timeToRead
    content
    image
    path
  }
}
</page-query>

<script>
// import BlogContent from '@/components/BlogContent'

export default {
  // components: {
  //   BlogContent,
  // },
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
}
</script>

<style lang="scss" scoped>
.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;
  
  .label {
    font-weight: bold;
  }
}

.blogImage {
  max-height: 400px;
  width: 100%;
}
</style>
