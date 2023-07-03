import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/variants'
import classNames from 'classnames/bind'
import styles from '../../pages/Home/Home.module.css'

const cx = classNames.bind(styles)

interface ContactProps {}

const Contact: FC<ContactProps> = () => (
  <section className={'py-16 lg:section'} id={'contact'}>
    <div className="container mx-auto">
      <div className={'flex flex-col lg:flex-row'}>
        <motion.div
          variants={fadeIn('right', 0.3)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className={'flex-1 flex justify-start items-center'}>
          <div>
            <h4
              className={'uppercase text-accent mb-2 font-bold tracking-wider'}>
              Get in touch
            </h4>
            <h1 className={'font-semibold'}>
              Let's work <br /> together!
            </h1>
          </div>
        </motion.div>
        <motion.form
          variants={fadeIn('left', 0.3)}
          initial={'hidden'}
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
          className={
            'flex-1 border-4 rounded-2xl flex flex-col gap-y-6 p-6 items-start bg-[var(--container-color)]'
          }>
          <input
            className={cx('form-control')}
            type="text"
            placeholder={'Your name'}
          />
          <input
            className={cx('form-control')}
            type="text"
            placeholder={'Your email'}
          />
          <textarea
            className={cx('form-control', 'py-12 resize-none mb-12')}
            placeholder={'Your message'}></textarea>
          <button className={'btn btn-md'}>Send message</button>
        </motion.form>
      </div>
    </div>
  </section>
)

export default Contact
