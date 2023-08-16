import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import articleService from '../../service/articleService';

const initialState:any = [];
const endpoint:string='article';
export const createArticle= createAsyncThunk(
  `${endpoint}/create`,
  async ( data:any ) => {
  
    const res = await articleService.create(data);
    return res.data;
  }
);

export const retrieveArticles = createAsyncThunk(
  `${endpoint}/retrieve`,
  async () => {
    const res = await articleService.getAll();
 
    return res.data;
  }
);

export const updateArticle = createAsyncThunk(
  `${endpoint}/update`,
  async ( data:any) => {
    const {id}=data;
    const res = await articleService.update(id,data);
    return res.data;
  }
);

export const deleteArticle = createAsyncThunk(
  `${endpoint}/delete`,
  async (id:any) => {
    await articleService.remove(id);
    return { id };
  }
);

export const deleteAllArticles = createAsyncThunk(
  `${endpoint}/deleteAll`,
  async () => {
    const res = await articleService.removeAll();
    return res.data;
  }
);

export const findArticlesByTitle = createAsyncThunk(
  `${endpoint}/findByTitle`,
  async ( title:string) => {
    const res = await articleService.findByTitle(title);
    return res.data;
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState,
  extraReducers(builder) {
    builder.addCase(retrieveArticles.fulfilled, (state, action) => {
      return [...action.payload];
    });

    builder.addCase(createArticle.pending, (state, action) => {
      
      state.push(action.payload);
    });

    builder.addCase(deleteAllArticles.fulfilled,(state,action)=>{
      
        return [];
      
    });

    builder.addCase(findArticlesByTitle.fulfilled,(state,action)=>{
      return [...action.payload];
    })

    builder.addCase(updateArticle.fulfilled,(state,action)=>{
      const index = state.findIndex((article:any) => article.id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    })

    builder.addCase(deleteArticle.fulfilled,(state, action) => {
      let index = state.findIndex((id:any ) => id === action.payload.id);
      state.splice(index, 1);
     } )},
  reducers: {}
});

const { reducer } = articleSlice;
export default reducer;