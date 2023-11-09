import React from 'react'
import { RiComputerLine } from 'react-icons/ri'
import { BiSolidBot, BiStore } from 'react-icons/bi'
import { TypeAnimation } from 'react-type-animation'

function Skills() {
  return (
    <div className='page'>
      <TypeAnimation
        sequence={[
          "Full-Stack Skills", 1000
        ]}
        speed={1}
        className='title'
      />
      <div className='skills__block'>
        <div className='skills__box'>
          <h3 className='box-title'>What i do? <span></span></h3>
          <p className='skills__box-text'>
            <RiComputerLine />
            <span>HTML, CSS, JavaScript</span>
          </p>
          <p className='skills__box-text'>
            <BiSolidBot />
            <span>Python, Django, Fastapi</span>
          </p>
          <p className='skills__box-text'>
            <BiStore />
            <span>Sass, React.js</span>
          </p>
        </div>
        <div className='skills__box'>
          <h3 className='box-title'>Coding Skills <span></span></h3>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>React</p>
              <span>90%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"100%"}}></span>
            </div>
          </div>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>Javascript</p>
              <span>95%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"95%"}}></span>
            </div>
          </div>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>Python</p>
              <span>80%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"80%"}}></span>
            </div>
          </div>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>Django</p>
              <span>85%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"85%"}}></span>
            </div>
          </div>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>Fastapi</p>
              <span>80%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"80%"}}></span>
            </div>
          </div>
          <div className='skills__code'>
            <div className='skills__code-title'>
              <p>Scss</p>
              <span>90%</span>
            </div>
            <div className='skills__code-progress'>
              <span style={{width:"90%"}}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills