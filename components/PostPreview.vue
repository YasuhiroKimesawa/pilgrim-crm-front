<template>
  <div>
    <!-- <h2>{{ post.title.value }}</h2> -->
    <!-- <p>{{ post.description }}</p> -->
    <p>{{ this.$store.state }}</p>
    <p>{{ this.$store.state.post.post.id }}</p>
    <!-- <p>{{ this.$store.state.post.description }}</p> -->
  </div>
</template>

<script lang="ts">
// import { Component, Vue, Prop } from 'vue-property-decorator'
import { Component, Vue } from 'vue-property-decorator'
// import Post from '~/models/post/Post'
// import store from '~/store/store'
// import post from '~/store/post'

@Component
export default class PostPreview extends Vue {
  // @Prop({ type: Object, required: true }) post
}
</script>
