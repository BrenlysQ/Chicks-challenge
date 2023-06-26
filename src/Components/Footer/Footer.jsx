import './Footer.css'
import logo from '../../assets/chicks-logo-large.svg'
import discord from '../../assets/socials/discord.svg'
import instagram from '../../assets/socials/instagram.svg'
import twitter from '../../assets/socials/twitter.svg'
import facebook from '../../assets/socials/facebook.svg'
const Footer = () => {

  return (    
    <div className='footer-general'>
    <div className='socials'>
      <img src={facebook} className='img-social'/>
      <img src={instagram} className='img-social'/>
      <img src={twitter} className='img-social'/>
      <img src={discord} className='img-social'/>
    </div>
    <hr className="solid"/>
      <div className='footer-options'>
          <div className='column'>
            <img src={logo} className='image-footer'/>
             <div className='email-support'>support@chicksgold.com </div>
          </div>
          <div className='footer-items'>
              <div className='column'>
                  <div className='item-options'>Chicks Gold </div>
                  <div className='item-option'>Games</div>
                  <div className='item-option'>About Us </div>
                  <div className='item-option'>Blog</div>
                  <div className='item-option'>SiteMap</div>
              </div>
              <div className='column'>
                  <div className='item-options'>Support</div>
                  <div className='item-option'>Contact Us </div>
                  <div className='item-option'>FAQ</div>
              </div>
              <div className='column'>
                  <div className='item-options'>Legal </div>
                  <div className='item-option'>Privacy Police</div>
                  <div className='item-option'>Term of Services</div>
                  <div className='item-option'>CopyRight Policy </div>
               </div>
          </div>
          <div className='items-stars'> 
            <div className='star-green'></div>
            <div className='star-green'></div>
            <div className='star-green'></div>
            <div className='star-green'></div>
            <div className='star-green'></div>
            <div className='trustpilot-reviews'>Trustpilot Reviews </div>
          </div> 
      </div>
      <div className='copyRight'> 
        2017 - 2023 Chicksgold.com. All Rights Reserved
      </div>
    </div>
  )
}

export default Footer