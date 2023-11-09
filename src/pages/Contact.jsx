import {useState} from 'react'
import { TypeAnimation } from 'react-type-animation'
import { GiSmartphone } from 'react-icons/gi'
import { BiMap } from 'react-icons/bi'
import { MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Contact() {
  const [messages,setMessages] = useState({name:"",email:"",area:""})

  const handleChange = (e)=>{
    setMessages(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const onSubmit = (e)=>{
    e.preventDefault()
    setMessages({name:"",email:"",area:""})
  }
  return (
    <div className='page'>
      <TypeAnimation
        sequence={[
          "Contacts", 1000
        ]}
        speed={1}
        className='title'
      />
      <div className="contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11996.26416465754!2d69.20430054999999!3d41.26389795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a1b0c46af65%3A0x82d1d0a1630a1413!2zUFJPV0VCIC0g0YPRh9C10LHQvdGL0Lkg0YbQtdC90YLRgCDQsiDQotCw0YjQutC10L3RgtC1LiDQmtGD0YDRgdGLINCf0YDQvtCz0YDQsNC80LzQuNGA0L7QstCw0L3QuNGPLCDQnNCw0YDQutC10YLQuNC90LMg0LggU01NLCDQlNC40LfQsNC50L0g0LggM0Qt0LPRgNCw0YTQuNC60LAu!5e0!3m2!1suz!2s!4v1690633329167!5m2!1suz!2s" width="100%" height="150" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className="contact__box">
          <div className="contact__info">
            <Link to={"tel:+998991234567"} className="contact__link">
              <GiSmartphone />
              <span>+998 99 747 97 27</span>
            </Link>
            <Link to={"#!"} className="contact__link">
              <BiMap />
              <span>Uzbekistan</span>
            </Link>
            <Link to={"mailto:example@gmail.com"} className="contact__link">
              <MdOutlineEmail />
              <span>sanjarfayzullaev99@gmail.com</span>
            </Link>
          </div>
          <form onSubmit={onSubmit} className="contact__form">
            <h3 className='box-title'>Contact me <span></span></h3>
            <div className="contact__message">
              <input 
                type="text" 
                placeholder="Name" 
                name="name"
                value={messages.name} 
                onChange={handleChange}
                className="contact__input"
                required
              />
              <textarea 
                type="text" 
                placeholder="Message" 
                name="area"
                value={messages.area} 
                onChange={handleChange} 
                className="contact__area"
                required
              />
              <input 
                type="email" 
                placeholder="Email" 
                name="email"
                value={messages.email} 
                onChange={handleChange} 
                className="contact__input"
                required
              />
            </div>
            <button className="contact__send" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact