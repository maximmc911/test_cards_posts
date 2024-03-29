import { createSlice } from "@reduxjs/toolkit";
const initialState: Array<storeObject | getPost> = [];
export const getPosts = createSlice({
  name: `getPosts`,
  initialState,
  reducers: {
    handleGetPosts: (state: any, { payload: CatalogPosts }): void => {
      const isExist = state.length;
      if (isExist == 0) {
        state.push({
          pagination: [],
          pages: [],
          loader: false,
        });
        for (let index = 0; index < CatalogPosts.length / 11; index++) {
          if (index == 0) {
            state[0].pages.push({
              number: index + 1,
              active: true,
            });
          } else {
            state[0].pages.push({
              number: index + 1,
              active: false,
            });
          }
        }
        state.push(...CatalogPosts);
        for (let index = 0; index < 11; index++) {
          state[0].pagination?.push(CatalogPosts[index]);
        }
      }
    },
    handleCheckPagination: (state: any, { payload: e }): void => {
      state[0].loader = true;
      for (let index = 0; index < state[0].pages.length; index++) {
        if (state[0].pages[index].number == e.number) {
          state[0].pages[index].active = true;
          console.log(e.number);
          state[0].pagination.length = 0;
          console.log(e.number);

          for (let index = 11 * e.number - 11; index < 11 * e.number; index++) {
            if (state[index + 1] !== undefined) {
              state[0].pagination?.push(state[index + 1]);
            }
          }
        } else {
          state[0].pages[index].active = false;
        }
      }
      state[0].loader = false;
    },
  },
});

export const { actions, reducer } = getPosts;
