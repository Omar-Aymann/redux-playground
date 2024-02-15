import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './theSlice'
import nameChanger from './nameSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    changer: nameChanger
  },
})