<template>
  <div>
    <span>sss</span>
    <!-- <PostPreview v-for="post in posts" :key="post.id" :post="post" /> -->
    <PostPreview />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Post from '~/models/post/Post'
import Title from '~/models/post/Title'

@Component({
  components: {
    PostPreview: () => import('~/components/PostPreview.vue')
  },
  asyncData() {
    const data = { post: { title: 'abc', description: 'ccc' } }
    return data
  }
})
export default class Index extends Vue {
  post: Post = new Post(2, new Title('aaaa'), 'bbbb')
  post2: Post = new Post(3, new Title('aaaa'), 'bbbb')
  posts: Post[] = [this.post, this.post2]
}
</script>
