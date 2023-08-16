import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
news:[],
loading: false,
error: false,
}

export const getNews = createAsyncThunk(
  
  "getNews", //action type oluşturduk
 // async callback function 
 
async() =>{
  const API_KEY ="6402437a278c47c49ad3d8fd16e4cb9a"
  const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`

  try {
    const {data} = await axios(url)
    console.log(data);
    return data
  } catch (error) {
    console.log(error);
  }
}

)

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews: (state) =>{
        state.news = []
    },
  },
  extraReducers: (builder) =>{
    builder.addCase(getNews.pending, (state) => {
      state.loading= true
    }).addCase(getNews.fulfilled, (state, action) => {
      state.news = action.payload
      state.loading = false
    }).addCase(getNews.rejected, (state, action) =>{
      state.loading = false
    })
  },
});

export const {clearNews} = newsSlice.actions

export default newsSlice.reducer