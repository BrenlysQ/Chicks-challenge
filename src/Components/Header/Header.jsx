
import {useState} from "react"
import './Header.css'
import logo from '../../assets/chicks-logo-large.svg'
const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  return (    
      <div className='nav-general'> 
        <img src={logo} className='image-header'></img>
        <div className={`nav-items ${isOpen && "open"}`}> 
          <div className='divider'></div>
          <div className='itemAlt'>USD </div>
          <div className='itemAlt'>CART(5)</div>  
          <div className='item'>CURRENCY </div>
          <div className='item'>ITEMS</div>
          <div className='item'>ACCOUNTS </div>
          <div className='item'>SERVICES </div>
          <div className='item'>SWAP</div>
          <div className='item'>SELL</div>
          
        </div>
        <div className='nav-items-last'> 
          <div className='item-last'>USD </div>
          <div className='item-last'>CART(5)</div>
          <button className='button-green'>SIGN IN </button>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={ () => setIsOpen(!isOpen)} >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  )
}

export default Header