import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersHidden: [] as any[],
    users: [] as any[],
    loadData: false,
    limit: 10 as number,
    user: {} as any,
  },
  reducers: {
    getUsers(state: any, action: any) {
      state.usersHidden = action.payload;
      state.users = action.payload.slice(0, 4);
      state.limit = action.payload.length - 4;
      state.loadData = true;
    },
    changeVision(state: any, action: any) {
      state.users = state.usersHidden.slice(action.payload, action.payload + 4);
    },
    setUser(state: any, action: any) {
      state.user = action.payload;
    },
    setUserReload(state: any, action: any) {
      if (state.loadData === true) {
        state.user = state.usersHidden.filter((elem: any) => elem.id === Number(action.payload))[0];
      }
    },
  },
});

export default usersSlice.reducer;
export const { getUsers, changeVision, setUser, setUserReload } = usersSlice.actions;
