<template>
  <Layout>
    <p><a href="/articles">Articles</a> / Tags</p>
    <h2>Tags</h2>

    <b-form-radio-group
      v-model="selected"
      :options="options"
      class="mt-4"
      value-field="item"
      text-field="name"
      disabled-field="notEnabled"
      stacked
    ></b-form-radio-group>

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
      v-if="$page.tags.edges.length > perPage"
      :total-rows="totalRows" 
      v-model="currentPage"
      :per-page="perPage"
      class="mb-0 mt-5"
    />
  </Layout>
</template>

<page-query>
query Tags {
	tags: allTag (sortBy: "belongsTo", order: ASC) {
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
    title: 'Tags'
  },
  data() {
    return {
      currentPage: 1,
      perPage: 4,
      selected: 'A',
      options: [
        { item: 'A', name: 'Sort By Count' },
        { item: 'B', name: 'Sort Alphabetically' },
      ]
    }
  },
  computed: {
    lists() {
      const items = this.$page.tags.edges

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
      return this.$page.tags.edges.length
    }
  }
}
</script>
