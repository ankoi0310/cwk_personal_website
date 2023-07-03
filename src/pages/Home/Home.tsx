import React, { FC } from 'react'
import About from '../../components/Home/About'
import Banner from '../../components/Home/Banner'
import Services from '../../components/Home/Services'
import Work from '../../components/Home/Work'
import Contact from '../../components/Home/Contact'
import SideBar from '../../components/Shared/SideBar/SideBar'

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <>
    <Banner />
    <About />
    <Services />
    <Work />
    <Contact />
    <SideBar />
  </>
)

export default Home
