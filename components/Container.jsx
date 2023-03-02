import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <section>{children}</section>
      </main>
      <Footer />
    </>
  )
}

export default Container
