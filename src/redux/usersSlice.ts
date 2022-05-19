import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as any[],
  },
  reducers: {
    changeStateProods(state:any, action:any) {
      state.users = action.payload;
    },

  },
});

export default usersSlice.reducer;
export const { changeStateProods } = usersSlice.actions;