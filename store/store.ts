import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export interface IRootState {
  posta: IPostState;
}

const store = new Vuex.Store<IRootState>({
  // modules: {
    // postModule: postModule
  // }
});

export default store;
import { IPostState } from './post';
