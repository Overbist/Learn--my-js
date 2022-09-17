import { configureStore } from "@reduxjs/toolkit"

import counterSlice from "@components/Counter/CounterSlice"

// const stringMiddleware = () => (next) => (action) => {
//   if (typeof action === "string") {
//     return next({
//       type: action,
//     })
//   }
//   return next(action)
// }

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    // add next reducer here
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(stringMiddleware),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production",
})
