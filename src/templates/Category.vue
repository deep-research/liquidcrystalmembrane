<template>
  <Layout>
    <!-- <g-image immediate class="blogImage mb-4" :src="$page.article.image" /> -->
    <div>
      
      <!-- Breadcrumbs -->
      <p><a href="/articles/">Articles</a> / 
        <a href="/articles/categories">Categories</a> / 
        {{$page.category.title}}</p>

      <h2 class="mb-4">{{$page.category.title}}</h2>

      <div v-for="article in $page.category.belongsTo.edges" :key="article.node.id" >
        <h4 style="margin-top:36px"><g-link :to="article.node.path">{{ article.node.title }}</g-link></h4>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Category ($id: ID!) {
  category (id: $id) {
    title
    path
    belongsTo {
      edges {
        node {
          ...on Article {
            id
            title
            path
            excerpt
            author
            date
            content
            image
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
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.category.title,
    }
  }
}
</script>
