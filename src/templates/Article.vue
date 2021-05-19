<template>
  <Layout>
    <!-- <g-image immediate class="blogImage mb-4" :src="$page.post.image" /> -->
    <article class="blogPost">
      
      <!-- Breadcrumbs -->
      <!-- <p><g-link to="/articles">Articles</g-link> / {{slug()}}</p> -->
      <b-breadcrumb :items="breadcrumbs()"></b-breadcrumb>

      <h1 v-html="$page.post.title" class="my-4" />
      <div class="mb-2">
        <span style="font-size: 20.5px">By {{$page.post.author}} - {{$page.post.date | luxon}}</span>
      </div>

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
      <VueRemarkContent class="article-text mt-5" />

      <div class="mt-5">
        <ClientOnly>
          <facebook class="mr-3 social-btn" :url="url()" scale="3"></facebook>
          <twitter class="mr-3 social-btn" :url="url()" :title="$page.post.title" scale="3"></twitter>
          <email class="social-btn" :url="url()" :subject="$page.post.title" scale="3"></email>
        </ClientOnly>
      </div>

      <Disqus shortname="liquid-crystal-membrane" :identifier="$page.post.title" class="mt-5" />
    </article>
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
  components: {
    Facebook: () =>
      import ('vue-socialmedia-share')
      .then(m => m.Facebook)
      .catch(),
    Twitter: () =>
      import ('vue-socialmedia-share')
      .then(m => m.Twitter)
      .catch(),
    Email: () =>
      import ('vue-socialmedia-share')
      .then(m => m.Email)
      .catch(),
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },

  methods: {
    slug() {
      let slug = this.$page.post.path.slice(10, -1).split("-").join(" ").replace(/\w\S*/g,
        function (txt) {
          return txt.charAt(0).toUpperCase() +
          txt.substr(1).toLowerCase()
        }).split(" ").join("-")
      return slug
    },
    url() {
      return 'https://liquidcrystalmembrane.com' + this.$page.post.path
    },
    breadcrumbs() {
      let array = [
        {
          text: 'Articles',
          to: '/articles'
        },
        {
          text: this.slug(),
          active: true
        }
      ]
      return array
    }
    // getTags () {
    //   let tags = []
    //   this.$page.post.tags.forEach(tag => {
    //     tags.push(tag.title)
    //   })
        
    //   return(tags)
    // }
  }
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

.social-btn:hover {
  opacity: .7;
}

.social-btn {
  cursor: pointer;
}
</style>
