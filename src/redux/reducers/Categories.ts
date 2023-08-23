import {createSlice} from '@reduxjs/toolkit';
import {categories} from '../../datas/categoryList';

const initialState = {
  categories: categories,
  selectedCategoryId: 1,
};

const Categories = createSlice({
  name: 'categories',
  initialState: initialState,
  reducers: {
    resetCategories: () => {
      return initialState;
    },
    updateSelectedCategoryId: (state, actions) => {
      state.selectedCategoryId = actions.payload;
    },
  },
});

export const {resetCategories, updateSelectedCategoryId} = Categories.actions;

export default Categories.reducer;
