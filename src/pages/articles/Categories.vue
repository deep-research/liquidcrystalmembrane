<template>
  <Layout>
    <p><a href="/articles">Articles</a> / Categories</p>
    <h2>Categories</h2>

    <div class="mt-2">
      <g-link to="/articles/tags">Search by Tag</g-link>
    </div>

    <b-form-radio-group
      v-model="selected"
      :options="options"
      class="mt-4"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
      stacked
    ></b-form-radio-group>

    <div v-if="$page.categories.edges.length == 1">
      <p class="mt-4 mb-0">1 category found.</p>
    </div>
    <div v-else>
      <p class="mt-4 mb-0">{{$page.categories.edges.length}} categories found.</p>
    </div>

    <div
      v-for="item in lists"
      :key="item.node.id"
    >

    <div class="media mt-5">
      <div class="media-body">
        <g-link :to="item.node.path">
          <h4 class="my-0">{{item.node.title}} ({{item.node.belongsTo.totalCount}})</h4>
        </g-link>
      </div>
    </div>

    </div>

    <b-pagination
      v-if="$page.categories.edges.length > perPage"
      :total-rows="totalRows" 
      v-model="currentPage"
      :per-page="perPage"
      class="mb-0 mt-5"
    />
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
  },
  data() {
    return {
      currentPage: 1,
      perPage: 2,
      selected: 'A',
      options: [
        { item: 'A', name: 'Sort By Count' },
        { item: 'B', name: 'Sort Alphabetically' },
      ]
    }
  },
  computed: {
    lists() {
      const items = this.$page.categories.edges

      // < ? 1 : -1 > to reverse
      if (this.selected == "A") {
        items.sort((a, b) => (a.node.belongsTo.totalCount > b.node.belongsTo.totalCount) ? -1 : 0)
      } else if (this.selected == "B") {
        items.sort((a, b) => (a.node.title > b.node.title) ? 1 : -1)
      }

      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    totalRows() {
      return this.$page.categories.edges.length
    }
  }
}
</script>
