import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersHidden: [] as any[],
    users: [] as any[],
    limit: 10 as number,
  },
  reducers: {
    getUsers(state:any, action:any) {
      state.usersHidden = action.payload;
      state.users = action.payload.slice(0,4)
      state.limit = action.payload.length - 4
    },
    changeVision(state:any, action:any){
      state.users = state.usersHidden.slice(action.payload, (action.payload + 4))
    }

  },
});

export default usersSlice.reducer;
export const { getUsers, changeVision } = usersSlice.actions;