import React from 'react'
import user from '../images/user.jpg'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='page home'>
      <div className='home__left'>
        <img src={user} alt="user" className='home__image' />
      </div>
      <div className='home__right'>
        <p className='home__position'>Full-Stack Developer</p>
        <TypeAnimation 
          sequence={[
            "Welcome !!!",1000,
            "Sanjar Fayzullaev",2000
          ]}
          speed={1}
          repeat={Infinity}
          className='home__fullname'
        />
        <p className='home__text'>Web developer, with extensive knowledge and years of experience, working in web programming.
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
        </p>
        <div className='home__btn'>
          <Link to={"/portfolio"} className='home__btn-portfolio'>Portfolio</Link>
          <Link to={"/contact"} className='home__btn-contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Home