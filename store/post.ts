import Vuex from 'vuex'
//import { Mutation, MutationAction, Action, VuexModule, getModule, Module } from "vuex-module-decorators"
import { VuexModule, Module, getter } from "vuex-class-component"
//import store from "~/store/store"
import Post from "~/models/post/Post"
import Title from "~/models/post/Title"

export interface IPostState {
  post: Post;
  someField: string;
}

//@Module({ dynamic: true, store, name: "posta", namespaced: true })
@Module({ namespacedPath: 'post', target: 'nuxt' })
class PostState extends VuexModule implements IPostState {
  @getter
  post: Post = new Post(1, new Title('aaaa'), 'bbbb')

  @getter
  someField: string = 'somedata'

}
//export const postModule = getModule(PostState);
export default PostState.ExtractVuexModule(PostState)
