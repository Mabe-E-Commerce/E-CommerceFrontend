import React, {useState} from 'react'
import Card from 'react-bootstrap/Card';
import '../payment.css'
import Total from '../Total'
import Kapida from './KapıdaOdeme/Kapida'
import Kredi from './KrediKartı/Kredi'
import Banka from './BankaKartı/Banka'

const PaymentOption = () => {
    const [currentPage, setCurrentPage] = useState('KapidaOdeme');

    function handlePageChange(page) {
    setCurrentPage(page);
    }
  return (
    <div>
      <Total />
      <div style={{marginLeft:'17.5em'}}>
        <button onClick={() => handlePageChange('KapidaOdeme')} style={{border:'none'}} >
          <Card style={{ width: '5rem',color:'orange',borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
            <Card.Body>
              <Card.Title style={{fontSize:'10px'}}>Kapıda Ödeme</Card.Title>       
            </Card.Body>
          </Card>
        </button>
        <button onClick={() => handlePageChange('KrediKarti')} style={{border:'none'}} >
          <Card style={{ width: '5rem',color:'orange',borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
            <Card.Body>
              <Card.Title style={{fontSize:'10px'}}>Kredi Kartı</Card.Title>       
            </Card.Body>
          </Card>
        </button>
        <button onClick={() => handlePageChange('BankaKarti')} style={{border:'none'}} >
          <Card style={{ width: '5rem',color:'orange',borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial',borderRadius:'2px'}}>
            <Card.Body>
              <Card.Title style={{fontSize:'10px'}}>Banka Kartı</Card.Title>       
            </Card.Body>
          </Card>
        </button>
        {currentPage === 'KapidaOdeme' && <Kapida />}
        {currentPage === 'KrediKarti' && <Kredi />}
        {currentPage === 'BankaKarti' && <Banka />}
      </div>
      
    </div>
  )
}

export default PaymentOption