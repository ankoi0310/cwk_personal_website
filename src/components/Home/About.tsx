import React, { FC } from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'
import { Link } from 'react-router-dom'

interface AboutProps {}

const About: FC<AboutProps> = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  return (
    <section className={'section'} id={'about'}>
      <div className="container mx-auto">
        <div
          className={
            'flex flex-col justify-between gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'
          }>
          <motion.div
            variants={fadeIn('right', 0.2)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className={
              'flex-1 bg-about bg-auto bg-no-repeat h-[1100px] scale-[.6]'
            }></motion.div>
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className={'flex-1'}>
            <h2 className={'text-accent'}>About me.</h2>
            <h3 className={'mb-4'}>
              I'm a Freelance Front-end Developer with over 2 years of
              experience.
            </h3>
            <p className={'mb-6'}></p>
            <div className={'flex gap-x-6 lg:gap-x-10 mb-12'}>
              <div>
                <div
                  ref={ref}
                  className={'text-[40px] font-tertiary text-gradient mb-2'}>
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className={'font-primary text-sm tracking-[2px]'}>
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div
                  ref={ref}
                  className={'text-[40px] font-tertiary text-gradient mb-2'}>
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}+
                </div>
                <div className={'font-primary text-sm tracking-[2px]'}>
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div
                  ref={ref}
                  className={'text-[40px] font-tertiary text-gradient mb-2'}>
                  {inView ? <CountUp start={0} end={50} duration={3} /> : null}+
                </div>
                <div className={'font-primary text-sm tracking-[2px]'}>
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
            <div className={'flex gap-x-8 items-center'}>
              <button className={'btn btn-lg'}>Hire me</button>
              <Link
                to={'https://portfolio.huynhvanhuuan.id.vn'}
                target={'_blank'}
                className={'text-gradient btn-link'}>
                My Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
