// TODO: File for education, delete after fix CounterSlice
// import { createReducer } from "@reduxjs/toolkit"

// import { dec, inc, rnd } from "../actions/actions"

// const initialState = { counter: 0 }

// export const counterReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(inc, (state) => {
//       state.counter = state.counter + 1
//     })
//     .addCase(dec, (state) => {
//       state.counter = state.counter - 1
//     })
//     .addCase(rnd, (state, action) => {
//       state.counter = action.payload
//     })
//     .addDefaultCase(() => {})
// })

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INC":
//       return {
//         ...state,
//         counter: state.counter + 1,
//       }
//     case "DEC":
//       return {
//         ...state,
//         counter: state.counter - 1,
//       }
//     case "RND":
//       return {
//         ...state,
//         counter: state.counter * action.payload,
//       }
//     default:
//       return state
//   }
// }
