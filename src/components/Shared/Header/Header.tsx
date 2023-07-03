import React, { FC } from 'react'
import BlackLogo from '../../../assets/images/black_logo.png'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import classNames from 'classnames/bind'
import { BiLinkExternal } from 'react-icons/bi'

const cx = classNames.bind(styles)

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={'py-4'}>
    <div className="container mx-auto">
      <div className={'flex justify-between items-center'}>
        <a href="/">
          <img src={BlackLogo} alt="" height={96} width={96} />
        </a>
        <div className={cx('menu')}>
          <ul className={cx('menu__list')}>
            <li className={cx('menu__item', 'active')}>
              <Link to={'/home'}>Home</Link>
            </li>
            <li className={cx('menu__item')}>
              <Link to={'/about'}>About</Link>
            </li>
            <li className={cx('menu__item')}>
              <Link to={'/services'}>Service</Link>
            </li>
            <li className={cx('menu__item')}>
              <Link to={'/blog'}>Blog</Link>
            </li>
          </ul>
        </div>
        <button type="button" className={cx('btn btn-sm uppercase')}>
          <Link
            to={'https://portfolio.huynhvanhuuan.id.vn'}
            target={'_blank'}
            className={cx('text__icon')}>
            My Portfolio <BiLinkExternal />
          </Link>
        </button>
      </div>
    </div>
  </div>
)

export default Header
