import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { BiHomeAlt, BiUser } from 'react-icons/bi'
import { BsBriefcase, BsChatSquareText, BsClipboardData } from 'react-icons/bs'
import styles from '../../../pages/Home/Home.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface SideBarProps {}

const SideBar: FC<SideBarProps> = () => {
  const [bottom, setBottom] = useState(false)

  useEffect(() => {
    const handleBottom = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2
      setBottom(isBottom)
    }
    window.addEventListener('scroll', handleBottom)

    return () => window.removeEventListener('scroll', handleBottom)
  }, [bottom])

  return (
    <nav
      className={cx(
        'fixed right-14 -translate-y-2/4 z-20 hidden md:block transition-all duration-700',
        bottom ? 'top-1/3' : 'top-2/4',
      )}>
      <div
        className={
          'flex flex-col gap-4 p-2.5 bg-transparent border-2 border-black/20 shadow-lg backdrop-blur-2xl rounded-full'
        }>
        <Link
          to={'home'}
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          className={
            'cursor-pointer w-[50px] h-[50px] flex flex-col items-center justify-center'
          }>
          <BiHomeAlt />
        </Link>
        <Link
          to={'about'}
          activeClass="active"
          smooth={true}
          spy={true}
          className={
            'cursor-pointer w-[50px] h-[50px] flex flex-col items-center justify-center'
          }>
          <BiUser />
        </Link>
        <Link
          to={'services'}
          activeClass="active"
          smooth={true}
          spy={true}
          className={
            'cursor-pointer w-[50px] h-[50px] flex flex-col items-center justify-center'
          }>
          <BsClipboardData />
        </Link>
        <Link
          to={'work'}
          activeClass="active"
          smooth={true}
          spy={true}
          className={
            'cursor-pointer w-[50px] h-[50px] flex flex-col items-center justify-center'
          }>
          <BsBriefcase />
        </Link>
        <Link
          to={'contact'}
          activeClass="active"
          smooth={true}
          spy={true}
          className={
            'cursor-pointer w-[50px] h-[50px] flex flex-col items-center justify-center'
          }>
          <BsChatSquareText />
        </Link>
      </div>
    </nav>
  )
}

export default SideBar
