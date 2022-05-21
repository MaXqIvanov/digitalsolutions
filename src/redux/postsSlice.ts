import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    postsHidden: [] as any[],
    posts: [] as any[],
    limitPosts: 3 as number,
    onePost: {} as any,
    comments: [] as any[],
  },
  reducers: {
    getPosts(state:any, action:any) {
        state.postHidden = action.payload
        state.posts = action.payload.slice(0,3)
        state.limitPosts = action.payload.length - 3
    },
    getOnePost(state:any, action:any) {
      state.onePost = action.payload
    },
    getComments(state:any, action:any){
      state.comments = action.payload
    }
   
  },
});

export default postsSlice.reducer;
export const { getPosts, getOnePost, getComments } = postsSlice.actions;