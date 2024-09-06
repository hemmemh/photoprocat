import Layout from "../app/Layout"
import { MainHome } from "../components/home/MainHome"
import { useRef } from 'react'
import { useAppSelector } from "../hooks/reduxHooks"

 const Home = () => {

  return (
    <Layout >
      <MainHome />
    </Layout>
  )
}

 
export default Home