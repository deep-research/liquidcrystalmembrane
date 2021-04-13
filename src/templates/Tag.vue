<template>
  <Layout>
    <!-- <g-image immediate class="blogImage mb-4" :src="$page.article.image" /> -->
    <div>
      
      <!-- Breadcrumbs -->
      <p><a href="/articles">Articles</a> / 
        <a href="/articles/tags">Tags</a> / 
        {{$page.tag.title}}</p>

      <h2 class="mb-4">{{$page.tag.title}}</h2>

      <div v-for="article in $page.tag.belongsTo.edges" :key="article.node.id" >
        <h4 style="margin-top:36px"><g-link :to="article.node.path">{{ article.node.title }}</g-link></h4>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tags ($id: ID!) {
  tag (id: $id) {
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
      title: this.$page.tag.title,
    }
  }
}
</script>
