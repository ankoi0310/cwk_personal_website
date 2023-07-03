import React, { FC } from 'react'
import Image from '../../assets/images/avatar.jpg'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'
import { TypeAnimation } from 'react-type-animation'
import { FaFacebookF, FaGithub, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import classNames from 'classnames/bind'
import styles from '../../pages/Home/Home.module.css'

const cx = classNames.bind(styles)

interface BannerProps {}

const Banner: FC<BannerProps> = () => (
  <section className={cx('section__banner')} id={'home'}>
    <div className="container mx-auto">
      <div
        className={
          'flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'
        }>
        <div className={'flex flex-col flex-1 text-center lg:text-left'}>
          <motion.h1
            variants={fadeIn('up', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className={'uppercase'}>
            <span>AN HUYNH VAN HUU</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className={'h2 uppercase'}>
            <span className={'mr-4'}>I am a</span>
            <TypeAnimation
              sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Freelancer',
                2000,
                'Youtuber',
                2000,
              ]}
              speed={50}
              className={'text-accent'}
              wrapper={'span'}
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.4)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className={
              'lg:text-[16px] mb-6 max-w-xl mx-auto lg:mx-0 leading-tight'
            }>
            I am a freelance web developer and designer based in Vietnam. I have
            been working in this field for 2 years.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className={
              'flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
            }>
            <ScrollLink
              to={'contact'}
              activeClass="active"
              smooth={true}
              spy={true}
              className={'btn btn-lg cursor-pointer'}>
              Contact me
            </ScrollLink>
            <Link
              to={'https://portfolio.huynhvanhuuan.id.vn'}
              target={'_blank'}
              className={'text-gradient btn-link'}>
              My Portfolio
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className={'flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'}>
            <a href="https://www.youtube.com/c/@ankoi0310">
              <FaYoutube />
            </a>
            <a href="https://www.github.com/ankoi0310">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/KOI0310.IT">
              <FaFacebookF />
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('down', 0.4)}
          initial={'hidden'}
          whileInView={'show'}
          className={'hidden lg:flex flex-1 max-w-[400px] lg:max-w-[400px]'}>
          <img
            src={Image}
            alt=""
            className={'rounded-[80px_180px_80px_150px] shadow-gray-50'}
          />
        </motion.div>
      </div>
    </div>
  </section>
)

export default Banner
