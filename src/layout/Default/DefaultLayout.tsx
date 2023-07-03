import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './DefaultLayout.module.css'
import classNames from 'classnames/bind'
import Footer from '../../components/Shared/Footer/Footer'
import Header from '../../components/Shared/Header/Header'

const cx = classNames.bind(styles)

interface DefautLayoutProps {}

const DefaultLayout: FC<DefautLayoutProps> = () => (
  <div className={cx('')}>
    <Header />
    <Outlet />
    <Footer />
  </div>
)

export default DefaultLayout
