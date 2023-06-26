
import './Card.css'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpg'

const Card = () => {

  const products= [image1,image2,image3,image4,image1]

  return (    
    <div className='container-general'>
        
          {products.map((item, index) => (
            <div key={index} className='card-item'>
                <div className='card-header'>
                    <div className='card-status-general'>
                        <p className='status-text'>ON SALE</p>
                        <div className='card-status'> 
                            <p className='status-stock-text'>In stock</p> 
                        </div>
                    </div>
                    <input className='card-quantity' placeholder="1"  type='number'/> 
                </div>
                <div className='container-image'>
                    <img src={item} className='image'></img>
                </div>
                <div className='container-detail'>
                    <h4 className='price-text'>Blue Partyhat</h4>
                    <h4 className='price-text'>$450.00</h4>
                    <p className='detail-text'>Lorem ipsum dolor sit amet consetetur sandipscing elitr</p>
                </div>
                <div className='container-button'>
                    <button className='button-details'>DETAILS </button>
                    <button className='button-add'>ADD </button>
                </div>
            </div>
          ))}
        
    </div>
  )
}

export default Card