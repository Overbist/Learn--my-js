import { useDispatch, useSelector } from "react-redux"

import { dec, inc, rnd } from "@components/Counter/CounterSlice"

export function Counter() {
  const counterNum = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const clickRandom = () => {
    const value = Math.floor(Math.random() * 10)
    dispatch(rnd(value))
  }

  return (
    <>
      <h1>{counterNum}</h1>
      <button
        className="btn"
        onClick={() => {
          dispatch(inc())
        }}
      >
        +1
      </button>
      <button
        className="btn"
        onClick={() => {
          dispatch(dec())
        }}
      >
        -1
      </button>
      <button className="btn" onClick={() => clickRandom()}>
        RND
      </button>
    </>
  )
}
