import React, { useState } from 'react'
import { useEffect } from 'react'

function PropesPR(props) {
  return (
    <div className='mt-4 p-3 border border-indigo-500 rounded-md bg-slate-800 text-white'>
      <h3 className='text-lg font-semibold'>Props Practice Component (PropesPR)</h3>
      <p>Received Name prop: <span className='font-bold text-yellow-300'>{props.Name}</span></p>
    </div>
  )
}

function Counter() {
    const [count, setcount]=useState(0)
    const handleclick = () =>{
        if(count>0)
            setcount(count-1)
        else
            alert('count is already 0')
    }
    const [name, setname] = useState('Atharv')
  return (
    <div className='p-4 border rounded-md max-w-md mx-auto my-4 bg-slate-900 text-white shadow-md'>
        <p className='text-xl font-bold mb-2'>Counter : {count}</p>
        <button onClick={()=>setcount(count+1)} className='bg-blue-500 text-white p-2 rounded-md m-2'>Increment</button>
        <button onClick={handleclick} className='bg-red-500 text-white p-2 rounded-md m-2'>Decrement</button>
        <button onClick={()=>setcount(0)} className='bg-green-500 text-white p-2 rounded-md m-2'>Reset</button>
        <PropesPR Name = {name}/>
    </div>
  )
}

export default Counter