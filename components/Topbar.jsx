import Link from 'next/link'
import React from 'react'

const Topbar = () => {
  return (
    <div className='flex justify-between px-4 bg-blue-600 py-2 mb-5 text-white'>
        <Link href="/">
        Take a look at our github
        </Link>
        <Link href="/signin">
        Login
        </Link>



    </div>
  )
}

export default Topbar