import { configureStore } from '@reduxjs/toolkit'
import articleSlice from '../slice/articleSlice';

const reducer = {
  articles: articleSlice
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export  {store};