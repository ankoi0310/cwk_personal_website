import React, { FC } from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'
import { Link } from 'react-router-dom'

interface ServicesProps {}

const services = [
  {
    name: 'Front-end Development',
    description: 'I build websites using React, Next.js, and Tailwind CSS.',
    link: '',
  },
  {
    name: 'Mobile Development',
    description:
      'I build mobile apps using Flutter, Spring Boot, and Firebase.',
    link: '',
  },
  {
    name: 'Full-stack Development',
    description:
      'I build full-stack applications using the MERN, and MEAN stacks.',
    link: '',
  },
]

const Services: FC<ServicesProps> = () => (
  <section className={'section'} id={'services'}>
    <div className="container mx-auto">
      <div className={'flex flex-col lg:flex-row lg:gap-x-16'}>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className={
            'flex-1 bg-opacity-90 lg:bg-bottom bg-no-repeat mb-12 lg:mb-0'
          }>
          <h2 className={'text-accent leading-none'}>What I Do.</h2>
          <h4 className={'leading-tight pb-4'}>
            I'm a Freelance Full-stack Developer with over 2 years of
            experience.
          </h4>
          <Link to={'service'} className={'btn btn-sm'}>
            See my work
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 0.5)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className={'flex-1'}>
          <div>
            {services.map((service, index) => {
              const { name, description, link } = service

              return (
                <div
                  className={'border-b-4 border-black/20 mb-[25px] pb-8 flex'}
                  key={index}>
                  <div className={'max-w-[440px]'}>
                    <h4
                      className={
                        'text-[24px] tracking-wider font-semibold mb-2'
                      }>
                      {name}
                    </h4>
                    <p className={'text-[18px] leading-tight'}>{description}</p>
                  </div>
                  <div className={'flex flex-col flex-1 items-end'}>
                    <Link
                      to={'https://www.github.com/ankoi0310'}
                      target={'_blank'}
                      className={
                        'btn w-9 h-9 mb-12 flex justify-center items-center'
                      }>
                      <BsArrowUpRight />
                    </Link>
                    <Link to={link} className={'text-gradient text-sm'}>
                      Learn more
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default Services
