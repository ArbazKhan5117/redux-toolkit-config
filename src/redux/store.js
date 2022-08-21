import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/reducer'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})