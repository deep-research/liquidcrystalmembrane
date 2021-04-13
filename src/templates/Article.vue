<template>
  <Layout>
    <!-- <g-image immediate class="blogImage mb-4" :src="$page.post.image" /> -->
    <div class="blogPost">
      
      <!-- Breadcrumbs -->
      <p><a href="/articles">Articles</a> / 
        {{$page.post.path.slice(10, -1).split("-").join(" ").replace(/\w\S*/g,
        function(txt) {return txt.charAt(0).toUpperCase() +
        txt.substr(1).toLowerCase()}).split(" ").join("-")}}</p>

      <h2 v-html="$page.post.title" />
      <p class="mb-0" style="font-size: 20px">By {{$page.post.author}} - {{$page.post.date | luxon}}</p>
      <p v-if="$page.post.category" class="mb-0 mt-1">
        <span style="font-weight: 500">
          <g-link to="/articles/categories" v-b-tooltip.hover title="Search By Category">Category</g-link>:
        </span> <g-link :to="$page.post.category.path">{{$page.post.category.title}}</g-link>
      </p>
      <p v-if="$page.post.tags.length > 0" class="mb-0 mt-1">
        <span style="font-weight: 500">
          <g-link to="/articles/tags" v-b-tooltip.hover title="Search By Tag">Tags</g-link>:
        </span>
        <span v-for="(tag, index) in $page.post.tags" :key="index">
          <g-link :to="tag.path">{{tag.title}}</g-link>
          <span v-if="index+1 < $page.post.tags.length">, </span>
        </span>
      </p>
      <!-- <div><b>Time:</b> {{ $page.post.timeToRead }} min read</div> -->
      <!-- <BlogContent class="mt-5" :content="$page.post.content"/> -->
      <VueRemarkContent class="mt-5" />
    </div>
  </Layout>
</template>

<page-query>
# query Article ($id: ID!) {
#   post: article (id: $id) {
query Article ($path: String!) {
  post: article (path: $path) {
    title
    author
    date
    # timeToRead
    content
    image
    path
    category {
      title
      path
    }
    tags {
      title
      path
    }
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
  }
  // methods: {
  //   getTags () {
  //     let tags = []
  //     this.$page.post.tags.forEach(tag => {
  //       tags.push(tag.title)
  //     })
        
  //     return(tags)
  //   }
  // }
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
