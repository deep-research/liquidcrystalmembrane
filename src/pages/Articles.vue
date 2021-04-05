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
          <p class="text-dark mb-2" style="font-weight: 500">By {{item.node.author}} - {{item.node.date | luxon}}</p>
          <p class="text-dark">{{item.node.excerpt}}</p>
        </div>
      </div>
    </div>

    <Pager :info="$page.posts.pageInfo"
       class="pager-container"
       linkClass="pager-container__link"  />
  </Layout>
</template>

<page-query>
query ($page: Int) {
	posts: allArticle(sortBy: "date", perPage: 3, page: $page) @paginate {
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
  opacity: .9;

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

// .pager-container__link:hover {
//   opacity: .6
// }
</style>
