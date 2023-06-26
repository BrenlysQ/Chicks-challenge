
import backGround from './assets/backgroundsd.jpg'
import Card from "./Components/Card/Card"
import Header from './Components/Header/Header'
import SearchBar from './Components/SearchBar/SearchBar'
import './App.css'
import Footer from './Components/Footer/Footer'
import PaymentMethods from './Components/PaymentMethods/PaymentMethods'

function App () {

  return ( 
    <div>
      <Header/>
      <div  style={{ backgroundImage: `url(${backGround})` }} className='backGround'>      
        <div className='containter-general'>
          <h2 className='tilte-space'>Condimentum consectetur</h2>  
          <SearchBar/>
          <div className='content-card'>
            <Card />
            <div className='pagination'>
              <div className='square'> { '<' } </div>
              <div className='square-background'> { '1' } </div>
              <div className='numbers'>
                <div className='pagination-number'> { '2' } </div>
                <div className='pagination-number'> { '3' } </div>
                <div className='pagination-number'> { '4' } </div>
                <div className='pagination-number'> { '...' }</div>
                <div className='pagination-number'> { '11' } </div>
              </div>
              <div className='square'> { '>' } </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentMethods/>
      <Footer/>
    </div>
  )
}

export default App
