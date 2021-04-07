<template>
  <Layout>
    <h2 class="my-4">Articles</h2>

    <b-input-group size="md" style="max-width: 400px">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="search" name="search" id="search" placeholder="Search" v-model="search"></b-form-input>
    </b-input-group>

    <div v-if="searchResults.length > 0">
      <p class="mt-4 mb-0">{{searchResults.length}} articles found.</p>
      <article v-for="item in searchResults" :key="item.node.id">
      <div class="media my-5">
        <!-- <g-image immediate :src="item.node.image" class="mr-3" alt="image" /> -->
        <div class="media-body">
          <g-link :to="item.node.path">
            <h4 class="mt-0">{{item.node.title}}</h4>
          </g-link>
          <p class="text-dark mb-2" style="font-weight: 500">By {{item.node.author}} - {{item.node.date | luxon}}</p>
          <p class="text-dark">{{item.node.excerpt}}</p>
        </div>
      </div>
        </article>
    </div>

    <div class="my-4" v-else>
        <p>Your search didn't return any results. Please try again.</p>
    </div>
  </Layout>
</template>

<page-query>
query {
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
        content
      }
    }
    pageInfo {
      perPage
      currentPage
      totalPages
      totalItems
      hasPreviousPage
      hasNextPage
      isFirst
      isLast
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
      search: ''
    }
  },
  computed: {
    searchResults() {
      return this.$page.posts.edges.filter(post => {
          return post.node.title.toLowerCase().includes(this.search.toLowerCase().trim())
      })
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
