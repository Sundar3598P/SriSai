import React from 'react'
import Header from '../components/Header'
import { Container, Row, Col, Button } from 'react-bootstrap'

const ProductScreen = () => {
    return (
        <>
        <main>
            <Header/>
            <Container>
                <Row>
                   <Col>
                   <img src="https://omshreestores.com/wp-content/uploads/2020/02/akhand-cottonroll-1.jpg" Height="500"
                      className="d-inline-block align-top w-100"
                      alt="Vattulu" />  
                   </Col>

                    <Col>

                    <h1>AKNDA VATTULU</h1>

                    <p>During Navratri it is very auspicious to light the Akhand Jyoti in the home. It brings happiness and prosperity for the worshiper. In Sukand Puran it is mentioned that among the light of fire, the light of the Sun, the light of the Moon, this lamp (Akhand Jyoti) is the best of lights. The light from the Akhand Jyoti enlightened the human body and mind and increases the concentration. Due to increased concentration the worshiping of almighty becomes more effective.</p>
                 
                     <div>
                     <Button variant="primary" size="sm">
                      Description
                     </Button>{'   '}
                      <Button variant="secondary" size="sm" >
                       For More
                     </Button>
                    </div>

                </Col>
                </Row>
            </Container>

        </main>
        </>
            
      
    )
}

export default ProductScreen
