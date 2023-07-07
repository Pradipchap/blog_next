"use client"
import { Button, Input } from '@mui/material'
import React, { useState } from 'react'

export default function Form({createBlog}) {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const sendData=(e)=>{
        e.preventDefault()
        // console.log({title,desc})
createBlog({title,desc})

    }

  return (
    <form className='flex flex-col gap-2' onSubmit={sendData}>

            <label htmlFor="">Title</label>
            <Input value={title} onChange={(e)=>settitle(e.target.value)}/>
            <label htmlFor="">Description</label>
            <Input rows={5} value={desc} onChange={(e)=>setdesc(e.target.value)}/>
            <Button onClick={sendData}>Submit</Button>

    </form>
  )
}
