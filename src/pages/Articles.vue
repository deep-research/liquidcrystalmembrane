<template>
  <Layout>
    <h2 class="my-4">Articles</h2>

    <div style="max-width: 400px">
      <b-input-group size="md">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" name="search" id="search" placeholder="Search" v-model="search"></b-form-input>
      </b-input-group>
      <v-select :options="getTaxonomyArray($page.categories.edges)" class="mt-2"></v-select>
      <v-select :options="getTaxonomyArray($page.tags.edges)" class="mt-2"></v-select>
    </div>

    <!-- <button type="button" v-on:click="resetData" class="text-left px-4 py-2 text-sm font-semibold w-full md:w-auto rounded-sm hover:bg-gray-300 focus:bg-gray-200 bg-gray-200 block md:inline mt-4 md:mt-0">Refresh</button> -->
    <b-button variant="primary" class="mt-2">Clear</b-button>

    <div class="mt-2">
      <g-link to="/articles/categories">Search by Category</g-link> -
      <g-link to="/articles/tags">Search by Tag</g-link>
    </div>

    <div v-if="searchResults.length > 0">
      <div v-if="searchResults.length == 1">
        <p class="mt-4 mb-0">1 article found.</p>
      </div>
      <div v-else>
        <p class="mt-4 mb-0">{{searchResults.length}} articles found.</p>
      </div>
      <article v-for="item in lists" :key="item.node.id">
        <div class="media my-5">
          <!-- <g-image immediate :src="item.node.image" class="mr-3" alt="image" /> -->
          <div class="media-body">
            <g-link :to="item.node.path">
              <h4 class="mt-0">{{item.node.title}}</h4>
            </g-link>
            <p  class="mb-2" style="font-size: 20px">By {{item.node.author}} - {{item.node.date | luxon}}</p>
            <p class="mb-0">{{item.node.excerpt}}</p>
            <p v-if="item.node.category" class="mb-0 mt-1">
              <span style="font-weight: 500">
                  <g-link to="/articles/categories" v-b-tooltip.hover title="Search By Category">Category</g-link>:
              </span>
              <g-link :to="item.node.category.path">{{item.node.category.title}}</g-link>
            </p>
            <p v-if="item.node.tags.length > 0" class="mb-0 mt-1">
              <span style="font-weight: 500">
                <g-link to="/articles/tags" v-b-tooltip.hover title="Search By Tag">Tags</g-link>:
              </span>
              <span v-for="(tag, index) in item.node.tags" :key="index">
                <g-link :to="tag.path">{{tag.title}}</g-link>
                <span v-if="index+1 < item.node.tags.length">, </span>
              </span>
            </p>
          </div>
        </div>
      </article>
      <b-pagination
        v-if="searchResults.length > perPage"
        :total-rows="totalRows" 
        v-model="currentPage"
        :per-page="perPage"
        class="mb-0"
      />
    </div>

    <div class="my-4" v-else>
        <p>Your search didn't return any results. Please try again.</p>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allArticle(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        path
        title
        excerpt
        image
        author
        date
        content
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
	categories: allCategory {
    edges {
      node {
        id
        path
        title
      }
    }
  }
	tags: allTag {
    edges {
      node {
        id
        path
        title
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome';

export default {
  metaInfo: {
    title: 'Articles'
  },
  components: {
    Pager
  },
  data() {
    return {
      search: '',
      currentPage: 1,
      perPage: 3
    }
  },
  methods: {
    getTagsLowercaseArray(data) {
      let tags = []
      data.forEach(tag => {
        tags.push(tag.title.toLowerCase())
      })
      return(tags)
    },
    getTaxonomyArray(data) {
      let array = []
      data.forEach(element => {
        array.push(element.node.title)
      })
      return(array)
    }
  },
  computed: {
    searchResults() {
      return this.$page.posts.edges.filter(post => {
          let search = this.search.toLowerCase().trim()

          if (post.node.title.toLowerCase().includes(search)) {
            return post.node.title.toLowerCase().includes(search)
          } else if (post.node.excerpt.toLowerCase().includes(search)) {
            return post.node.excerpt.toLowerCase().includes(search)
          } else if (post.node.author.toLowerCase().includes(search)) {
            return post.node.author.toLowerCase().includes(search)
          } else if (post.node.content.toLowerCase().includes(search)) {
            return post.node.content.toLowerCase().includes(search)
          } else if (post.node.category.title.toLowerCase().includes(search)) {
            return post.node.category.title.toLowerCase().includes(search)
          } else if (this.getTagsLowercaseArray(post.node.tags).find(element => element.includes(search))) {
            return this.getTagsLowercaseArray(post.node.tags).find(element => element.includes(search))
          } else if (this.$luxon(post.node.date).toLowerCase().includes(search)) {
            return (this.$luxon(post.node.date)).toLowerCase().includes(search)
          }
      })
    },
    lists() {
      const items = this.searchResults

      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    totalRows() {
      return this.searchResults.length
    }
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

.pager-container {
  display: inline-block;
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  color: black;

  &__link {
    text-align: center;
    padding: 0.6rem 1.2rem;
    color: white;
    text-decoration: none;
  }
}

.pager-container .active {
  background-color:  #224C98;
}

.pager-container :not(.active) {
  background-color: rgb(134, 136, 158);  
}

.pager-container__link {
  margin-right: 4px;
}

@media (hover: hover) and (pointer: fine) {
  .pager-container__link {
    transition: all 0.3s ease 0s;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    opacity: 1;
  }

  .pager-container__link:hover{
    opacity: 0.75;
  }
}
</style>
