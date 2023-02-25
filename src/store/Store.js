import { configureStore } from "@reduxjs/toolkit";
import movieSlice from './Reducer'

export default configureStore({ // Store setting
     reducer: {
          movies: movieSlice
     }
})