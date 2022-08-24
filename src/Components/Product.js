import React from 'react'
import { Card } from 'react-bootstrap'
import '../styles/Cataloge.css'
import Ratting from './Ratting'

function Product({product}) {

  return (
    <div>
    
    <Card className='my-3 p-3'>
        <Card.Img src={product.Image}/>

        <Card.Body>
            <Card.Title as="div" className='productText semi-bold'> <strong>{product.productName}</strong> </Card.Title>
            <div className=' productText semi-bold mb-2'>
            <strong>{product.price}</strong> Rupees
            </div>

            <Card.Text as="p">
            <strong>Stock in count: <i>{product.StockCount}</i></strong><br/>
            <Ratting value={product.ratting} color={'#f8e825'}/>

        </Card.Text>
        </Card.Body>
        
        
       
        

    </Card>
    </div>
  )
}

export default Product