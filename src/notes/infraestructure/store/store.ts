import { configureStore } from '@reduxjs/toolkit'
import { notesAppSlice } from '../slices/notes'
//import counterReducer from '../features/counter/counterSlice'

export const store =  configureStore({
  reducer: {notesReducer: notesAppSlice.reducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch