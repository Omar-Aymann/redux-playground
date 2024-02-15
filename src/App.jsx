import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './theSlice'
import { change } from './nameSlice'
function App() {
  const count = useSelector(state => state.counter.value);
  const changer = useSelector(state => state.changer.value);
  const dispatch = useDispatch();
  const name = "Omar";
  return (
    <>
        <h1>{count}</h1>
        <h1>{changer}</h1>
        <input type="text" onChange={(e) => dispatch(change(e.target.value))} />
        <button onClick={() => dispatch(increment())}>increase</button>
    </>
  )
}

export default App
