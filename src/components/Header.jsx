import React from 'react'

const header = () => {
  return (
    <header className='h-96 bg-cover bg-center flex items-center justify-center text-emerald-300'
    style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8hXWJ-Hzt5Xe2CVJ1o5CPZLEa3qFh66V8AA&s')"
    }}>
        <h1 className='text-4xl font-bold bg-black/50 rounded-lg backdrop-blur-sm p-4'>Welcome to my Website</h1>
    </header>
  )
}

export default header