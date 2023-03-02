import React from 'react'

const Container = ({children}) => {
  return (
    <main className='max-w-2xl mx-auto'>
      <section className='my-8'>{children}</section>
    </main>
  )
}

export default Container
