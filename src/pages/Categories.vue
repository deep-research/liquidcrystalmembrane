<template>
  <Layout>
    <h2 class="my-4 mb-5">Categories</h2>

    <div
      v-for="item in $page.categories.edges"
      :key="item.node.id"
    >

    <div class="media my-5">
      <div class="media-body">
        <g-link :to="item.node.path">
          <h4 class="mt-0">{{item.node.title}} ({{item.node.belongsTo.totalCount}})</h4>
        </g-link>
      </div>
    </div>

    </div>

  </Layout>
</template>

<page-query>
query Categories {
	categories: allCategory {
    edges {
      node {
        id
        path
        title
        belongsTo {
          totalCount
          pageInfo {
            totalPages
            currentPage
          }
          edges {
            node {
              ...on Article {
                id
                title
                path
                excerpt
              }
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
  metaInfo: {
    title: 'Categories'
  }
}
</script>
