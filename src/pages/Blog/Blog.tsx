import React, { FC } from 'react'
import img1 from '../../assets/images/portfolio-img1.png'

interface BlogProps {}

const Blog: FC<BlogProps> = () => {
  return (
    <div className="container mx-auto my-10">
      <h1 className={'text-4xl font-bold text-center mb-8'}>My Blog</h1>
      <div className={'grid grid-cols-3 gap-8'}>
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className={
              'bg-white p-4 rounded-lg shadow-lg text-black text-left gap-x-8'
            }>
            <div className={'mb-4'}>
              <img src={img1} alt="1" />
            </div>
            <div>
              <h4 className={'h4'}>Title</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam ipsam, voluptatum, voluptates, quod quas doloribus
                voluptate doloremque quae quibusdam natus fugit. Quisquam ipsam,
                voluptatum, voluptates, quod quas doloribus voluptate doloremque
                quae quibusdam natus fugit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
