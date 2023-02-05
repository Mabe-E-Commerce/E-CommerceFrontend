import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import './payment.css'
import Services from '../Home/Services/Services'
import Footer from '../Home/Footer/MyFooter'
import ProductsPage from './ProductsPage/ProductsPage';
import Adress from './Adress/Adress';
import PaymentOption from './PaymentOptions/PaymentOption';


const Payment = () => {
    const [currentPage, setCurrentPage] = useState('page1');

    function handlePageChange(page) {
    setCurrentPage(page);
    }
  return (
    <>
    <div style={{marginBottom:'20em'}} className='infos'>
      
      <button onClick={() => handlePageChange('page1')} style={{border:'none'}} >
        <Card style={{ width: '15rem',borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
          <Card.Body>
            <Card.Title>Ürün Bilgileri</Card.Title>       
          </Card.Body>
        </Card>
      </button>
      <button onClick={() => handlePageChange('page2')} style={{border:'none'}}  >
        <Card style={{ width: '15rem' , borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
          <Card.Body>
            <Card.Title>Adres Bilgileri</Card.Title>      
          </Card.Body>
        </Card>
      </button>
      <button onClick={() => handlePageChange('page3')} style={{border:'none'}}  >
        <Card style={{ width: '18rem' , borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
          <Card.Body>
            <Card.Title>Ödeme Seçenekleri</Card.Title>      
          </Card.Body>
        </Card>
      </button>
      {currentPage === 'page1' && <ProductsPage />}
      {currentPage === 'page2' && <Adress />}
      {currentPage === 'page3' && <PaymentOption />}
    </div>
    <br />
    <br />
    <br />

    <Services  />
    <Footer />
    </>
  )
}

export default Payment

  

