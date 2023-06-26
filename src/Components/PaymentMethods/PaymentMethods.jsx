import '../PaymentMethods/PaymentMethods.css'
import visa from '../../assets/payments/visa.svg'
import mastercard from '../../assets/payments/mastercard.svg'
import amex from '../../assets/payments/amex.svg'
import skrill from '../../assets/payments/skrill.svg'
import crypto from '../../assets/payments/crypto.svg'
const PaymentMethods = () =>  {

  return ( 
    <div className='payment-general'>
       
            <img src={visa} className='img-payments'/>
            <img src={mastercard} className='img-payments'/>
            <img src={amex} className='img-payments'/>
            <img src={skrill} className='img-payments'/>
            <img src={crypto} className='img-payments'/>
            <span className='more'>and 50+ more</span>
        
    </div>
  )
}

export default PaymentMethods