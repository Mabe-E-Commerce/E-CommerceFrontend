import React from 'react'
import Card from 'react-bootstrap/Card';
import './payment.css'
import { useSelector } from 'react-redux';


const Total = () => {
    const products = useSelector(state=>state.cart.products)
    const totalPrice = () => {
      let total = 0
      products.forEach((item) => (total += item.quantity * item.price))
      return total.toFixed(3);
  }
    return (
      <div className="priceinfos">
          {/* -------- Sağ kısım --------------------- */}
          <Card style={{width:'15em',height:'20em'}}>
            <Card.Body>
              <Card.Text style={{fontWeight:'500',fontSize:'24px'}}>Şipariş Özeti</Card.Text>
              <Card.Text style={{fontWeight:'300'}}>Ara Toplam ₺{totalPrice()}</Card.Text>
              <Card.Text style={{fontWeight:'300'}}>Kargo Toplam  ₺20.00</Card.Text>
              <Card style={{borderTopStyle:'initial',borderLeftStyle:'initial',borderRightStyle:'initial'}}>
                <Card.Text style={{fontWeight:'500',fontSize:'18px'}}>Toplam</Card.Text>
              </Card>
              <Card.Text style={{fontWeight:'500',fontSize:'18px',color:'orange'}}>₺{totalPrice()}</Card.Text>
            </Card.Body>
          </Card>
          <button  style={{width:'18em',height:'40px',margin:'10px',color:'white',backgroundColor:'#2879fe',border:'none',borderRadius:'10px'}}>Devam Et</button>
          
        </div>
    )
}

export default Total