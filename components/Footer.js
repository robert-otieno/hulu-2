import React, {useState} from 'react'

import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs'
import { FiChevronDown } from 'react-icons/fi'

const Footer = () => {
  const [open, setOpen] = useState(0)

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  return (
    <footer className="footer">
      <div className="footer--wrapper">
        <div className="footer--links">
          <div>
            <button className='accordion' onClick={() => handleOpen(1)}>Browse <FiChevronDown /></button>
            <ul className={`panel__list browse ${open === 1 ? 'block' : ''}`}>
              <span>
                <li>Streaming Library</li>
                <li>Live TV</li>
                <li>Live News</li>
                <li>Live Sports</li>
              </span>
              <span>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>Originals</li>
                <li>Networks</li>
                <li>Kids</li>
                <li>FX</li>
              </span>
              <span>
                <li>HBO Max™</li>
                <li>Cinemax</li>
                <li>Showtime</li>
                <li>STARZ</li>
              </span>
              <span>
                <li>Hulu, Disney+, and ESPN+</li>
                <li>Hulu (No Ads), Disney+, and ESPN+</li>
                <li>Student Discount</li>
              </span>
            </ul>
          </div>
          <div>
            <button className='accordion' onClick={() => handleOpen(2)}>Help <FiChevronDown /></button>
            <ul className={`panel__list ${open === 2 ? 'block' : ''}`}>
              <li>Account & Billing</li>
              <li>Plans & Pricing</li>
              <li>Supported Devices</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div>
            <button className='accordion' onClick={() => handleOpen(3)}>About Us <FiChevronDown /></button>
            <ul className={`panel__list ${open === 3 ? 'block' : ''}`}>
              <li>Shop Hulu</li>
              <li>Press</li>
              <li>Jobs</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer--social">
          <FaFacebookF />
          <BsTwitter />
          <BsYoutube />
          <BsInstagram />
        </div>
        <div className="footer--legal">
          <span>© 2022 Hulu, LLC</span>
          <span>About Ads</span>
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>Do Not Sell My Personal Information</span>
          <span>Your California Privacy Rights</span>
          <span>TV Parental Guidelines</span>
          <span>Sitemap</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer