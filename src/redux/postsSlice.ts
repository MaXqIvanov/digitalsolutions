import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    postsHidden: [] as any[],
    posts: [] as any[],
    limitPosts: 3 as number
  },
  reducers: {
    getPosts(state:any, action:any) {
        state.postHidden = action.payload;
        state.posts = action.payload.slice(0,3)
        state.limitPosts = action.payload.length - 3
    },
   
  },
});

export default postsSlice.reducer;
export const { getPosts } = postsSlice.actions;