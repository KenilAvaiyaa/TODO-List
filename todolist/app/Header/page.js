"use client"
import React, { useState } from 'react'

const Header = () => {
  useState
  const [ task, setTask ] = useState("")
  const [ dec, setDec ] = useState("")
  const [maintask,setMain] = useState([])


  const SubmitHandle = (e)=>{
    e.preventDefault()
    setMain([...maintask, {task , dec}])
    console.log(maintask)
    setTask("")
    setDec("")
  }

  const delet = (i)=>{
    // console.log(i)
    let copytask = [...maintask]
    copytask.splice(i,1)
    setMain([copytask])

  }

  let rander = <h2>No task is available</h2>
  if(maintask.length>0){
    rander = maintask.map((el,i)=>{
      return <li key={i} className=' flex justify-between items-center mt-1 bg-slate-400 rounded p-2'>
        <div className=' flex justify-between items-center w-1/2'>
          <h4 className='text-2xl font-medium'>{el.task}</h4>
          <h6 className='text-base'> {el.dec}</h6>
        </div>
        <button onClick={()=>{
          delet(i)
        }} className='text-xl bg-red-600 rounded-md p-1'>remove</button>
      </li>
    })
  }
  return (
    <>
      <h1 className=' text-white text-4xl text-center p-2 font-bold'> Make your TOdo list</h1>
      <form className='flex gap-2' onSubmit={SubmitHandle}>
        <input type="text" 
        className=' text-2xl border-zinc-800 rounded-md border-2 m-5 p-2 bg-transparent ' 
        placeholder='task title'
        value={task}
        onChange={(e)=>{
          setTask(e.target.value)
        }}>

        </input>
        <input type="text" className=' text-2xl border-zinc-800 w-full rounded-md border-2 m-5 p-2 bg-transparent ' placeholder='add information'
        value={dec}
        onChange={(e)=>{
          setDec(e.target.value)
        }}
        ></input>
        <button  className='text-xl bg-slate-100 rounded-md m-5 p-2 '>Add</button>
      </form>
      <hr />
      <div className=' p-4  bg-slate-50 w-3/5'>
        <ul>{rander}</ul>
      </div>
    </>
  )
}

export default Header
