import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'
import Img1 from '../../assets/images/portfolio-img1.png'
import Img2 from '../../assets/images/portfolio-img2.png'
import Img3 from '../../assets/images/portfolio-img3.png'

interface WorkProps {}

const Work: FC<WorkProps> = () => (
  <section className={'section'} id={'work'}>
    <div className="container mx-auto">
      <div className={'flex flex-col lg:flex-row gap-x-10'}>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className={'flex-1 flex flex-col justify-between gap-y-10'}>
          <div className={''}>
            <h2 className={'h2 leading-none text-accent uppercase'}>
              My Latest <br />
              Projects.
            </h2>
            <p className={'max-w-lg leading-tight mb-12'}>
              Let's take a look at some of my recent projects. I'm always
              learning new skills and trying to improve my existing ones.
            </p>
            <button className={'btn btn-sm'}>View all projects</button>
          </div>
          <div
            className={
              'group relative overflow-hidden border-2 border-black/50 rounded-xl'
            }>
            <div
              className={
                'group-hover:bg-black/70 w-full h-full absolute z-40' +
                ' transition-all duration-300'
              }></div>
            <img
              className={'group-hover:scale-125 transition-all duration-500'}
              src={Img1}
              alt=""
            />
            <div
              className={
                'absolute -bottom-full left-12 group-hover:bottom-24' +
                ' transition-all duration-500 z-50'
              }>
              <span className={'text-gradient'}>UI/UX Design</span>
            </div>
            <div
              className={
                'absolute -bottom-full left-12 group-hover:bottom-14' +
                ' transition-all duration-700 z-50'
              }>
              <span className={'text-3xl text-white'}>Project Title</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className={'flex-1 flex flex-col justify-between gap-y-10'}>
          <div
            className={
              'group relative overflow-hidden border-2 border-black/50' +
              ' rounded-xl'
            }>
            <div
              className={
                'group-hover:bg-black/70 w-full h-full absolute z-40' +
                ' transition-all duration-300'
              }></div>
            <img
              className={'group-hover:scale-125 transition-all duration-500'}
              src={Img2}
              alt=""
            />
            <div
              className={
                'absolute -bottom-full left-12 group-hover:bottom-24' +
                ' transition-all duration-500 z-50'
              }>
              <span className={'text-gradient'}>UI/UX Design</span>
            </div>
            <div
              className={
                'absolute -bottom-full left-12 group-hover:bottom-14' +
                ' transition-all duration-700 z-50'
              }>
              <span className={'text-3xl text-white'}>Project Title</span>
            </div>
          </div>
          <div
            className={
              'group relative overflow-hidden border-2 border-black/50' +
              ' rounded-xl'
            }>
            <div
              className={
                'group-hover:bg-black/70 w-full h-full absolute z-40' +
                ' transition-all duration-300'
              }></div>
            <img
              className={'group-hover:scale-125 transition-all duration-500'}
              src={Img3}
              alt=""
            />
            <div
              className={
                'absolute -bottom-full left-12 group-hover:bottom-24' +
                ' transition-all duration-500 z-50'
              }>
              <span className={'text-gradient'}>UI/UX Design</span>
            </div>
            <div
              className={
                'absolute -bottom-full left-12 group-hover:bottom-14' +
                ' transition-all duration-700 z-50'
              }>
              <span className={'text-3xl text-white'}>Project Title</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default Work
