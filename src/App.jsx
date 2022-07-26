import './App.css'
import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , add} from './redux/CountSlice'

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) =>  state.counter.value)
  const inp=useRef()
  const show=()=>{
    console.log(count)
  }
  return (
    <div >
      <h1>Hi redux</h1>
      <p>{count}</p>
      <br></br>
      <button onClick={() => dispatch(increment())}>incresment</button>
      <button  onClick={() => dispatch(decrement())}>decresment</button>
      <br></br>
      <input type={'number'} placeholder={'give me a number'} ref={inp}></input>
      <button onClick={()=>dispatch(add(inp.current.value))}>Add</button>
      <br></br>
      <button  onClick={() => show()}>show</button>

    </div>
  )
}

export default App
