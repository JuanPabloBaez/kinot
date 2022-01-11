import { configureStore } from '@reduxjs/toolkit'
import LangSlice from './langReducer.js'


export default configureStore({
  reducer: {lang: LangSlice},
})