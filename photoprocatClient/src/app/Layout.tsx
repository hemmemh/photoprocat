import React, {useEffect,FC}  from 'react'
import { Footer } from '../components/footer/Footer'
import Navbar from '../components/navBar/Navbar'

interface Layout{
  children?:React.ReactNode
 }

const Layout:FC<Layout>= ({children}) => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  
  return (
    <>
    <Navbar/>
     {children}
    <Footer/>
    </>
  )
}

export default Layout