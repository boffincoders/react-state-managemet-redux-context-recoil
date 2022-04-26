import { configureStore } from '@reduxjs/toolkit'
import toDoReducer from '../reduxState/todoSlice';

export default configureStore({
  reducer: {
    todo : toDoReducer
  }
})