<template>
  <Layout>
    <h2 class="my-4 mb-5">Articles</h2>

    <div
      v-for="item in $page.posts.edges"
      :key="item.node.id"
      class="blog-post"
    >

    <div class="media my-5">
      <!-- <g-image immediate :src="item.node.image" class="mr-3" alt="image" /> -->
      <div class="media-body">
        <g-link :to="item.node.path">
          <h4 class="mt-0">{{item.node.title}}</h4>
        </g-link>
        <h6 class="text-dark">By {{item.node.author}} - {{new Date(item.node.date).toLocaleDateString()}}</h6>
        <p class="text-dark">{{item.node.excerpt}}</p>
      </div>
    </div>

    </div>
  </Layout>
</template>

<page-query>
query Articles {
	posts: allArticle(sortBy: "date") {
    edges {
      node {
        id
        path
        title
        excerpt
        image
        author
        date
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Articles'
  }
}
</script>

<style lang="scss" scoped>
.media {
  img {
    width: 120px;
    height: 120px;
  }
}

.media-body {
  margin: auto;
}
</style>