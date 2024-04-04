import { configureStore } from '@reduxjs/toolkit'
import recordReducer from "../Slice/recordsdata"

export default configureStore({
  reducer: {
    record: recordReducer,
  },
})